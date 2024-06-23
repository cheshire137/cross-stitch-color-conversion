import {useMemo, useState} from 'react'
import dmcNamedColorCodes from './assets/dmc-color-codes-names.json'
import dmcOldNewJpCoatsColors from './assets/dmc-old-new-jp-coats-colors.json'
import './App.css'
import {normalizeDmcCode} from './utils'
import type {EmbroideryFlossColor} from './types'
import {TableRow} from './TableRow'

function App() {
  const [requireJpCoatsOld, setRequireJpCoatsOld] = useState(false)
  const [requireAnchor, setRequireAnchor] = useState(false)
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
    <>
      <h1>Embroidery floss color conversion</h1>
      <fieldset className="noprint">
        <legend>Filters</legend>
        <label>
          <input
            checked={requireJpCoatsOld}
            onChange={() => setRequireJpCoatsOld(!requireJpCoatsOld)}
            type="checkbox"
          />
          J&amp;P Coats (old)
        </label>
        <label>
          <input
            checked={requireAnchor}
            onChange={() => setRequireAnchor(!requireAnchor)}
            type="checkbox"
          />
          Anchor
        </label>
      </fieldset>
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
          {colors.map(({dmcCode, ...data}) => (
            <TableRow
              key={dmcCode}
              dmcCode={dmcCode}
              requireAnchor={requireAnchor}
              requireJpCoatsOld={requireJpCoatsOld}
              {...data}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
