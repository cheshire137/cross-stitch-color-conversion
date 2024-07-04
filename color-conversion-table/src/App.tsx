import {BaseStyles, PageLayout, ThemeProvider, theme} from '@primer/react'
import type {PropsWithChildren} from 'react'
import './App.css'
import {HideColorsProvider} from './HideColorsContext'
import {RequireJpCoatsOldProvider} from './RequireJpCoatsOldContext'
import {RequireAnchorProvider} from './RequireAnchorContext'
import {ColorsProvider} from './ColorsContext'
import {Header} from './Header'
import {FiltersAndTable} from './FiltersAndTable'

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

const ProviderStack = ({children}: PropsWithChildren) => (
  <ThemeProvider colorMode="day" theme={theme}>
    <ColorsProvider>
      <HideColorsProvider>
        <RequireJpCoatsOldProvider>
          <RequireAnchorProvider>
            {children}
          </RequireAnchorProvider>
        </RequireJpCoatsOldProvider>
      </HideColorsProvider>
    </ColorsProvider>
  </ThemeProvider>
)

export default App
