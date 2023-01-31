import './App.css';
import Navbar from '../src/component/navbar'
import Main from '../src/component/main'
import Faq from '../src/component/FAQ'
import {
  BrowserRouter,
  Routes,
  Route,
} from  "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/FAQ" element={<Faq/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
