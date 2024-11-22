import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                "type_here": "type here...",
                "about_us_text": "you have so many things to say to someone... but why does anyone need to know... so write it, send it and burn it... forever...",
                "about_us_copyright": "copyright © 2024 lanote",
                "language": "language",
                "sound_effects": "sound effects",
                "about": "about",
                "settings": "settings",
                "write": "write",
                "send": "send",
                "load_text": "the pigeon will hit the road soon...",
                "not_found_text": "i think we got lost in the palace, let's go home..."
            }
        },
        az: {
            translation: {
                "type_here": "buraya yazın...",
                "about_us_text": "sizin kiməsə deyəcək o qədər sözünüz var ki... bəs başqasının bunu bilməsi nəyə lazımdır... ona görə yazın, göndərin və yandırın... həmişəlik...",
                "about_us_copyright": "müəlliflik hüququ © 2024 lanote",
                "language": "dil",
                "sound_effects": "səs effektləri",
                "about": "haqqımızda",
                "settings": "tənzimləmələr",
                "write": "yaz",
                "send": "göndər",
                "load_text": "göyərçin tezliklə yola düşəcək...",
                "not_found_text": "deyəsən sarayda yolumuzu itirdik, gəl evə gedək..."
            }
        },
        tr: {
            translation: {
                "type_here": "buraya yazın...",
                "about_us_text": "birine söyleyecek o kadar çok şeyin var ki... ama neden başkalarının bilmesi gerekiyor... öyleyse yaz, gönder ve yak... sonsuza kadar...",
                "about_us_copyright": "telif hakkı © 2024 lanote",
                "language": "dil",
                "sound_effects": "ses efektleri",
                "about": "hakkımızda",
                "settings": "ayarlar",
                "write": "yaz",
                "send": "gönder",
                "load_text": "güvercin yakında yola çıkacak...",
                "not_found_text": "sanırım sarayda yolumuzu kaybettik, hadi eve gidelim..."
            }
        }
    }
});

export default i18n;