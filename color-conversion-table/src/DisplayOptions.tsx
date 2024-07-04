import {Checkbox, FormControl} from '@primer/react'
import {Fieldset} from './Fieldset'
import {useHideColors} from './HideColorsContext'

export const DisplayOptions = () => {
  const {hideColors, setHideColors} = useHideColors()
  return (
    <Fieldset legend="Display options">
      <FormControl>
        <Checkbox
          checked={!hideColors}
          onChange={() => setHideColors(!hideColors)}
        />
        <FormControl.Label>Show colors</FormControl.Label>
      </FormControl>
    </Fieldset>
  )
}
