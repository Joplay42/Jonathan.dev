const Accueil = () => {
    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[100vh] ">
                <section className="grid lg:grid-cols-2 justify-between items-center gap-10 py-4 md:py-28">
                    <div className="order-2 lg:order-1 max-w-5xl">
                        <h4 className="font-bold dark:text-neutral-400">Hey, <span className="font-medium">je me présente</span></h4>
                        <h1 className="text-4xl font-semibold leading-9"><span className="text-blue-700">Jonathan</span> Deschênes,</h1>
                        <p className="leading-6">Je suis un passioné de l'informatique. En d'autre mot un expert en développement web, avec beaucoup d'expériences dans le domaine je sais comment me surpasser.</p>
                        <button className="bg-blue-700 hover:bg-transparent hover:text-blue-700 border border-blue-700 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:text-white hover:dark:bg-neutral-800 text-white px-6 py-3 rounded-lg mt-4">Me contacter</button>
                    </div>
                    <img src="/Experience.svg" className="w-[300px] justify-self-center h-auto order-1 lg:order-2" />
                </section>
            </div>
        </div>

    )
}

export default Accueil;