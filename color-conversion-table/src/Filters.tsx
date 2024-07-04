import {Checkbox, FormControl} from '@primer/react'
import {Fieldset} from './Fieldset'
import {useRequireJpCoatsOld} from './RequireJpCoatsOldContext'
import {useRequireAnchor} from './RequireAnchorContext'

export const Filters = () => {
  const {requireJpCoatsOld, setRequireJpCoatsOld} = useRequireJpCoatsOld()
  const {requireAnchor, setRequireAnchor} = useRequireAnchor()

  return (
    <Fieldset
      legend="Filters"
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: 1,
      }}
    >
      <FormControl>
        <Checkbox
          checked={requireJpCoatsOld}
          onChange={() => setRequireJpCoatsOld(!requireJpCoatsOld)}
        />
        <FormControl.Label>J&amp;P Coats (old)</FormControl.Label>
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
