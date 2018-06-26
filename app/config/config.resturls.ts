import { Injectable } from '@angular/core';

/**
 * Created by dimah on 07/06/17.
 */
@Injectable()
export class RestUrlsConfig {

    static readonly FESD  = "fe";  // frontend sub-domain
    static readonly APPSD = "app"; // app sub-domain

    // TODO: change to use environment variables
    private _dev = /\w+\.d\..+\.signature-it\.com$/.test(location.hostname);

    get appURL(): string {
        let rgx = new RegExp(`(?!:\/\/)${RestUrlsConfig.FESD}`);
        return location.origin.replace(rgx, RestUrlsConfig.APPSD);
    }

    get beURL(): string {
        let rgx = (this._dev)
            ? new RegExp(`(?!:\/\/)${RestUrlsConfig.FESD}-`)
            : new RegExp(`(?!:\/\/)${RestUrlsConfig.FESD}\.`);
        return location.origin.replace(rgx, '');
    }

    get domain(): string {
        let rgx = (this._dev)
            ? new RegExp(`^${RestUrlsConfig.FESD}-`)
            : new RegExp(`^${RestUrlsConfig.FESD}\.`);
        let hn = location.hostname.replace(rgx, '');
        return "." + (this._dev ? hn.match(/\.(.*)/)[1] : hn);
    }

}