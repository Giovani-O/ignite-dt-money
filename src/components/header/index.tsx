import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  ToggleDarkTheme,
  ToggleLightTheme,
  TooltipArrow,
  TooltipContent,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
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
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                {activeTheme === 'light' ? (
                  <ToggleDarkTheme onClick={handleToggleTheme} />
                ) : (
                  <ToggleLightTheme onClick={handleToggleTheme} />
                )}
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <TooltipContent
                  className="TooltipContent"
                  sideOffset={5}
                  side="left"
                >
                  Alternar tema
                  <TooltipArrow className="TooltipArrow" />
                </TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

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
