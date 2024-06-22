import {useMemo} from 'react'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcOldNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import './App.css'
import {normalizeDmcCode} from './utils'
import type {EmbroideryFlossColor} from './types'

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
  const colors = useMemo<EmbroideryFlossColor[]>(() => Object.values(dataByDmcCode), [dataByDmcCode])
  return (
    <>
      <h1>Embroidery floss color conversion</h1>
      <table>
        <thead>
          <tr>
            <th>DMC</th>
            <th>DMC Name</th>
            <th>J&amp;P Coats (old)</th>
            <th>J&amp;P Coats (new)</th>
            <th>Anchor</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {colors.map(data => (
            <tr key={data.dmcCode}>
              <td>{data.dmcCode}</td>
              <td>{data.dmcName}</td>
              <td>{data.jpCoatsOld}</td>
              <td>{data.jpCoatsNew}</td>
              <td>{data.anchorCode}</td>
              <td style={{backgroundColor: data.hexCode}}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
