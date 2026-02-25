import { downloadAvatar, getLocalAvatars } from "../helper/avatar.helper.js";

const AVATAR_DATA = {
    "#AttackOnTitan": [
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/20.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_10.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/attack_on_titan/aot_011.png"
    ],
    "#Berserk": [
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/berserk/berserk_010.png"
    ],
    "#Bleach": [
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/bleach/bleanch_010.png"
    ],
    "#ChainSaw": [
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/chainsaw/09.png"
    ],
    "#Conan": [
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/06.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/07.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/8.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/9.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/10.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/11.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/12.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/13.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/conan/14.png"
    ],
    "#DeathNote": [
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/deadnote/dead_note_010.png"
    ],
    "#DemonSlayer": [
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File1.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File2.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File3.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File4.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File5.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File6.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File7.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File8.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File9.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File10.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File11.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File12.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File13.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File14.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File15.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File16.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File17.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File18.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File19.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/demon_splayer/File20.jpg"
    ],
    "#DragonBall": [
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball/av-db-01.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball/av-db-02.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball/av-db-03.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball/av-db-04.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball/av-db-05.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball/av-db-06.jpeg"
    ],
    "#DragonBallChibi": [
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/bulma.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/buumap.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/cell.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/freezer.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/gogeta.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/gohan.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/goku.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/goku-saiyan.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/gotenk.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/kaio.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/krillin.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/mabu.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/mrsatan.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/MutenRoshi.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/picolo.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/tenshihan.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/trunks.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/vegeta.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/videl.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/dragon_ball_chibi/beerus.png"
    ],
    "#HXH": [
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-17.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-18.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-19.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-20.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-21.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-22.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-23.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-24.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/mha/avatar-25.png"
    ],
    "#Haikyu": [
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_010.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/haikyu/haikyu_011.png"
    ],
    "#JujutsuKaisen": [
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File1.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File2.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File3.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File4.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File5.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File6.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File7.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File8.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File9.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File10.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File11.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File12.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File13.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/jujutsu_kaisen/File14.png"
    ],
    "#Naruto": [
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/08.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/09.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/11.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/naruto/naruto_010.png"
    ],
    "#OnePiece": [
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-00.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-01.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-02.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-03.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-04.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-05.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-06.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-07.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-08.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-09.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-10.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-11.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/03.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/04.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/05.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/18.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File1.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File2.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File3.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File4.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File5.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File6.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File7.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_piece/File8.png"
    ],
    "#OnePunchMan": [
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/14.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/one_punch_man/opm_010.png"
    ],
    "#Sakura": [
        "https://cdn.noitatnemucod.net/avatar/100x100/sakura/10.jpg"
    ],
    "#SpyFamily": [
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/spy_family/08.png"
    ],
    "#THA": [
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/01.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/02.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/12.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/13.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/15.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/16.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/17.jpg",
        "https://cdn.noitatnemucod.net/avatar/100x100/tha/19.jpg"
    ],
    "#Zoro": [
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-01.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-02.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-03.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-04.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-05.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-06.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-07.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-08.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-09.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-10.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-11.jpeg",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_normal/av-zz-12.jpeg"
    ],
    "#ZoroChibi": [
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-10.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-11.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar-12.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-01.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-02.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-03.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-04.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-05.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-06.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-07.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-08.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-09.png",
        "https://cdn.noitatnemucod.net/avatar/100x100/zoro_chibi/avatar2-10.png"
    ]
};

export const getAvatars = async (req, res) => {
    try {
        const localAvatars = getLocalAvatars();
        if (Object.keys(localAvatars).length > 0) {
            return localAvatars;
        }
        return { message: "No avatars found. Run scrape first." };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const scrapeAvatars = async (req, res) => {
    try {
        const results = {};
        for (const [category, urls] of Object.entries(AVATAR_DATA)) {
            const savedPaths = [];
            for (const url of urls) {
                const localPath = await downloadAvatar(url, category);
                if (localPath) savedPaths.push(localPath);
            }
            results[category.replace("#", "")] = savedPaths;
        }
        return { message: "Scrape completed successfully", categories: Object.keys(results).length, data: results };
    } catch (error) {
        console.error("Scrape failed:", error);
        throw error;
    }
};
