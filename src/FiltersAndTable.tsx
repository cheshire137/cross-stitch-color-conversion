import {useMemo} from 'react'
import {Table} from './Table'
import {Filters} from './Filters'
import {DisplayOptions} from './DisplayOptions'
import {chunkArray} from './utils'
import {useColors} from './ColorsContext'
import './FiltersAndTable.css'

export function FiltersAndTable() {
  const {colors} = useColors()
  const colorChunks = useMemo(() => chunkArray(colors, Math.ceil(colors.length / 2)), [colors])
  return (
    <>
      <div className="filtersAndDisplayOptions">
        <Filters />
        <DisplayOptions />
      </div>
      <div className="tableContainer">
        {colorChunks.map((colorsInChunk, index) => (
          <Table key={`${index}-${colorsInChunk.length}`} colors={colorsInChunk} />
        ))}
      </div>
    </>
  )
}
