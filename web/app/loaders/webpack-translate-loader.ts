import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';

declare var System;

export class HashTranslateLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return from(System.import(`../../assets/i18n/${lang}.json`));
    }
}
