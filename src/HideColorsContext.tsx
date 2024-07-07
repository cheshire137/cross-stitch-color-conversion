import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'

interface HideColors {
  hideColors: boolean
  setHideColors: (val: boolean) => void
}

const HideColorsContext = createContext<HideColors | undefined>(undefined)

export const HideColorsProvider = ({children}: PropsWithChildren) => {
  const [hideColors, setHideColors] = useState(false)
  const contextProps = useMemo(
    () => ({hideColors, setHideColors}),
    [hideColors, setHideColors]
  )
  return (
    <HideColorsContext.Provider value={contextProps}>
      {children}
    </HideColorsContext.Provider>
  )
}

export const useHideColors = () => {
  const context = useContext(HideColorsContext)
  if (context === undefined)
    throw new Error('useHideColors must be used within a HideColorsProvider')
  return context
}
