import { useState } from "react";
import SideBar from "./SideBar";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Realisation from "./pages/Realisation";
import Contact from "./pages/Contact";

const Content = () => {
    const [index, setIndex] = useState("Accueil");

    return (
        <section className="flex">
            <SideBar index={index} setIndex={setIndex}/>
            {index === "Accueil" && <Accueil />}
            {index === "About" && <About />}
            {index === "Experiences" && <Experiences />}
            {index === "Realisation" && <Realisation />}
            {index === "Contact" && <Contact />}
        </section>
    )
}

export default Content;