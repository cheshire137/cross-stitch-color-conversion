import {useMemo} from 'react'
import {Box} from '@primer/react'
import {Table} from './Table'
import {Filters} from './Filters'
import {chunkArray} from './utils'
import {useColors} from './ColorsContext'

export const FiltersAndTable = () => {
  const {colors} = useColors()
  const colorChunks = useMemo(
    () => chunkArray(colors, Math.round(colors.length / 2)),
    [colors]
  )
  return (
    <>
      <Filters />
      <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 3}}>
        {colorChunks.map((colorsInChunk, index) => (
          <Table
            key={`${index}-${colorsInChunk.length}`}
            colors={colorsInChunk}
          />
        ))}
      </Box>
    </>
  )
}
