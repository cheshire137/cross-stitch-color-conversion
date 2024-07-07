import {createContext, type PropsWithChildren, useContext, useMemo} from 'react'
import {useRequireAnchor} from './RequireAnchorContext'
import {useRequireJpCoats} from './RequireJpCoatsContext'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import {colorCompareFunction, normalizeDmcCode} from './utils'
import type {EmbroideryFlossColor} from './types'
import {useSort} from './SortContext'

interface Colors {
  colors: EmbroideryFlossColor[]
}

const ColorsContext = createContext<Colors | undefined>(undefined)

export const ColorsProvider = ({children}: PropsWithChildren) => {
  const {requireAnchor} = useRequireAnchor()
  const {requireJpCoats} = useRequireJpCoats()
  const {sortOption} = useSort()
  const dataByDmcCode = useMemo<Record<string, EmbroideryFlossColor>>(() => {
    const result: Record<string, EmbroideryFlossColor> = {}
    dmcNamedColorCodes.forEach(data => {
      result[normalizeDmcCode(data.dmcCode)] = data
    })
    dmcNewJpCoatsColors.forEach(data => {
      const key = normalizeDmcCode(data.dmcCode)
      if (result[key]) {
        result[key] = {...result[key], ...data}
      }
    })
    return result
  }, [dmcNamedColorCodes, dmcNewJpCoatsColors])
  const colors = useMemo<EmbroideryFlossColor[]>(
    () => Object.values(dataByDmcCode),
    [dataByDmcCode]
  )
  const contextProps = useMemo(
    () => ({
      colors: colors
        .filter(({anchorCode, jpCoatsOld, jpCoatsNew}) => {
          if (requireAnchor && anchorCode === undefined) return false
          if (
            requireJpCoats &&
            jpCoatsOld === undefined &&
            jpCoatsNew === undefined
          ) {
            return false
          }
          return true
        })
        .sort(colorCompareFunction(sortOption)),
    }),
    [colors, requireAnchor, requireJpCoats, sortOption]
  )
  return (
    <ColorsContext.Provider value={contextProps}>
      {children}
    </ColorsContext.Provider>
  )
}

export const useColors = () => {
  const context = useContext(ColorsContext)
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorsProvider')
  }
  return context
}
