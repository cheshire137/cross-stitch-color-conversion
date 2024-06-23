import type {EmbroideryFlossColor} from './types'

interface TableRowProps extends EmbroideryFlossColor {
  requireAnchor?: boolean
  requireJpCoatsOld?: boolean
}

export const TableRow = ({
  dmcCode,
  dmcName,
  jpCoatsNew,
  jpCoatsOld,
  anchorCode,
  hexCode,
  requireAnchor = false,
  requireJpCoatsOld = false,
}: TableRowProps) => {
  if (requireAnchor && anchorCode === undefined) return null
  if (requireJpCoatsOld && jpCoatsOld === undefined) return null
  return (
    <tr>
      <td>{dmcCode}</td>
      <td>{dmcName}</td>
      <td>{jpCoatsOld}</td>
      <td>{jpCoatsNew}</td>
      <td>{anchorCode}</td>
      <td style={{backgroundColor: hexCode}}></td>
    </tr>
  )
}
