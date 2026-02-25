import axios from "axios";
import dotenv from "dotenv";
import NodeCache from "node-cache";

dotenv.config();

const CACHE_SERVER_URL = process.env.CACHE_URL || null;
const localCache = new NodeCache({ stdTTL: 3600, checkperiod: 600 }); // Default TTL: 1 hour

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
    if (CACHE_SERVER_URL) {
      await axios.post(CACHE_SERVER_URL, { key, value, ttl });
    } else {
      localCache.set(key, value, ttl);
    }
  } catch (error) {
    console.error("Error setting cache data:", error.message);
  }
};

