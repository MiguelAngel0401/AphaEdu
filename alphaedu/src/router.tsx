import {Routes, Route, BrowserRouter} from 'react-router-dom';
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';
export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}
