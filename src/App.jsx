import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import AllQuotes from "./pages/AllQuotes.jsx";
import QuotePage from "./pages/QuotePage.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="quotes" element={<AllQuotes/>} />
              <Route path="quotes/:id" element={<QuotePage/> } />
              <Route path="*" element={<NotFound/> } />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
