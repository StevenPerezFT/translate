import { useReducer } from "react"
import { type IState } from "../interfaces/state"
import { type Action } from "../types/types.dev"
import { FromLanguage, Language } from "../types/language"
import { AUTO_LANGUAGE } from "../constants.ts/languages"
import { initialState } from "../constants.ts/state"

function reducer(state: IState, action: Action) {
    const { type } = action

    if (type === 'INTERCHANGE_LANGUAGES') {
        if (state.fromLanguage === AUTO_LANGUAGE) return state

        const loading = state.fromText !== ''

        return {
            ...state,
            loading,
            result: '',
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        if (state.fromLanguage === action.payload) return state

        const loading = state.fromText !== ''

        return {
            ...state,
            fromLanguage: action.payload,
            result: '',
            loading
        }
    }

    if (type === 'SET_TO_LANGUAGE') {
        if (state.toLanguage === action.payload) return state
        const loading = state.fromText !== ''

        return {
            ...state,
            toLanguage: action.payload,
            result: '',
            loading
        }
    }

    if (type === 'SET_FROM_TEXT') {
        const loading = action.payload !== ''

        return {
            ...state,
            loading,
            fromText: action.payload,
            result: ''
        }
    }

    if (type === 'SET_RESULT') {
        return {
            ...state,
            loading: false,
            result: action.payload
        }
    }

    return state
}


export function translateReducer() {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        loading,
        result
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }
    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({
            type: 'SET_FROM_LANGUAGE', payload
        })
    }
    const setToLanguage = (payload: Language) => {
        dispatch({
            type: 'SET_TO_LANGUAGE', payload
        })
    }
    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }
    const setResult = (payload: string) => {
        dispatch({ type: "SET_RESULT", payload })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        loading,
        result,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}
