
export class URLValidator {
    validateUrl(urlString: string) {
        const link = require('url').URL;
        try {
            new URL(urlString)
            return true
        } catch {
            return false
        }
    }

}