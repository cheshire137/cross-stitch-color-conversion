import {createContext, type PropsWithChildren, useContext, useMemo} from 'react'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcOldNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import {normalizeDmcCode} from './utils'
import type {EmbroideryFlossColor} from './types'

interface Colors {
  colors: EmbroideryFlossColor[]
}

const ColorsContext = createContext<Colors | undefined>(undefined)

export const ColorsProvider = ({children}: PropsWithChildren) => {
  const dataByDmcCode = useMemo<Record<string, EmbroideryFlossColor>>(() => {
    const result: Record<string, EmbroideryFlossColor> = {}
    dmcNamedColorCodes.forEach(data => {
      result[normalizeDmcCode(data.dmcCode)] = data
    })
    dmcOldNewJpCoatsColors.forEach(data => {
      const key = normalizeDmcCode(data.dmcCode)
      if (result[key]) {
        result[key] = {...result[key], ...data}
      }
    })
    return result
  }, [dmcNamedColorCodes, dmcOldNewJpCoatsColors])
  const colors = useMemo<EmbroideryFlossColor[]>(
    () => Object.values(dataByDmcCode),
    [dataByDmcCode]
  )
  const contextProps = useMemo(() => ({colors}), [colors])
  return (
    <ColorsContext.Provider value={contextProps}>
      {children}
    </ColorsContext.Provider>
  )
}

export const useColors = () => {
  const context = useContext(ColorsContext)
  if (context === undefined) throw new Error('useColors must be used within a ColorsProvider')
  return context
}
