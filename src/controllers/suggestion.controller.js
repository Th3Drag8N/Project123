import getSuggestion from "../extractors/suggestion.extractor.js";
import convertForeignLanguage from "../helper/foreignInput.helper.js";
import { getCachedData, setCachedData } from "../helper/cache.helper.js";

export const getSuggestions = async (req) => {
  let { keyword } = req.query;

  // Check if the search keyword is in a foreign language and if it can be converted
  keyword = await convertForeignLanguage(keyword);

  const cacheKey = `suggestion_${keyword}`;
  try {
    const cachedResponse = await getCachedData(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
    const data = await getSuggestion(encodeURIComponent(keyword));
    setCachedData(cacheKey, data, 900).catch((err) => {
      console.error("Failed to set cache:", err);
    });
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

