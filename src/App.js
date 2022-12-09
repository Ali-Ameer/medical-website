import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Page404 } from "./components/Page404";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="App dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
