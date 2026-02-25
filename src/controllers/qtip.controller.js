import extractQtip from "../extractors/qtip.extractor.js";
import { getCachedData, setCachedData } from "../helper/cache.helper.js";

export const getQtip = async (req) => {
  const { id } = req.params;
  const cacheKey = `qtip_${id}`;
  try {
    const cachedResponse = await getCachedData(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
    const data = await extractQtip(id);
    setCachedData(cacheKey, data, 86400).catch((err) => {
      console.error("Failed to set cache:", err);
    });
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

