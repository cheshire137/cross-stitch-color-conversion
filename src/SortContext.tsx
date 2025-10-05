import {createContext, type PropsWithChildren, useContext, useMemo, useState} from 'react'
import type {SortOption} from './types'

export const sortOptions: SortOption[] = ['anchor', 'cosmo', 'dmcCode', 'dmcName', 'jpcNew', 'jpcOld']

export const sortLabels: Record<SortOption, string> = {
  cosmo: 'Cosmo code',
  dmcCode: 'DMC code',
  dmcName: 'DMC name',
  jpcOld: 'J&P Coats code (old)',
  anchor: 'Anchor code',
  jpcNew: 'J&P Coats code (new)',
}

interface Sort {
  sortOption: SortOption
  setSortOption: (val: SortOption) => void
}

const SortContext = createContext<Sort | undefined>(undefined)

export function SortProvider({children}: PropsWithChildren) {
  const [sortOption, setSortOption] = useState<SortOption>('dmcCode')
  const contextProps = useMemo(() => ({sortOption, setSortOption}), [sortOption])
  return <SortContext.Provider value={contextProps}>{children}</SortContext.Provider>
}

export function useSort() {
  const context = useContext(SortContext)
  if (context === undefined) throw new Error('useSort must be used within a SortProvider')
  return context
}
