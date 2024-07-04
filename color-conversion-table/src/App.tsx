import deepmerge from 'deepmerge'
import {BaseStyles, PageLayout, ThemeProvider, theme} from '@primer/react'
import type {PropsWithChildren} from 'react'
import './App.css'
import {HideColorsProvider} from './HideColorsContext'
import {RequireJpCoatsOldProvider} from './RequireJpCoatsOldContext'
import {RequireAnchorProvider} from './RequireAnchorContext'
import {ColorsProvider} from './ColorsContext'
import {Header} from './Header'
import {FiltersAndTable} from './FiltersAndTable'
import themeOverrides from './theme-overrides'

const App = () => (
  <ProviderStack>
    <BaseStyles>
      <PageLayout>
        <PageLayout.Header>
          <Header />
        </PageLayout.Header>
        <PageLayout.Content>
          <FiltersAndTable />
        </PageLayout.Content>
      </PageLayout>
    </BaseStyles>
  </ProviderStack>
)

const customTheme = deepmerge(theme, themeOverrides)

const ProviderStack = ({children}: PropsWithChildren) => (
  <ThemeProvider colorMode="day" theme={customTheme}>
    <HideColorsProvider>
      <RequireJpCoatsOldProvider>
        <RequireAnchorProvider>
          <ColorsProvider>{children}</ColorsProvider>
        </RequireAnchorProvider>
      </RequireJpCoatsOldProvider>
    </HideColorsProvider>
  </ThemeProvider>
)

export default App
