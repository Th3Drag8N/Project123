import extractSchedule from "../extractors/schedule.extractor.js";
import { getCachedData, setCachedData } from "../helper/cache.helper.js";

export const getSchedule = async (req) => {
  const date = req.query.date;
  const tzOffset = req.query.tzOffset || -330;
  const cacheKey = `schedule_${date}_${tzOffset}`;

  try {
    const cachedResponse = await getCachedData(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
    const data = await extractSchedule(date, tzOffset);
    setCachedData(cacheKey, data, 3600).catch((err) => {
      console.error("Failed to set cache:", err);
    });
    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

