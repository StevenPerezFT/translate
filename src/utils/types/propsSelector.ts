import { Section } from "../enums/section";
import { FromLanguage, Language } from "./language";

export type Props =
    | { type: Section.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: Section.To, value: Language, onChange: (Language: Language) => void }
