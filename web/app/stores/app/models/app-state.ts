import { IAppState } from "../interfaces/app-state";

export class AppStateModel implements IAppState {

    constructor(attributes?: object) {
        attributes = attributes || {};

    }

}