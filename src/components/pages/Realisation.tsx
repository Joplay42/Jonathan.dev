import { useState } from "react";
import Website from "../Website";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Realisation = () => {
    const project = [
        {name: "Amicale des scouts",type: "Organisme",description: "L'amicale des scouts et guides de Montréal sert à regrouper les anciens scouts afin de s'assurer à garder la culture allumé.", link: "https://www.amicalescoutsguides-montreal.org/", img: "/amicale.png"},
        {name: "Zorilla web",type: "Agence",description: "Zorilla web est une compagnie de développement d'application, d'ailleurs ils ont créer un constructeur de site web.", link: "https://zorillaweb.com/", img: "/ZorillaWeb.png"},
        {name: "Marché Ahuntsic-CartieVille",type: "Organisme",description: "Marché Ahuntsic-Cartierville est un petit marché d'été qui aide les communautés en offrant des produits frais peu couteux.", link: "https://www.marcheac.com/", img: "/MarcheAC.png"},
        {name: "Réparatech",type: "Agence",description: "Réparatech est une compagnie de support informatique, celle-ci donnes son aide et ses services pour aider les gens avec des problèmes informatiques.", link: "https://reparatech.net/", img: "/Reparatech.png"},
        {name: "Zookod",type: "Agence",description: "Zookod est une agence de site web, celle-ci réalise des sites web professionel pour les clients.", link: "https://zookod.com/", img: "/Zookod.png"},
        {name: "Centre d'entraide thérèse-de-Blainville",type: "Organisme",description: "Centre d'entraide Thérèse-de-Blainville aide les gens défavoriser en les hébergeants en augmentant leur qualité de vie.", link: "https://www.entraidetdb.org/", img: "/Cetb.png"},
        {name: "trajectoire PME",type: "Agence",description: "Trajectoire PME est une agence de SEO, cette compagnie s'occupe d'optimiser vos site web pour s'assurer le bon fonctionnement du SEO", link: "https://www.search-engine-optimization.ca/", img: "/trajectoirePME.png"},
        {name: "SCRI",type: "Organisme",description: "Le Scri est un organisme a but d'aider les nouveaux immigrant en aide, ils hébergent et aide ceux-ci.", link: "https://www.scrimontreal.ca/", img: "/SCRI.png"},
        {name: "Pause café j'm",type: "Agence",description: "Pause café j'm est une compagnie de café, celle-ci s'occupe de vendre divers produits de café. Machines, grains et même installation de machine.", link: "https://www.pausecafejm.com/", img: "/JM.png"},
        {name: "Canada Animal Distribution",type: "Agence",description: "Canada Animal Distribution est une compagnie qui se spécialise dans la vente de produit animalier, ils offre un variété de produits et ils achètent aussi.", link: "https://www.canadaanimaldistribution.com/", img: "/CAD.png"},
    ]

    const [active, setActive] = useState("Tous");

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-24 2xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh] ">
                <section data-aos="fade-right" className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-10 lg:py-10">
                        <div className="order-1 max-w-5xl">
                            <h4 className="font-bold text-blue-700 dark:text-white mb-3 text-xl"><span className="text-gray-400 text-2xl mr-2 dark:text-sky-700">03</span> Mes réalisations</h4><hr className="border-neutral-400 dark:border-neutral-700" />
                            <p className="mt-6 text-gray-600 font-medium dark:text-neutral-500 leading-6">Chacun de mes sites web est conçu avec créativité et originalité. Pour moi, la règle numéro un dans la création de sites web est l'attention portée aux détails. Chaque élément est soigneusement pensé et réalisé avec minutie.</p><br />
                            <p className="text-blue-700 dark:text-sky-700 font-bold leading-6">Design responsive?</p><br />
                            <p className="text-gray-600 font-medium dark:text-neutral-500 leading-6">Chacun de mes sites est conçu pour être fonctionnel sur tous les écrans. <span className="text-blue-700 dark:text-sky-700 font-medium">Saviez-vous</span> que 90% des utilisateurs de sites web naviguent depuis leur téléphone ?</p>
                        </div>
                        <img src="/ui-ux.png" className="w-[40rem] justify-self-center col-span-1 h-auto order-2" />
                </section>
                <section>
                    <h1 className="font-semibold text-neutral-700 dark:text-neutral-300">Portfolio</h1>
                    <h4 className="font-bold text-blue-700 dark:text-sky-700">Mes projets récents</h4>
                    <div className="space-x-4 py-4">
                        <button className={`border border-neutral-400 rounded-full px-2 py-1 ${active == 'Tous' && `bg-blue-700 text-white border-blue-700`}`}onClick={() => {setActive("Tous")}}>Tous</button>
                        <button className={`border border-neutral-400 rounded-full px-2 py-1 ${active == 'Agence' && `bg-blue-700 text-white border-blue-700`}`}onClick={() => {setActive("Agence")}}>Agence</button>
                        <button className={`border border-neutral-400 rounded-full px-2 py-1 ${active == 'Organisme' && `bg-blue-700 text-white border-blue-700`}`}onClick={() => {setActive("Organisme")}}>Organisme</button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {project.map(project => (
                            active == "Tous" ? <Website link={project.link} img={project.img} name={project.name} description={project.description} type={project.type}/> : 
                            active == project.type && <Website link={project.link} img={project.img} name={project.name} description={project.description} type={project.type}/>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Realisation;