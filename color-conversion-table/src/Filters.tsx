import {useRequireJpCoatsOld} from "./RequireJpCoatsOldContext"
import { useRequireAnchor } from "./RequireAnchorContext"
import {useHideColors} from "./HideColorsContext"

export const Filters = () => {
  const {requireJpCoatsOld, setRequireJpCoatsOld} = useRequireJpCoatsOld()
  const {hideColors, setHideColors} = useHideColors()
  const {requireAnchor, setRequireAnchor} = useRequireAnchor()

  return (
    <fieldset className="noprint">
      <legend>Filters</legend>
      <label>
        <input
          checked={requireJpCoatsOld}
          onChange={() => setRequireJpCoatsOld(!requireJpCoatsOld)}
          type="checkbox"
        />
        J&amp;P Coats (old)
      </label>
      <label>
        <input
          checked={requireAnchor}
          onChange={() => setRequireAnchor(!requireAnchor)}
          type="checkbox"
        />
        Anchor
      </label>
      <label>
        <input
          checked={hideColors}
          onChange={() => setHideColors(!hideColors)}
          type="checkbox"
        />
        Hide colors
      </label>
    </fieldset>
  )
}
