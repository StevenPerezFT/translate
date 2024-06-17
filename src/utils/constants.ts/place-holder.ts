import { Section } from "../enums/section"

export const getPlaceHolder = ({ type, loading }: { type: Section, loading?: boolean }) => {
    if (type === Section.From) return "Insert a text"
    if (loading === true) {
        return 'Loading...'
    } else {
        return 'Translate'
    }
}
