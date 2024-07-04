import deepmerge from 'deepmerge'
import {Box, type BoxProps, type SxProp} from '@primer/react'
import type {PropsWithChildren} from 'react'
import primerPrimitives from '@primer/primitives'

interface FieldsetProps extends PropsWithChildren<BoxProps> {
  legend: string
}

export const Fieldset = ({
  children,
  legend,
  sx: customSx,
  ...props
}: FieldsetProps) => {
  let sx: SxProp['sx'] = {
    mb: 3,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: primerPrimitives.colors.light.scale.gray[2],
    pt: 1,
    pb: 2,
    px: 3,
    mt: -1,
  }
  if (customSx !== undefined) sx = deepmerge<SxProp['sx']>(sx, customSx)
  return (
    <Box as="fieldset" sx={sx} className="noprint" {...props}>
      <Box as="legend" sx={{mb: 1, fontWeight: 'bold', ml: 0}}>
        {legend}
      </Box>
      {children}
    </Box>
  )
}
