import ReactDOM from 'react-dom/client'
// Use consistent styling
import '@/styles/css/tailwindcss.css'
import App from './app'
import Providers from './Providers'
import { configureAppStore } from './store/configureStore'
import { GlobalStyle } from './styles/global-styles'

const store = configureAppStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Providers store={store}>
    <GlobalStyle />
    <App />
  </Providers>
  // </React.StrictMode>
)
