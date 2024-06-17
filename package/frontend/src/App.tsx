import { LanguageSelector } from "./components/languageSelector"
import { TextArea } from "./components/text-area"
import { AUTO_LANGUAGE } from "./utils/constants.ts/languages"
import { Section } from "./utils/enums/section"
import { translateReducer } from "./utils/hooks/useHooks"

function App() {
  const { loading, toLanguage, fromLanguage, fromText, result, setFromText, setResult, interchangeLanguages, setFromLanguage, setToLanguage } = translateReducer()

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <section className="flex justify-between  mb-5">
          <div className="relative flex ">
            <LanguageSelector
              type={Section.From}
              value={fromLanguage}
              onChange={setFromLanguage} />
          </div>

          <div className="flex">
            <button
              disabled={fromLanguage === AUTO_LANGUAGE}
              type="submit"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => {
                interchangeLanguages()
              }}
            >
              <img src="/exchange-svgrepo-com.svg" alt="Change Language" className="w-5 h-auto" />
            </button>
          </div>

          <div className="relative flex">
            <LanguageSelector
              type={Section.To}
              value={toLanguage}
              onChange={setToLanguage} />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">

          <TextArea
            type={Section.From}
            value={fromText}
            onChange={setFromText}
          />
          <TextArea
            loading={loading}
            type={Section.To}
            value={result}
            onChange={setResult}
          />


        </section>

      </div>
    </main>
  )

}

export default App
