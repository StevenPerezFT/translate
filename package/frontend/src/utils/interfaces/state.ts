import { FromLanguage, Language } from "../types/language";

export interface IState {
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string,
    result: string,
    loading: boolean,
}