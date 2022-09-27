import { ThemeProvider } from 'styled-components';
import Router from './routes/route';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Router></Router>
    </ThemeProvider>
  );
}

export default App;
