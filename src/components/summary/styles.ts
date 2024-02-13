import styled, { css } from 'styled-components'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  $variant?: 'indigo'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['primary-700']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['primary-300']};
  }

  &:last-child {
    header {
      color: ${(props) => props.theme.white};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.$variant === 'indigo' &&
    css`
      background: ${props.theme['secondary-700']};
      color: ${(props) => props.theme.white};
    `}
`

export const StyledArrowUp = styled(ArrowCircleUp)`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme['green-300']};
`

export const StyledArrowDown = styled(ArrowCircleDown)`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme['red-300']};
`

export const StyledCurrency = styled(CurrencyDollar)`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.white};
`
