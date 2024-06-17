import { FC } from "react"
import { SUPPORTED_LANGUAGE } from "../utils/constants.ts/languages"
import { type Language } from "../utils/types/language"
import { Section } from "../utils/enums/section"
import { Props } from "../utils/types/propsSelector"


export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <form autoComplete="none" >
            <select onChange={handleChange} value={value} className=" p-2 rounded-lg bg-white text-gray-600 cursor-pointer focus:outline-none">
                {type === Section.From && <option value='auto'>Auto</option>}
                {Object.entries(SUPPORTED_LANGUAGE).map(([key, literal]) => (
                    <option key={key} value={key}>
                        {literal}
                    </option>
                ))}
            </select>
        </form>
    )
}