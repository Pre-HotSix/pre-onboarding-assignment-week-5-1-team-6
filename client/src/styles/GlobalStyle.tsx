import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body,
    html {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    ol,
    li,
    ul {
        list-style: none;
    }
    input,
    select,
    button {
        border: none;
        outline: none;
        box-sizing: border-box;
        background: none;
    }
    button {
        background: none;
        cursor: pointer;
    }
}
`;
