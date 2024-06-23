import {createContext, type PropsWithChildren, useContext, useMemo, useState} from 'react'

interface RequireJpCoatsOld {
  requireJpCoatsOld: boolean
  setRequireJpCoatsOld: (val: boolean) => void
}

const RequireJpCoatsOldContext = createContext<RequireJpCoatsOld | undefined>(undefined)

export const RequireJpCoatsOldProvider = ({children}: PropsWithChildren) => {
  const [requireJpCoatsOld, setRequireJpCoatsOld] = useState(false)
  const contextProps = useMemo(() => ({requireJpCoatsOld, setRequireJpCoatsOld}), [requireJpCoatsOld, setRequireJpCoatsOld])
  return <RequireJpCoatsOldContext.Provider value={contextProps}>{children}</RequireJpCoatsOldContext.Provider>
}

export const useRequireJpCoatsOld = () => {
  const context = useContext(RequireJpCoatsOldContext)
  if (context === undefined) throw new Error('useRequireJpCoatsOld must be used within a RequireJpCoatsOldProvider')
  return context
}
