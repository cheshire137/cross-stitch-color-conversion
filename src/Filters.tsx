import {Checkbox, FormControl} from '@primer/react'
import {Fieldset} from './Fieldset'
import {useRequireJpCoats} from './RequireJpCoatsContext'
import {useRequireAnchor} from './RequireAnchorContext'

export const Filters = () => {
  const {requireJpCoats, setRequireJpCoats} = useRequireJpCoats()
  const {requireAnchor, setRequireAnchor} = useRequireAnchor()

  return (
    <Fieldset
      legend="Filters"
      sx={{
        display: 'flex',
        gridGap: 3,
        alignItems: 'center',
      }}
    >
      <FormControl>
        <Checkbox
          checked={requireJpCoats}
          onChange={() => setRequireJpCoats(!requireJpCoats)}
        />
        <FormControl.Label>J&amp;P Coats</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox
          checked={requireAnchor}
          onChange={() => setRequireAnchor(!requireAnchor)}
        />
        <FormControl.Label>Anchor</FormControl.Label>
      </FormControl>
    </Fieldset>
  )
}
