import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface ILangContext {
  language: string,
  setSpanish?(): void
  setEnglish?(): void
}


export const LangContext = createContext<ILangContext>({ language: "es" })

export function LangContextComponent({ children }: any) {
  const [lang, setLang] = useState("es")

  function setSpanish() {
    setLang("es")
  }
  function setEnglish() {
    setLang("en")
  }

  console.log(lang)
  return (
    <LangContext.Provider value={{ language: lang, setSpanish: setSpanish, setEnglish: setEnglish }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLanguage = () => {

  return useContext(LangContext)
}