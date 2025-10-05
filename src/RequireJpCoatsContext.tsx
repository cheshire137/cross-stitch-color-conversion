import {createContext, type PropsWithChildren, useContext, useMemo, useState} from 'react'

interface RequireJpCoats {
  requireJpCoats: boolean
  setRequireJpCoats: (val: boolean) => void
}

const RequireJpCoatsContext = createContext<RequireJpCoats | undefined>(undefined)

export const RequireJpCoatsProvider = ({children}: PropsWithChildren) => {
  const [requireJpCoats, setRequireJpCoats] = useState(false)
  const contextProps = useMemo(() => ({requireJpCoats, setRequireJpCoats}), [requireJpCoats, setRequireJpCoats])
  return <RequireJpCoatsContext.Provider value={contextProps}>{children}</RequireJpCoatsContext.Provider>
}

export const useRequireJpCoats = () => {
  const context = useContext(RequireJpCoatsContext)
  if (context === undefined) throw new Error('useRequireJpCoats must be used within a RequireJpCoatsProvider')
  return context
}
