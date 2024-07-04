import {CounterLabel, Header as PrimerHeader, Heading} from '@primer/react'
import {useColors} from './ColorsContext'

export const Header = () => {
  const {colors} = useColors()
  const units = colors.length === 1 ? 'color' : 'colors'
  return (
    <PrimerHeader className="noprint">
      <PrimerHeader.Item>
        <Heading as="h1">
          Embroidery floss color conversion
        </Heading>
      </PrimerHeader.Item>
      <PrimerHeader.Item>
        <CounterLabel scheme="primary" sx={{fontSize: 1, p: 2}}>{colors.length} {units}</CounterLabel>
      </PrimerHeader.Item>
    </PrimerHeader>
  )
}
