import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/searchForm'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <main>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant="income">R$ 12.000,00</PriceHightlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Alimentação</td>
              <td>
                <PriceHightlight variant="outcome">- R$ 39,90</PriceHightlight>
              </td>
              <td>Venda</td>
              <td>10/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </main>
  )
}
