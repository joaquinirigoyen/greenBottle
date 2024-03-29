import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
// import ContactPage from "./components/ContactPage";
import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
// import EventsPage from "./components/EventsPage";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={HomePage} />
            {/* <Route path="/contact" Component={ContactPage} />
            <Route path="/events" Component={EventsPage} /> */}
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
