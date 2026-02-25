import axios from 'axios';
import * as cheerio from 'cheerio';

async function test() {
    try {
        const id = 'spy-x-family-17977';
        const urls = [
            `https://hianime.to/${id}`,
            `https://hianime.to/watch/${id}`
        ];

        for (const url of urls) {
            console.log(`Testing URL: ${url}`);
            const res = await axios.get(url);
            const $ = cheerio.load(res.data);
            console.log(`  .os-list a.os-item count: ${$('.os-list a.os-item').length}`);
            console.log(`  .os-list > a count: ${$('.os-list > a').length}`);
            console.log(`  Full selector count: ${$('.anis-watch > .other-season > .inner > .os-list > a').length}`);
        }
    } catch (err) {
        console.error(err.message);
    }
}
test();
