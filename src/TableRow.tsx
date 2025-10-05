import {clsx} from 'clsx'
import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import './TableRow.css'

interface TableRowProps extends EmbroideryFlossColor {
  isOdd: boolean
}

const emptyCellContent = <span className="emptyCell">&mdash;</span>

export function TableRow({
  cosmoCodes,
  dmcCode,
  dmcName,
  isOdd,
  jpCoatsNew,
  jpCoatsOld,
  anchorCode,
  hexCode,
}: TableRowProps) {
  const {hideColors} = useHideColors()

  return (
    <tr className="tableRow">
      {!hideColors && <td style={{backgroundColor: hexCode}}></td>}
      <td>{dmcName}</td>
      <td className="codeCell">{dmcCode}</td>
      <td className={clsx('jpCoatsCell jpCoatsOldCell', {evenRow: !isOdd, oddRow: isOdd})}>
        {jpCoatsOld ? jpCoatsOld : emptyCellContent}
      </td>
      <td className={clsx('jpCoatsCell jpCoatsNewCell', {evenRow: !isOdd, oddRow: isOdd})}>
        {jpCoatsNew ? jpCoatsNew : emptyCellContent}
      </td>
      <td className="codeCell">{anchorCode ? anchorCode : emptyCellContent}</td>
      <td className="codeCell">{cosmoCodes ? <span>{cosmoCodes.join(', ')}</span> : emptyCellContent}</td>
    </tr>
  )
}
