import {BaseStyles, ThemeProvider, theme} from '@primer/react'
import {useMemo} from 'react'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcOldNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import './App.css'
import {normalizeDmcCode} from './utils'
import type {EmbroideryFlossColor} from './types'
import {HideColorsProvider} from './HideColorsContext'
import {RequireJpCoatsOldProvider} from './RequireJpCoatsOldContext'
import {Table} from './Table'
import {Filters} from './Filters'
import {RequireAnchorProvider} from './RequireAnchorContext'
import {chunkArray} from './utils'

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
  const colorChunks = useMemo(() => chunkArray(colors, Math.round(colors.length / 2)), [colors])
  return (
    <ThemeProvider colorMode="day" theme={theme}>
      <BaseStyles>
        <h1>Embroidery floss color conversion</h1>
        <HideColorsProvider>
          <RequireJpCoatsOldProvider>
            <RequireAnchorProvider>
              <Filters />
              {colorChunks.map((colorsInChunk, index) => (
                <Table key={`${index}-${colorsInChunk.length}`} colors={colorsInChunk} />
              ))}
            </RequireAnchorProvider>
          </RequireJpCoatsOldProvider>
        </HideColorsProvider>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
