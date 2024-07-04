import {BaseStyles, Box, ThemeProvider, theme} from '@primer/react'
import {useMemo} from 'react'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcOldNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import './App.css'
import {normalizeDmcCode} from './utils'
import type {EmbroideryFlossColor} from './types'
import {HideColorsProvider} from './HideColorsContext'
import {RequireJpCoatsOldProvider} from './RequireJpCoatsOldContext'
import {RequireAnchorProvider} from './RequireAnchorContext'
import {Header} from './Header'
import {FiltersAndTable} from './FiltersAndTable'

function App() {
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
  return (
    <ThemeProvider colorMode="day" theme={theme}>
      <BaseStyles>
        <HideColorsProvider>
          <RequireJpCoatsOldProvider>
            <RequireAnchorProvider>
              <Header />
              <FiltersAndTable colors={colors} />
            </RequireAnchorProvider>
          </RequireJpCoatsOldProvider>
        </HideColorsProvider>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
