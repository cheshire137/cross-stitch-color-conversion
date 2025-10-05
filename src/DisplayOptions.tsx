import {Checkbox, FormControl} from '@primer/react'
import {Fieldset} from './Fieldset'
import {useHideColors} from './HideColorsContext'
import {SortMenu} from './SortMenu'
import './DisplayOptions.css'

export function DisplayOptions() {
  const {hideColors, setHideColors} = useHideColors()
  return (
    <Fieldset legend="Display options" className="displayOptionsFieldset">
      <FormControl>
        <Checkbox checked={!hideColors} onChange={() => setHideColors(!hideColors)} />
        <FormControl.Label>Show colors</FormControl.Label>
      </FormControl>
      <SortMenu />
    </Fieldset>
  )
}
