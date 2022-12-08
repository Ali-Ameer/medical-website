import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { HowItWork } from "./components/HowItWork";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="App dark:bg-gray-900">
      <Navbar />
      <Header />
      <About />
      <HowItWork />
      <Testimonial />
      <Contact />
      <Footer />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;