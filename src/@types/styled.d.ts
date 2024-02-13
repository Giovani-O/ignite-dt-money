import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
