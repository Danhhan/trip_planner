import { createGlobalStyle } from 'styled-components'
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${p => p.theme.background};
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    padding: 24px;
    background-color: ${p => p.theme.card};
    border: none;
    max-width: 640px;
    margin: auto;
    height: fit-content;
    outline: none;
    z-index: 4;
  }

  .close-modal {
    position: absolute;
    top: -45px;
    right: -45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50px;
    height: 50px;
    background: ${p => p.theme.black};
    color: ${p => p.theme.grey1};
    cursor: pointer;
    user-select: none;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${p => p.theme.overlay};
    z-index: 3;
  }

  .react-loading-skeleton {
    --base-color: ${p => p.theme.skeletonBase};
    --highlight-color: ${p => p.theme.skeletonHighlight};
    z-index: unset;
  }

  :where([aria-busy="true" i]) {
    cursor: unset;
  }

  .__react_component_tooltip {
    background-color: ${p => p.theme.strokeColor} !important;
    color: ${p => p.theme.tooltipText} !important;

    &:after{ 
      border-top-color: ${p => p.theme.strokeColor} !important;
    }
  }
`
