import {Box} from '@primer/react'
import {TableRow} from './TableRow'
import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import './Table.css'
import primerPrimitives from '@primer/primitives'

interface TableProps {
  colors: EmbroideryFlossColor[]
}

export const Table = ({colors}: TableProps) => {
  const {hideColors} = useHideColors()
  return (
    <table>
      <thead>
        <tr>
          <Box as="th" colSpan={2}>DMC</Box>
          <Box as="th" sx={{backgroundColor: primerPrimitives.colors.light.canvas.subtle}} colSpan={2}>J&amp;P Coats</Box>
          <th rowSpan={2}>Anchor</th>
          {!hideColors && <th rowSpan={2}>Color</th>}
        </tr>
        <tr>
          <Box as="th" sx={{textAlign: 'left'}}>Name</Box>
          <Box as="th" sx={{textAlign: 'left'}}>Code</Box>
          <Box as="th" sx={{textAlign: 'left', backgroundColor: primerPrimitives.colors.light.canvas.subtle}}>Old</Box>
          <Box as="th" sx={{textAlign: 'left', backgroundColor: primerPrimitives.colors.light.canvas.subtle}}>New</Box>
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
