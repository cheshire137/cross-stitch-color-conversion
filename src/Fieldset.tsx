import {clsx} from 'clsx'
import type {PropsWithChildren} from 'react'
import './Fieldset.css'

interface FieldsetProps extends PropsWithChildren {
  legend: string
  className?: string
}

export function Fieldset({className, children, legend}: FieldsetProps) {
  return (
    <fieldset className={clsx('fieldset noprint', className)}>
      <legend className="legend">{legend}</legend>
      {children}
    </fieldset>
  )
}
