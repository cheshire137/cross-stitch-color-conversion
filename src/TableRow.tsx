import deepmerge from 'deepmerge'
import {Box, type SxProp} from '@primer/react'
import type {EmbroideryFlossColor} from './types'
import {useHideColors} from './HideColorsContext'
import primerPrimitives from '@primer/primitives'

interface TableRowProps extends EmbroideryFlossColor {
  isOdd: boolean
}

export const codeCellStyles: SxProp['sx'] = {
  textAlign: 'center',
  whiteSpace: 'nowrap',
}

export const jpCoatsCellStyles = deepmerge<SxProp['sx']>(
  {
    borderColor: primerPrimitives.colors.light.border.default,
  },
  codeCellStyles
)

const emptyCellContent = (
  <Box as="span" sx={{color: primerPrimitives.colors.light.fg.muted}}>
    &mdash;
  </Box>
)

export const TableRow = ({
  cosmoCode,
  dmcCode,
  dmcName,
  isOdd,
  jpCoatsNew,
  jpCoatsOld,
  anchorCode,
  hexCode,
}: TableRowProps) => {
  const {hideColors} = useHideColors()
  const jpCoatsBg = isOdd
    ? primerPrimitives.colors.light.neutral.muted
    : primerPrimitives.colors.light.canvas.subtle
  const jpCoatsOldStyles = deepmerge<SxProp['sx']>(
    {
      borderLeft: '1px solid',
      backgroundColor: jpCoatsBg,
    },
    jpCoatsCellStyles
  )
  const jpCoatsNewStyles = deepmerge<SxProp['sx']>(
    {
      borderRight: '1px solid',
      backgroundColor: jpCoatsBg,
    },
    jpCoatsCellStyles
  )
  const rowStyles: SxProp['sx'] = {
    borderTop: '1px solid',
    borderColor: primerPrimitives.colors.light.border.default,
    '&:nth-of-type(even)': {
      backgroundColor: primerPrimitives.colors.light.canvas.subtle,
    },
    '@media print': {
      backgroundColor: 'white',
    },
  }

  return (
    <Box as="tr" sx={rowStyles}>
      {!hideColors && <td style={{backgroundColor: hexCode}}></td>}
      <td>{dmcName}</td>
      <Box as="td" sx={codeCellStyles}>
        {dmcCode}
      </Box>
      <Box as="td" sx={jpCoatsOldStyles}>
        {jpCoatsOld ? jpCoatsOld : emptyCellContent}
      </Box>
      <Box as="td" sx={jpCoatsNewStyles}>
        {jpCoatsNew ? jpCoatsNew : emptyCellContent}
      </Box>
      <Box as="td" sx={codeCellStyles}>{anchorCode ? anchorCode : emptyCellContent}</Box>
      <Box as="td" sx={codeCellStyles}>{cosmoCode ? cosmoCode : emptyCellContent}</Box>
    </Box>
  )
}
