import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import NoFound from './Pages/NoFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/items' >
          <Route index element={<Search/>} />
          <Route path=':id' element={<Search/>} />
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
