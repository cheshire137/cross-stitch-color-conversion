import {Checkbox, FormControl} from '@primer/react'
import {Fieldset} from './Fieldset'
import {useRequireJpCoats} from './RequireJpCoatsContext'
import {useRequireAnchor} from './RequireAnchorContext'
import {useRequireCosmo} from './contexts/cosmo-context'
import './Filters.css'

export const Filters = () => {
  const {requireJpCoats, setRequireJpCoats} = useRequireJpCoats()
  const {requireAnchor, setRequireAnchor} = useRequireAnchor()
  const {requireCosmo, setRequireCosmo} = useRequireCosmo()

  return (
    <Fieldset legend="Filters" className="filtersFieldset">
      <FormControl>
        <Checkbox checked={requireAnchor} onChange={() => setRequireAnchor(!requireAnchor)} />
        <FormControl.Label>Anchor</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox checked={requireCosmo} onChange={() => setRequireCosmo(!requireCosmo)} />
        <FormControl.Label>Cosmo</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox checked={requireJpCoats} onChange={() => setRequireJpCoats(!requireJpCoats)} />
        <FormControl.Label>J&amp;P Coats</FormControl.Label>
      </FormControl>
    </Fieldset>
  )
}
