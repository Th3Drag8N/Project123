import axios from "axios";
import * as cheerio from "cheerio";
import formatTitle from "../helper/formatTitle.helper.js";
import { v1_base_url } from "../utils/base_v1.js";

async function extractSeasons(id, $ = null) {
  try {
    if (!$) {
      const resp = await axios.get(`https://${v1_base_url}/${id}`);
      $ = cheerio.load(resp.data);
    }
    const seasons = $(".os-list a.os-item")
      .map((index, element) => {
        const href = $(element).attr("href");
        const data_number = index;
        const data_id = parseInt(href.split("-").pop());
        const season = $(element).find(".title").text().trim();
        const title = $(element).attr("title").trim();
        const seasonId = href.replace(/^\/+/, "");
        const style = $(element).find(".season-poster").attr("style");
        const posterMatch = style ? style.match(/url\((.*?)\)/) : null;
        const season_poster = posterMatch ? posterMatch[1] : "";
        const isCurrent = $(element).hasClass("active");

        return { id: seasonId, data_number, data_id, season, title, season_poster, isCurrent };
      })
      .get();
    return seasons;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default extractSeasons;
