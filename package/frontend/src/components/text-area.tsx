import { Section } from "../utils/enums/section"
import { ITextArea } from "../utils/interfaces/props-text.area"


const getPlaceholder = ({ type, loading }: { type: Section, loading?: boolean }) => {
    if (type === Section.From) return 'Introducir texto'
    if (loading === true) return 'Cargando...'
    return 'Traducción'
}


export const TextArea = ({ type, loading, value, onChange }: ITextArea) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }
    return (
        <form>
            <textarea
                autoFocus={type === Section.From}
                disabled={type === Section.To}
                className="w-full h-48 p-4 border rounded-lg"//Colocar los stilos como childen
                placeholder={getPlaceholder({ type, loading })}
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}