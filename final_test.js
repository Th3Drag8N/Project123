import extractAnimeInfo from './src/extractors/animeInfo.extractor.js';

async function test() {
    try {
        const id = 'spy-x-family-17977';
        console.log(`Testing extraction for: ${id}`);
        const data = await extractAnimeInfo(id);
        console.log('Seasons extracted:', data.seasons?.length || 0);
        if (data.seasons && data.seasons.length > 0) {
            console.log('First season sample:', JSON.stringify(data.seasons[0], null, 2));
        } else {
            console.log('No seasons found.');
        }
    } catch (err) {
        console.error('Test failed:', err);
    }
}
test();
