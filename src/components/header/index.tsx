import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from './../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logoImg} alt="" />
          <h1>DT Money</h1>
        </div>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
