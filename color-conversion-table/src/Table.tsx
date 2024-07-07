import deepmerge from 'deepmerge'
import {Box, type SxProp} from '@primer/react'
import {TableRow, codeCellStyles, jpCoatsCellStyles} from './TableRow'
import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import './Table.css'
import primerPrimitives from '@primer/primitives'

interface TableProps {
  colors: EmbroideryFlossColor[]
}

export const Table = ({colors}: TableProps) => {
  const {hideColors} = useHideColors()
  const jpCoatsHeaderStyles = deepmerge<SxProp['sx']>(
    {
      borderLeft: '1px solid',
      borderRight: '1px solid',
      backgroundColor: primerPrimitives.colors.light.canvas.subtle,
    },
    jpCoatsCellStyles
  )
  const jpCoatsOldStyles = deepmerge<SxProp['sx']>(
    {
      borderLeft: '1px solid',
      textAlign: 'left',
      backgroundColor: primerPrimitives.colors.light.canvas.subtle,
    },
    jpCoatsCellStyles
  )
  const jpCoatsNewStyles = deepmerge<SxProp['sx']>(
    {
      borderRight: '1px solid',
      textAlign: 'left',
      backgroundColor: primerPrimitives.colors.light.canvas.subtle,
    },
    jpCoatsCellStyles
  )

  return (
    <table>
      <thead>
        <tr>
          <Box as="th" colSpan={2}>
            DMC
          </Box>
          <Box as="th" sx={jpCoatsHeaderStyles} colSpan={2}>
            J&amp;P Coats
          </Box>
          <th rowSpan={2}>Anchor</th>
          {!hideColors && <th rowSpan={2}>Color</th>}
        </tr>
        <tr>
          <Box as="th" sx={{textAlign: 'left'}}>
            Name
          </Box>
          <Box as="th" sx={codeCellStyles}>
            Code
          </Box>
          <Box as="th" sx={jpCoatsOldStyles}>
            Old
          </Box>
          <Box as="th" sx={jpCoatsNewStyles}>
            New
          </Box>
        </tr>
      </thead>
      <tbody>
        {colors.map(({dmcCode, ...data}, index) => (
          <TableRow
            key={dmcCode}
            dmcCode={dmcCode}
            isOdd={index % 2 !== 0}
            {...data}
          />
        ))}
      </tbody>
    </table>
  )
}
