import Login from './screens/login/login.screen'
import { Route, Routes } from 'react-router-dom'
import { LoginPath } from './screens/login/login.types'
import { Provider } from 'react-redux'
import store from './store/store/store'
import theme from './themes/main/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/main/global-style'

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>      
            <GlobalStyle />
            <Routes>
                <Route path={LoginPath} element={<Login />} />
            </Routes>
        </ThemeProvider>
    </Provider>
  );
}

export default App;
