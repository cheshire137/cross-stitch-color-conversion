import {type PropsWithChildren, useMemo, useState} from 'react'
import {RequireCosmoContext} from './cosmo-context'

export function RequireCosmoProvider({children}: PropsWithChildren) {
  const [requireCosmo, setRequireCosmo] = useState(false)
  const contextProps = useMemo(() => ({requireCosmo, setRequireCosmo}), [requireCosmo])
  return <RequireCosmoContext.Provider value={contextProps}>{children}</RequireCosmoContext.Provider>
}
