import {BaseStyles, ThemeProvider, theme} from '@primer/react'
import './App.css'
import {HideColorsProvider} from './HideColorsContext'
import {RequireJpCoatsOldProvider} from './RequireJpCoatsOldContext'
import {RequireAnchorProvider} from './RequireAnchorContext'
import {ColorsProvider} from './ColorsContext'
import {Header} from './Header'
import {FiltersAndTable} from './FiltersAndTable'

function App() {
  return (
    <ThemeProvider colorMode="day" theme={theme}>
      <BaseStyles>
        <ColorsProvider>
          <HideColorsProvider>
            <RequireJpCoatsOldProvider>
              <RequireAnchorProvider>
                <Header />
                <FiltersAndTable />
              </RequireAnchorProvider>
            </RequireJpCoatsOldProvider>
          </HideColorsProvider>
        </ColorsProvider>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
