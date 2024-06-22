import type {EmbroideryFlossColor} from './types'

interface TableRowProps extends EmbroideryFlossColor {
  onlyJpCoatsOld?: boolean
}

export const TableRow = ({dmcCode, dmcName, jpCoatsNew, jpCoatsOld, anchorCode, hexCode, onlyJpCoatsOld=false}: TableRowProps) => {
  if (onlyJpCoatsOld && jpCoatsOld === undefined) return null
  return (
    <tr key={dmcCode}>
      <td>{dmcCode}</td>
      <td>{dmcName}</td>
      <td>{jpCoatsOld}</td>
      <td>{jpCoatsNew}</td>
      <td>{anchorCode}</td>
      <td style={{backgroundColor: hexCode}}></td>
    </tr>
  )
}
