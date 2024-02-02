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
        <section className="flex flex-col lg:flex-row h-screen">
            <SideBar index={index} setIndex={setIndex} />
            <div className="flex-grow relative order-2">
                {index === "Accueil" && <Accueil setIndex={setIndex}/>}
                {index === "About" && <About />}
                {index === "Experiences" && <Experiences />}
                {index === "Realisation" && <Realisation />}
                {index === "Contact" && <Contact />}
            </div>
        </section>

    )
}

export default Content;