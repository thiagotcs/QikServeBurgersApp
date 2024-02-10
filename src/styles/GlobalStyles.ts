import { createGlobalStyle } from 'styled-components'

import RobotoBoldTtf from '@/assets/fonts/Roboto-Bold.ttf'
import RobotoLightTtf from '@/assets/fonts/Roboto-Light.ttf'
import RobotoMediumTtf from '@/assets/fonts/Roboto-Medium.ttf'
import RobotoRegularTtf from '@/assets/fonts/Roboto-Regular.ttf'
import RobotoThinTtf from '@/assets/fonts/Roboto-Thin.ttf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${RobotoThinTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${RobotoLightTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${RobotoRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${RobotoMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${RobotoBoldTtf}') format('truetype'),
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background: #fff;
  color: #121212;
  @media only screen and (max-width: 768px) {
    background-color: #f8f9fa;
  }
}

button {
  cursor: pointer;
  font-size: 1rem;
  color: #333;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  height: 24px;
  width: 24px;
  animation: spin 1s linear infinite;

}
`
