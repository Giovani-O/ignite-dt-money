import styled from 'styled-components'
import { Moon, Sun } from 'phosphor-react'
import * as Tooltip from '@radix-ui/react-tooltip'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['primary-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['secondary-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  /* transition: background-color 0.2s; */

  &:hover {
    background: ${(props) => props.theme['secondary-700']};
  }
`
export const ToggleDarkTheme = styled(Moon)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${(props) => props.theme['primary-100']};
  cursor: pointer;
  /* transition: background-color 0.2s; */

  &:hover {
    background-color: ${(props) => props.theme['primary-700']};
  }
`

export const ToggleLightTheme = styled(Sun)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${(props) => props.theme['primary-100']};
  cursor: pointer;
  /* transition: background-color 0.2s; */

  &:hover {
    background-color: ${(props) => props.theme['primary-700']};
  }
`

export const TooltipContent = styled(Tooltip.Content)`
  background-color: black;
  color: ${(props) => props.theme.white};
  opacity: 0.6;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  box-shadow: none;
`

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: black;
  color: ${(props) => props.theme.white};
`
