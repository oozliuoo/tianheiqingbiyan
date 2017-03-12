/**
 * Global language code class and helper methods
 */
class GlobalLanguage {
    // defaulting to Chinese
    static lang;

    supportedLang = ["zh-cn", "en"];

    constructor() {
        this.lang = "zh-cn";
    }

    getLanguageCode() {
        return this.lang;
    }

    setLanguageCode(code) {
        if (this.supportedLang.indexOf(code) !== -1) {
            this.lang = code;
        }
    }
}

export default new GlobalLanguage();