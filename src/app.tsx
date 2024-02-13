import { ThemeProvider } from 'styled-components'
import { defaultDark, defaultLight } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultLight}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
