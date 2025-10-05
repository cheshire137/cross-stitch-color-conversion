import {createContext, useContext} from 'react'
import type {SortOption} from '../types'

interface SearchContextProps {
  field: SortOption
  setField: (val: SortOption) => void
  query: string
  setQuery: (val: string) => void
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchContextProvider')
  }
  return context
}
