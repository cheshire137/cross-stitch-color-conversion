import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'

interface TableRowProps extends EmbroideryFlossColor {}

export const TableRow = ({
  dmcCode,
  dmcName,
  jpCoatsNew,
  jpCoatsOld,
  anchorCode,
  hexCode,
}: TableRowProps) => {
  const {hideColors} = useHideColors()

  return (
    <tr>
      <td>{dmcCode}</td>
      <td>{dmcName}</td>
      <td>{jpCoatsOld ? jpCoatsOld : <>&mdash;</>}</td>
      <td>{jpCoatsNew ? jpCoatsNew : <>&mdash;</>}</td>
      <td>{anchorCode ? anchorCode : <>&mdash;</>}</td>
      {!hideColors && <td style={{backgroundColor: hexCode}}></td>}
    </tr>
  )
}
