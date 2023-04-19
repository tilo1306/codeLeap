import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes/MainRoutes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainRoutes />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
