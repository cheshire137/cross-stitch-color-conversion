import {useMemo} from 'react'
import {Table} from './Table'
import {Filters} from './Filters'
import {chunkArray} from './utils'
import type {EmbroideryFlossColor} from './types'

interface FiltersAndTableProps {
  colors: EmbroideryFlossColor[]
}

export const FiltersAndTable = ({colors}: FiltersAndTableProps) => {
  const colorChunks = useMemo(() => chunkArray(colors, Math.round(colors.length / 2)), [colors])
  return (
    <>
      <Filters />
      {colorChunks.map((colorsInChunk, index) => (
        <Table key={`${index}-${colorsInChunk.length}`} colors={colorsInChunk} />
      ))}
    </>
  )
}
