import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'

interface RequireAnchor {
  requireAnchor: boolean
  setRequireAnchor: (val: boolean) => void
}

const RequireAnchorContext = createContext<RequireAnchor | undefined>(undefined)

export const RequireAnchorProvider = ({children}: PropsWithChildren) => {
  const [requireAnchor, setRequireAnchor] = useState(false)
  const contextProps = useMemo(
    () => ({requireAnchor, setRequireAnchor}),
    [requireAnchor, setRequireAnchor]
  )
  return (
    <RequireAnchorContext.Provider value={contextProps}>
      {children}
    </RequireAnchorContext.Provider>
  )
}

export const useRequireAnchor = () => {
  const context = useContext(RequireAnchorContext)
  if (context === undefined)
    throw new Error(
      'useRequireAnchor must be used within a RequireAnchorProvider'
    )
  return context
}
