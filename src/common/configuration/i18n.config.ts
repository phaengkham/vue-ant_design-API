import { createI18n } from "vue-i18n";
import enMessages from "@/common/localization/en.json";
import laMessages from "@/common/localization/la.json";

const i18n = createI18n({
    locale: "la",
    fallbackLocale: "en",
    messages: {
        en: enMessages,
        la: laMessages,
    },
});

export default i18n;