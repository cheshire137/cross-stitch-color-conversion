import {ActionList, ActionMenu, FormControl, TextInput} from '@primer/react'
import {sortLabels, sortOptions} from './SortContext'
import {useSearchContext} from './contexts/search-context'
import './Search.css'

export function Search() {
  const {field, setField, query, setQuery} = useSearchContext()
  return (
    <div className="searchControls">
      <ActionMenu>
        <ActionMenu.Button>
          <span className="sr-only">Search by</span> {sortLabels[field]}
        </ActionMenu.Button>
        <ActionMenu.Overlay width="small">
          <ActionList selectionVariant="single">
            {sortOptions.map(searchOption => (
              <ActionList.Item
                key={searchOption}
                selected={searchOption === field}
                onSelect={() => setField(searchOption)}
              >
                <span className="sr-only">Search by</span>
                {sortLabels[searchOption]}
              </ActionList.Item>
            ))}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
      <FormControl>
        <FormControl.Label visuallyHidden>Search {sortLabels[field]}</FormControl.Label>
        <TextInput placeholder="Search" value={query} onChange={e => setQuery(e.currentTarget.value)} />
      </FormControl>
    </div>
  )
}
