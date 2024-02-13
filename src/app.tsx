import { ThemeProvider } from 'styled-components'
import { defaultDark, defaultLight } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/transactions'
import { TransactionsContext } from './contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function App() {
  const activeTheme = useContextSelector(TransactionsContext, (context) => {
    return context.activeTheme
  })

  return (
    <ThemeProvider theme={activeTheme === 'light' ? defaultLight : defaultDark}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
