import fs from "fs";
import path from "path";
import axios from "axios";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { DEFAULT_HEADERS } from "../configs/header.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const AVATAR_DIR = path.join(__dirname, "../../public/avatars");

/**
 * Downloads an image from a URL and saves it to the local filesystem.
 * @param {string} url The URL of the image to download.
 * @param {string} category The category name (used for subfolder).
 * @returns {Promise<string>} The local relative path to the saved image.
 */
export const downloadAvatar = async (url, category) => {
    try {
        const categoryDir = path.join(AVATAR_DIR, category.replace("#", ""));
        if (!fs.existsSync(categoryDir)) {
            fs.mkdirSync(categoryDir, { recursive: true });
        }

        const fileName = path.basename(url);
        const filePath = path.join(categoryDir, fileName);

        // If file already exists, don't download again
        if (fs.existsSync(filePath)) {
            return `/avatars/${category.replace("#", "")}/${fileName}`;
        }

        const response = await axios({
            url,
            method: "GET",
            responseType: "arraybuffer",
            headers: {
                ...DEFAULT_HEADERS,
                "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                "Referer": "https://hianime.do/",
                "Accept-Language": "en-US,en;q=0.9",
            },
        });

        fs.writeFileSync(filePath, response.data);
        return `/avatars/${category.replace("#", "")}/${fileName}`;
    } catch (error) {
        console.error(`Error downloading avatar from ${url}:`, error.message);
        return null;
    }
};

/**
 * Gets the list of locally saved avatars.
 * @returns {object} Mapping of category to local paths.
 */
export const getLocalAvatars = () => {
    const result = {};
    if (!fs.existsSync(AVATAR_DIR)) return result;

    const categories = fs.readdirSync(AVATAR_DIR);
    for (const cat of categories) {
        const catPath = path.join(AVATAR_DIR, cat);
        if (fs.statSync(catPath).isDirectory()) {
            const files = fs.readdirSync(catPath);
            result[cat] = files.map(file => `/avatars/${cat}/${file}`);
        }
    }
    return result;
};
