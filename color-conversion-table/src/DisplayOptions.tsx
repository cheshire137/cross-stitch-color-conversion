import {Checkbox, FormControl} from '@primer/react'
import {Fieldset} from './Fieldset'
import {useHideColors} from './HideColorsContext'
import {SortMenu} from './SortMenu'

export const DisplayOptions = () => {
  const {hideColors, setHideColors} = useHideColors()
  return (
    <Fieldset
      legend="Display options"
      sx={{display: 'flex', gridGap: 3, alignItems: 'center'}}
    >
      <FormControl>
        <Checkbox
          checked={!hideColors}
          onChange={() => setHideColors(!hideColors)}
        />
        <FormControl.Label>Show colors</FormControl.Label>
      </FormControl>
      <SortMenu />
    </Fieldset>
  )
}
