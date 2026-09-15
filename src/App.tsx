import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export type Page = "home" | "services" | "about" | "contact";

const VALID_PAGES: Page[] = ["home", "services", "about", "contact"];

function parseHash(): { page: Page; targetId?: string } {
  const hash = window.location.hash.replace("#", "");
  const [p, ...rest] = hash.split("-");
  const page = (VALID_PAGES.includes(p as Page) ? p : "home") as Page;
  const targetId = rest.length > 0 ? rest.join("-") : undefined;
  return { page, targetId };
}

export default function App() {
  const { page: initialPage, targetId: initialTargetId } = parseHash();
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);

  const scrollToTarget = (targetId?: string) => {
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (initialTargetId) {
      scrollToTarget(initialTargetId);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const { page, targetId } = parseHash();
      setCurrentPage(page);
      scrollToTarget(targetId);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (page: Page, targetId?: string) => {
    setCurrentPage(page);
    const newHash = targetId ? `${page}-${targetId}` : page;
    if (window.location.hash !== `#${newHash}`) {
      window.location.hash = newHash;
    }
    scrollToTarget(targetId);
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

