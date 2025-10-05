import {TableRow} from './TableRow'
import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import './Table.css'

interface TableProps {
  colors: EmbroideryFlossColor[]
}

export function Table({colors}: TableProps) {
  const {hideColors} = useHideColors()

  return (
    <table>
      <thead>
        <tr>
          {!hideColors && (
            <th className="colorHeader" aria-label="Color" rowSpan={2}>
              &nbsp;
            </th>
          )}
          <th colSpan={2}>DMC</th>
          <th className="jpCoatsHeader" colSpan={2}>
            J&amp;P Coats
          </th>
          <th rowSpan={2}>Anchor</th>
          <th rowSpan={2}>Cosmo</th>
        </tr>
        <tr>
          <th className="nameHeader">Name</th>
          <th className="codeCell">Code</th>
          <th className="jpCoatsCell jpCoatsOldCell jpCoatsOldHeader">Old</th>
          <th className="jpCoatsCell jpCoatsNewHeader">New</th>
        </tr>
      </thead>
      <tbody>
        {colors.map(({dmcCode, ...data}, index) => (
          <TableRow key={dmcCode} dmcCode={dmcCode} isOdd={index % 2 !== 0} {...data} />
        ))}
      </tbody>
    </table>
  )
}
