import "./App.css";
import Footer from "./component/footer/Footer.js";
import Header from "./component/header/Header.js";
import Home from "./pages/home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/searchPage/SearchPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
