import extractSearchResults from "../extractors/search.extractor.js";
import convertForeignLanguage from "../helper/foreignInput.helper.js";
import { getCachedData, setCachedData } from "../helper/cache.helper.js";

export const search = async (req) => {
  try {
    let { keyword, type, status, rated, score, season, language, genres, sort, sy, sm, sd, ey, em, ed } = req.query;
    let page = parseInt(req.query.page) || 1;

    // Check if the search keyword is in a foreign language and if it can be converted
    keyword = await convertForeignLanguage(keyword);

    const cacheKey = `search_${JSON.stringify({ keyword, type, status, rated, score, season, language, genres, sort, page, sy, sm, sd, ey, em, ed })}`;
    const cachedResponse = await getCachedData(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }

    const [totalPage, data] = await extractSearchResults({
      keyword, type, status, rated, score, season, language, genres, sort, page, sy, sm, sd, ey, em, ed
    });

    if (page > totalPage) {
      const error = new Error("Requested page exceeds total available pages.");
      error.status = 404;
      throw error;
    }

    const responseData = { data, totalPage };
    setCachedData(cacheKey, responseData, 1800).catch((err) => {
      console.error("Failed to set cache:", err);
    });
    return responseData;
  } catch (e) {
    console.error(e);
    if (e.status === 404) {
      throw e;
    }
    throw new Error("An error occurred while processing your request.");
  }
};

