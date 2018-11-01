import { IAppState } from "../interfaces/app-state";
import { AppStateModel } from "../models/app-state";
import { Action } from "@ngrx/store";

declare let _: any;

export function appReducer(state: IAppState = new AppStateModel(), action: Action): IAppState {

    return new AppStateModel(state);
}