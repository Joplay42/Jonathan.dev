interface Props {
    setIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Accueil = ({ setIndex }: Props) => {
    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-24 2xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh] ">
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-4 md:py-14">
                    <div className="order-2 lg:order-1 max-w-5xl">
                        <h4 className="font-bold dark:text-neutral-400 mb-3">Hey, <span className="font-medium">je me présente</span></h4>
                        <h1 className=" text-3xl 2xl:text-4xl font-semibold leading-9"><span className="text-sky-700">Jonathan</span> Deschênes</h1>
                        <h1 className="text-neutral-600 dark:text-neutral-600 text-3xl 2xl:text-4xl font-bold leading-10">Je suis developper Web</h1>
                        <p className="leading-6 mt-3">Je suis un passioné de l'informatique. En d'autre mot un expert en développement web, avec beaucoup d'expériences dans le domaine je sais comment me surpasser.</p>
                        <button className="bg-blue-700 hover:bg-transparent hover:text-blue-700 border border-blue-700 dark:bg-blue-700 dark:border-blue-700 dark:hover:text-white hover:dark:bg-transparent text-white px-6 py-3 rounded-lg mt-4" onClick={() => {setIndex("Contact")}}>Me contacter</button>
                    </div>
                    <img src="/programming.png" className="w-[28rem] justify-self-center h-auto order-1 lg:order-2" />
                </section>
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-4 md:py-14">
                    <div className="order-2 lg:order-2 max-w-5xl">
                        <h4 className="font-bold text-sky-700 mb-3">À propos</h4>
                        <h1 className=" dark:text-white text-3xl 2xl:text-4xl font-semibold leading-10">Qui <span className="text-sky-700">suis</span>-je?</h1>
                        <p className="leading-6 mt-3">Un jeune passioné qui recherche un emploi en tant que designer/programmeur web. Cliquez en dessu pour en apprendre plus sur moi!</p>
                        <button className="bg-blue-700 hover:bg-transparent hover:text-blue-700 border border-blue-700 dark:bg-blue-700 dark:border-blue-700 dark:hover:text-white hover:dark:bg-transparent text-white px-6 py-3 rounded-lg mt-4" onClick={() => {setIndex("About")}}>À propos de moi</button>
                    </div>
                    <img src="/blog.png" className="w-[28rem] justify-self-center lg:justify-self-start h-auto order-1 lg:order-1" />
                </section>
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-4 md:py-14">
                    <div className="order-2 lg:order-1 max-w-5xl">
                        <h4 className="font-bold text-sky-700 mb-3">Expériences</h4>
                        <h1 className=" dark:text-white text-3xl 2xl:text-4xl font-semibold leading-10">Mon parcours</h1>
                        <p className="leading-6 mt-3">Un futur programmeur qui étudie en temp plein pour expandre mes compétences.</p>
                        <button className="bg-blue-700 hover:bg-transparent hover:text-blue-700 border border-blue-700 dark:bg-blue-700 dark:border-blue-700 dark:hover:text-white hover:dark:bg-transparent text-white px-6 py-3 rounded-lg mt-4" onClick={() => {setIndex("Experiences")}}>Mes expériences</button>
                    </div>
                    <img src="/cloud-network.png" className="w-[28rem] justify-self-center h-auto order-1 lg:order-2" />
                </section>
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-4 md:py-14">
                    <div className="order-2 lg:order-2 max-w-5xl">
                        <h4 className="font-bold text-sky-700 mb-3">Réalisation</h4>
                        <h1 className=" dark:text-white text-3xl 2xl:text-4xl font-semibold leading-10">Réalisation de <span className="text-sky-700">plusieurs site</span> pour des compagnies</h1>
                        <p className="leading-6 mt-3">Durant mon parcours j'ai eu la chance de réaliser des sites pour des compagnies et des organismes, tous étant des magnifiques design.</p>
                        <button className="bg-blue-700 hover:bg-transparent hover:text-blue-700 border border-blue-700 dark:bg-blue-700 dark:border-blue-700 dark:hover:text-white hover:dark:bg-transparent text-white px-6 py-3 rounded-lg mt-4" onClick={() => {setIndex("Realisation")}}>Mes réalisations</button>
                    </div>
                    <img src="/website.png" className="w-[28rem] justify-self-center lg:justify-self-start h-auto order-1 lg:order-1" />
                </section>
            </div>
        </div>

    )
}

export default Accueil;