import axios from 'axios';
import * as cheerio from 'cheerio';

async function test() {
    try {
        const res = await axios.get('https://hianime.to/spy-x-family-17977');
        const $ = cheerio.load(res.data);
        const items = [];
        $('.os-list a.os-item').each((i, el) => {
            items.push({
                title: $(el).attr('title'),
                href: $(el).attr('href'),
                season: $(el).find('.title').text().trim(),
                isCurrent: $(el).hasClass('active'),
                poster: $(el).find('.season-poster').attr('style')?.match(/url\((.*?)\)/)?.[1] || ""
            });
        });
        console.log(JSON.stringify(items, null, 2));
    } catch (err) {
        console.error(err.message);
    }
}
test();
