import Website from "../website";

const Realisation = () => {
    const project = [
        {name: "Amicale des scouts",type: "obnl",description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", link: "https://www.amicalescoutsguides-montreal.org/", img: "/amicale.png"},
    ]

    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh] ">
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-10 lg:py-10">
                        <div className="order-1 max-w-5xl">
                            <h4 className="font-bold text-blue-700 dark:text-white mb-3 text-xl"><span className="text-gray-400 text-2xl mr-2 dark:text-sky-700">03</span> Mes réalisations</h4><hr className="border-neutral-400 dark:border-neutral-700" />
                            <p className="mt-6 text-gray-600 font-medium dark:text-neutral-500 leading-6">Chacun de mes sites web sont réaliser avec créativité et unicité. La règle numéro un dans la création de site web est la perception des détails. Chacun de mes sites sont réaliser minutieusement.</p><br />
                            <p className="text-blue-700 dark:text-sky-700 font-bold leading-6">Design responsive?</p><br />
                            <p className="text-gray-600 font-medium dark:text-neutral-500 leading-6">Chacun de mes sites sont conçu pour être fonctionnel sur chaque écran. <span className="text-blue-700 dark:text-sky-700 font-medium">Saviez-vous</span> que 90% des utilisateurs des sites web naviguent à partir de téléphone</p>
                        </div>
                        <img src="/ui-ux.png" className="w-[40rem] justify-self-center col-span-1 h-auto order-2" />
                </section>
                <section>
                    <h1 className="font-semibold text-neutral-700 dark:text-neutral-300">Portfolio</h1>
                    <h4 className="font-bold text-blue-700 dark:text-sky-700">Mes projets récents</h4>
                    <div className="space-x-4 py-4">
                        <button className="border border-neutral-400 rounded-full px-2 py-1">Tous</button>
                        <button className="border border-neutral-400 rounded-full px-2 py-1">Organisme</button>
                        <button className="border border-neutral-400 rounded-full px-2 py-1">Agence</button>
                    </div>
                    <div className="grid grid-cols-3">
                        {project.map(project => (
                            <Website link={project.link} img={project.img} name={project.name} description={project.description} type={project.type}/>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Realisation;