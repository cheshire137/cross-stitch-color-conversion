import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'
import type {SortOption} from './types'

export const sortOptions: SortOption[] = [
  'dmcCode',
  'dmcName',
  'jpcOld',
  'anchor',
  'jpcNew',
]

export const sortLabels: Record<SortOption, string> = {
  dmcCode: 'DMC Code',
  dmcName: 'DMC Name',
  jpcOld: 'J&P Coats (old)',
  anchor: 'Anchor',
  jpcNew: 'J&P Coats (new)',
}

interface Sort {
  sortOption: SortOption
  setSortOption: (val: SortOption) => void
}

const SortContext = createContext<Sort | undefined>(undefined)

export const SortProvider = ({children}: PropsWithChildren) => {
  const [sortOption, setSortOption] = useState<SortOption>('dmcCode')
  const contextProps = useMemo(
    () => ({sortOption, setSortOption}),
    [sortOption, setSortOption]
  )
  return (
    <SortContext.Provider value={contextProps}>{children}</SortContext.Provider>
  )
}

export const useSort = () => {
  const context = useContext(SortContext)
  if (context === undefined)
    throw new Error('useSort must be used within a SortProvider')
  return context
}
