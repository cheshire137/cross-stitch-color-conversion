import deepmerge from 'deepmerge'
import {Box, type BoxProps, type SxProp} from '@primer/react'
import type {PropsWithChildren} from 'react'

interface FieldsetProps extends PropsWithChildren<BoxProps> {
  legend: string
}

const defaultStyles: SxProp['sx'] = {
  mb: 3,
}

export const Fieldset = ({children, legend, ...props}: FieldsetProps) => {
  const sx =
    props.sx === undefined ? defaultStyles : deepmerge(defaultStyles, props.sx)
  return (
    <Box as="fieldset" sx={sx} className="noprint" {...props}>
      <legend>{legend}</legend>
      {children}
    </Box>
  )
}
