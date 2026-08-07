import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";

function App() {
  return (
    <ConsultationProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConsultationProvider>
  );
}

export default App;
