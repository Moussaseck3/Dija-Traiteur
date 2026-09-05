import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export type Page = "home" | "services" | "about" | "contact";

const VALID_PAGES: Page[] = ["home", "services", "about", "contact"];

function getPageFromHash(): Page {
  const hash = window.location.hash.replace("#", "") as Page;
  return VALID_PAGES.includes(hash) ? hash : "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-full flex flex-col">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">
        {currentPage === "home" && <Home navigate={navigate} />}
        {currentPage === "services" && <Services navigate={navigate} />}
        {currentPage === "about" && <About navigate={navigate} />}
        {currentPage === "contact" && <Contact />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

