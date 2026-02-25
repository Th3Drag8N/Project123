import { getHomeInfo } from "../controllers/homeInfo.controller.js";
import getTopSearch from "../controllers/topsearch.controller.js";
import { getTopTen } from "../controllers/topten.controller.js";
import { getSchedule } from "../controllers/schedule.controller.js";
import { getCategory } from "../controllers/category.controller.js";

const preloadMainData = async () => {
    console.log("Preloading main data...");
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.toISOString().split("T")[0];

    // Get all dates for the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
        const day = i < 10 ? `0${i}` : i;
        const m = month + 1 < 10 ? `0${month + 1}` : month + 1;
        monthDates.push(`${year}-${m}-${day}`);
    }

    try {
        // Standard Preloads
        const basePreloads = [
            getHomeInfo(),
            getTopSearch(),
            getTopTen(),
            // Preload Important Categories
            getCategory({ query: { page: 1 } }, {}, "top-airing"),
            getCategory({ query: { page: 1 } }, {}, "most-popular"),
            getCategory({ query: { page: 1 } }, {}, "most-favorite"),
            getCategory({ query: { page: 1 } }, {}, "completed"),
            getCategory({ query: { page: 1 } }, {}, "recently-updated"),
            getCategory({ query: { page: 1 } }, {}, "recently-added"),
            getCategory({ query: { page: 1 } }, {}, "top-upcoming")
        ];

        await Promise.all(basePreloads);

        // Preload Month Schedule (sequential or small chunks to be polite to the source)
        console.log(`Preloading schedule for ${monthDates.length} days...`);
        for (const date of monthDates) {
            // We don't need to await each one if we want them fast, 
            // but let's do it in small batches or sequentially to avoid hitting rate limits.
            await getSchedule({ query: { date } });
        }

        console.log("Main data and monthly schedule preloaded successfully.");
    } catch (error) {
        console.error("Error preloading main data:", error);
    }
};

export const startPreloader = () => {
    // Run once on startup
    preloadMainData();

    // Run every hour
    setInterval(preloadMainData, 3600000);
};
