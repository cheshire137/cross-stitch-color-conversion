import {ActionList, ActionMenu} from '@primer/react'
import {useSort, sortLabels, sortOptions} from './SortContext'

export const SortMenu = () => {
  const {sortOption: currentSortOption, setSortOption} = useSort()
  return (
    <ActionMenu>
      <ActionMenu.Button>{sortLabels[currentSortOption]}</ActionMenu.Button>
      <ActionMenu.Overlay width="medium">
        <ActionList selectionVariant="single">
          {sortOptions.map(sortOption => (
            <ActionList.Item
              key={sortOption}
              selected={sortOption === currentSortOption}
              onSelect={() => setSortOption(sortOption)}
            >
              {sortLabels[sortOption]}
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}
