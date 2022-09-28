import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchBar } from 'pages/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
}
