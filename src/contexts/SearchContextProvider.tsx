import {type PropsWithChildren, useMemo, useState} from 'react'
import {SearchContext} from './search-context'
import type {SortOption} from '../types'

export function SearchContextProvider({children}: PropsWithChildren) {
  const [field, setField] = useState<SortOption>('dmcCode')
  const [query, setQuery] = useState('')
  const contextProps = useMemo(() => ({field, setField, query, setQuery}), [field, query])
  return <SearchContext.Provider value={contextProps}>{children}</SearchContext.Provider>
}
