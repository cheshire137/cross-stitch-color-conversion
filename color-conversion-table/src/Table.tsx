import {TableRow} from './TableRow'
import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import './Table.css'

interface TableProps {
  colors: EmbroideryFlossColor[]
}

export const Table = ({colors}: TableProps) => {
  const {hideColors} = useHideColors()
  return (
    <table>
      <thead>
        <tr>
          <th>DMC</th>
          <th>DMC Name</th>
          <th>J&amp;P Coats (old)</th>
          <th>J&amp;P Coats (new)</th>
          <th>Anchor</th>
          {!hideColors && <th>Color</th>}
        </tr>
      </thead>
      <tbody>
        {colors.map(({dmcCode, ...data}) => (
          <TableRow key={dmcCode} dmcCode={dmcCode} {...data} />
        ))}
      </tbody>
    </table>
  )
}
