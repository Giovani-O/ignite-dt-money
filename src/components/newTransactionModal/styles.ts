import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0; // inset: 0 = top: 0; bottom: 0; left: 0; right: 0;
  background: #00000075;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['primary-800']};
  position: fixed;
  // hack to keep something perfectly centered in the screen
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // ///////////////////////////////////////////////////////

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['primary-900']};
      color: ${(props) => props.theme['primary-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['primary-500']};
      }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['secondary-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background: ${(props) => props.theme['secondary-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['primary-500']};
`
