import { ThemeProvider } from 'styled-components';
import Router from './routes/route';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
