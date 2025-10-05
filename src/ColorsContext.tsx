import {createContext, type PropsWithChildren, useContext, useMemo} from 'react'
import {useRequireAnchor} from './RequireAnchorContext'
import {useRequireJpCoats} from './RequireJpCoatsContext'
import {useRequireCosmo} from './contexts/cosmo-context'
import {useSearchContext} from './contexts/search-context'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import dmcCosmoColors from './assets/dmc-cosmo-colors.json'
import {colorCompareFunction, normalizeDmcCode, numericishStringCompare} from './utils'
import type {EmbroideryFlossColor} from './types'
import {useSort} from './SortContext'

interface Colors {
  colors: EmbroideryFlossColor[]
}

const ColorsContext = createContext<Colors | undefined>(undefined)

export function ColorsProvider({children}: PropsWithChildren) {
  const {requireAnchor} = useRequireAnchor()
  const {requireJpCoats} = useRequireJpCoats()
  const {requireCosmo} = useRequireCosmo()
  const {sortOption} = useSort()
  const {query, field} = useSearchContext()
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
    dmcCosmoColors.forEach(data => {
      const key = normalizeDmcCode(data.dmcCode)
      if (result[key]) {
        const newValue = {...result[key]}
        if (newValue.cosmoCodes === undefined) {
          newValue.cosmoCodes = [data.cosmoCode]
        } else {
          newValue.cosmoCodes.push(data.cosmoCode)
          newValue.cosmoCodes.sort(numericishStringCompare)
        }
        result[key] = newValue
      }
    })
    return result
  }, [])
  const colors = useMemo<EmbroideryFlossColor[]>(() => Object.values(dataByDmcCode), [dataByDmcCode])
  const contextProps = useMemo(
    () => ({
      colors: colors
        .filter(({anchorCode, cosmoCodes, jpCoatsOld, jpCoatsNew, dmcCode, dmcName}) => {
          if (requireAnchor && anchorCode === undefined) return false
          if (requireJpCoats && jpCoatsOld === undefined && jpCoatsNew === undefined) {
            return false
          }
          if (requireCosmo && (cosmoCodes === undefined || cosmoCodes.length < 1)) {
            return false
          }
          if (query.trim() !== '') {
            switch (field) {
              case 'dmcCode':
                if (!dmcCode.startsWith(query)) return false
                break
              case 'dmcName':
                if (!dmcName.startsWith(query)) return false
                break
              case 'anchor':
                if (anchorCode === undefined || !anchorCode.startsWith(query)) return false
                break
              case 'cosmo':
                if (cosmoCodes === undefined || cosmoCodes.length < 1) return false
                if (!cosmoCodes.some(c => c.startsWith(query))) return false
                break
              case 'jpcNew':
                if (jpCoatsNew === undefined || !jpCoatsNew.startsWith(query)) return false
                break
              case 'jpcOld':
                if (jpCoatsOld === undefined || !jpCoatsOld.startsWith(query)) return false
                break
            }
          }
          return true
        })
        .sort(colorCompareFunction(sortOption)),
    }),
    [colors, field, query, requireAnchor, requireCosmo, requireJpCoats, sortOption]
  )
  return <ColorsContext.Provider value={contextProps}>{children}</ColorsContext.Provider>
}

export function useColors() {
  const context = useContext(ColorsContext)
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorsProvider')
  }
  return context
}
