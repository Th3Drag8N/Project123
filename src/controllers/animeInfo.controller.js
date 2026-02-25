import extractAnimeInfo from "../extractors/animeInfo.extractor.js";
import { getCachedData, setCachedData } from "../helper/cache.helper.js";

export const getAnimeInfo = async (req, res) => {
  const { id } = req.query;
  const cacheKey = `animeInfo_${id}`;

  try {
    const cachedResponse = await getCachedData(cacheKey);
    if (cachedResponse && Object.keys(cachedResponse).length > 0) {
      return cachedResponse;
    }
    const data = await extractAnimeInfo(id);
    const responseData = { data: data, seasons: data.seasons };
    setCachedData(cacheKey, responseData, 86400).catch((err) => {
      console.error("Failed to set cache:", err);
    });
    return responseData;
  } catch (e) {
    console.error(e);
    return { error: "An error occurred" };
  }

};
