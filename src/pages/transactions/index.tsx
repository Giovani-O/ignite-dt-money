import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <main>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Alimentação</td>
              <td>- R$ 39,90</td>
              <td>Venda</td>
              <td>10/04/2023</td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </main>
  )
}
