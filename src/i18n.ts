import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                "type_here": "type here...",
                "about_us_text": "You have so many things to say to someone... but why does anyone need to know... so write it, send it and burn it... forever...",
                "about_us_copyright": "Copyright © 2024 lanote",
                "language": "Language",
                "sound_effects": "Sound effects",
            }
        },
        az: {
            translation: {
                "type_here": "buraya yazın...",
                "about_us_text": "Sizin kiməsə deyəcək o qədər sözünüz var ki... bəs başqasının bunu bilməsi nəyə lazımdır... ona görə yazın, göndərin və yandırın... həmişəlik...",
                "about_us_copyright": "Müəlliflik hüququ © 2024 lanote",
                "language": "Dil",
                "sound_effects": "Səs effektləri",
            }
        },
        tr: {
            translation: {
                "type_here": "buraya yazın...",
                "about_us_text": "Birine söyleyecek o kadar çok şeyin var ki... ama neden başkalarının bilmesi gerekiyor... öyleyse yaz, gönder ve yak... sonsuza kadar...",
                "about_us_copyright": "Telif hakkı © 2024 lanote",
                "language": "Dil",
                "sound_effects": "Ses efektleri",
            }
        }
    }
});

export default i18n;