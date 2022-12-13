import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import S10Footer from "./components/S10Footer/S10Footer";
import Departments from "./pages/Departments/Departments";
import Contacts from "./pages/Contacts/Contacts";
import ContactsComponents from './components/ContactsComponent/ContactsComponent'
import Nav from "./components/Nav/Nav";
import DepartSingle from "./pages/DepartSingle/DepartSingle";
import DoctorsSingle from "./pages/DoctorsSingle/DoctorsSingle";
import Doctors from "./pages/Doctors/Doctors";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
function App() {
  // при смене страницы будет всегда показывать верх страницы
  const location = useLocation();
 useEffect(() => {
  window.scrollTo(0,0);
  }, [location]);
  Nav();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/depart-single" element={<DepartSingle />} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors-single" element={<DoctorsSingle/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
      <ContactsComponents />
      <S10Footer />
    </>
  );
}
export default App;
