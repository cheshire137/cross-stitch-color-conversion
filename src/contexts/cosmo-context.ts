import {createContext, useContext} from 'react'

interface RequireCosmoContextProps {
  requireCosmo: boolean
  setRequireCosmo: (val: boolean) => void
}

export const RequireCosmoContext = createContext<RequireCosmoContextProps | undefined>(undefined)

export function useRequireCosmo() {
  const context = useContext(RequireCosmoContext)
  if (context === undefined) {
    throw new Error('useRequireCosmo must be used within a RequireCosmoProvider')
  }
  return context
}
