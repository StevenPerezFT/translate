import { Section } from "../enums/section"

export interface ITextArea {
    type: Section
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

