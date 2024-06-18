import { FromLanguage, Language } from '../utils/types/language';

export async function translateText({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
}) {
    if (fromLanguage === toLanguage) return text

    try {
        const response = await fetch('http://localhost:4000/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, fromLanguage, toLanguage }),
        });

        const data = await response.json();
        return (data.text);

    } catch (error) {
        console.error('Error translating text:', error);
    }
}
