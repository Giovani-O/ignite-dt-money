import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  ToggleDarkTheme,
  ToggleLightTheme,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from './../../assets/logo.svg'
import { NewTransactionModal } from '../newTransactionModal'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Header() {
  const activeTheme = useContextSelector(TransactionsContext, (context) => {
    return context.activeTheme
  })

  const toggleTheme = useContextSelector(TransactionsContext, (context) => {
    return context.toggleTheme
  })

  function handleToggleTheme() {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logoImg} alt="" />
          <h1>DT Money</h1>
        </div>

        <div>
          {activeTheme === 'light' ? (
            <ToggleDarkTheme onClick={handleToggleTheme} />
          ) : (
            <ToggleLightTheme onClick={handleToggleTheme} />
          )}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
