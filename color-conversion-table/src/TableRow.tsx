import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import {useRequireAnchor} from './RequireAnchorContext'
import {useRequireJpCoatsOld} from './RequireJpCoatsOldContext'

interface TableRowProps extends EmbroideryFlossColor {}

export const TableRow = ({
  dmcCode,
  dmcName,
  jpCoatsNew,
  jpCoatsOld,
  anchorCode,
  hexCode,
}: TableRowProps) => {
  const {requireJpCoatsOld} = useRequireJpCoatsOld()
  const {hideColors} = useHideColors()
  const {requireAnchor} = useRequireAnchor()

  if (requireAnchor && anchorCode === undefined) return null
  if (requireJpCoatsOld && jpCoatsOld === undefined) return null

  return (
    <tr>
      <td>{dmcCode}</td>
      <td>{dmcName}</td>
      <td>{jpCoatsOld ? jpCoatsOld : (<>&mdash;</>)}</td>
      <td>{jpCoatsNew ? jpCoatsNew : (<>&mdash;</>)}</td>
      <td>{anchorCode ? anchorCode : (<>&mdash;</>)}</td>
      {!hideColors && <td style={{backgroundColor: hexCode}}></td>}
    </tr>
  )
}
