import axios from "axios";
import dotenv from "dotenv";
import NodeCache from "node-cache";

dotenv.config();

const CACHE_SERVER_URL = process.env.CACHE_URL || null;
const MAX_CACHE_TTL_SECONDS = 1800;
const localCache = new NodeCache({ stdTTL: MAX_CACHE_TTL_SECONDS, checkperiod: 300 });

const getEffectiveTtl = (ttl) => {
  const parsedTtl = Number(ttl);
  if (!Number.isFinite(parsedTtl) || parsedTtl <= 0) {
    return MAX_CACHE_TTL_SECONDS;
  }

  return Math.min(Math.floor(parsedTtl), MAX_CACHE_TTL_SECONDS);
};

export const getCachedData = async (key) => {
  try {
    if (CACHE_SERVER_URL) {
      const response = await axios.get(`${CACHE_SERVER_URL}/${key}`);
      return response.data;
    } else {
      return localCache.get(key);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    console.error("Error getting cache data:", error.message);
    return null;
  }
};

export const setCachedData = async (key, value, ttl = 3600) => {
  try {
    const effectiveTtl = getEffectiveTtl(ttl);

    if (CACHE_SERVER_URL) {
      await axios.post(CACHE_SERVER_URL, { key, value, ttl: effectiveTtl });
    } else {
      localCache.set(key, value, effectiveTtl);
    }
  } catch (error) {
    console.error("Error setting cache data:", error.message);
  }
};

