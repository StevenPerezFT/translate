import { AUTO_LANGUAGE, SUPPORTED_LANGUAGE } from "../constants.ts/languages"

export type Language = keyof typeof SUPPORTED_LANGUAGE
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage
