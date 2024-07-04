import {Box, Checkbox, FormControl} from '@primer/react'
import {useRequireJpCoatsOld} from './RequireJpCoatsOldContext'
import {useRequireAnchor} from './RequireAnchorContext'
import {useHideColors} from './HideColorsContext'

export const Filters = () => {
  const {requireJpCoatsOld, setRequireJpCoatsOld} = useRequireJpCoatsOld()
  const {hideColors, setHideColors} = useHideColors()
  const {requireAnchor, setRequireAnchor} = useRequireAnchor()

  return (
    <Box as="fieldset" sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: 1}} className="noprint">
      <legend>Filters</legend>
      <FormControl>
        <Checkbox checked={requireJpCoatsOld} onChange={() => setRequireJpCoatsOld(!requireJpCoatsOld)} />
        <FormControl.Label>J&amp;P Coats (old)</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox checked={requireAnchor} onChange={() => setRequireAnchor(!requireAnchor)} />
        <FormControl.Label>Anchor</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox checked={hideColors} onChange={() => setHideColors(!hideColors)} />
        <FormControl.Label>Hide colors</FormControl.Label>
      </FormControl>
    </Box>
  )
}
