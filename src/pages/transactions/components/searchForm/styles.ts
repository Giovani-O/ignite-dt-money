import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['primary-900']};
    color: ${(props) => props.theme['primary-300']};
    padding: 1rem;
    /* transition: opacity 0.2s; */

    &::placeholder {
      color: ${(props) => props.theme['primary-500']};
    }

    &:disabled {
      opacity: 0.6;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['secondary-300']};
    color: ${(props) => props.theme['secondary-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    /* transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s; */

    &:disabled {
      opacity: 0.6;
      cursor: wait;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['secondary-500']};
      border: 1px solid ${(props) => props.theme['secondary-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
