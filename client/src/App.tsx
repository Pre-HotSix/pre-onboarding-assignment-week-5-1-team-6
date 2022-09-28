import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './routes';

interface IGlobalContext {
  keyword?: string | any;
  setKeyword?: React.Dispatch<React.SetStateAction<string>> | any;
  keywords?: object | any;
  setKeywords?: React.Dispatch<React.SetStateAction<object>> | any;
}

export const GlobalContext = createContext<IGlobalContext>({});

function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [keywords, setKeywords] = useState<object[]>([]);

  const value = { keyword, setKeyword, keywords, setKeywords };

  return (
    <GlobalContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
