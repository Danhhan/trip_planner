import ReactDOM from 'react-dom/client'
// Use consistent styling
import '@/styles/css/tailwindcss.css'
import App from './app'
import Providers from './Providers'
import { configureAppStore } from './store/configureStore'
import { GlobalStyle } from './styles/global-styles'

import './locales/i18n'

const store = configureAppStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Providers store={store}>
    <GlobalStyle />
    <App />
  </Providers>
  // </React.StrictMode>
)

// Hot reloadable translation json files
if (import.meta.hot) {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  import.meta.hot.accept(['./'], () => {
    // No need to render the App again because i18next works with the hooks
  })
}
