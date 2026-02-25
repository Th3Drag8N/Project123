import extractTopSearch from "../extractors/topsearch.extractor.js";
import { getCachedData, setCachedData } from "../helper/cache.helper.js";

const getTopSearch = async () => {
  const cacheKey = "topSearch";
  try {
    const cachedResponse = await getCachedData(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
    const data = await extractTopSearch();
    setCachedData(cacheKey, data, 3600).catch((err) => {
      console.error("Failed to set cache:", err);
    });
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default getTopSearch;

