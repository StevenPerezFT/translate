import { IState } from "../interfaces/state";

export const initialState: IState = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false,
}
