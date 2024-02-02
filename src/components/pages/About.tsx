const About = () => {
    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-24 2xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh] ">
                <section className="grid lg:grid-cols-3 justify-between items-center gap-5 2xl:gap-10 py-4 md:py-14">
                        <div className="order-2 lg:order-1 max-w-5xl col-span-2">
                            <h4 className="font-bold text-blue-700 dark:text-white mb-3"><span className="text-gray-400 text-xl mr-2 dark:text-sky-700">01</span> À propos de moi</h4><hr className="border-neutral-400 dark:border-neutral-700" />
                            <p className="mt-6 text-gray-500 dark:text-neutral-500">Hey, je m'appelle Jonathan Deschênes et je suis à la recherche d'un emploi en tant que designer et programmeur web. J'ai de l'expérience dans ce domaine, autrement dit j'ai réaliser plusieurs sites professionel pour d'autre compagnie.</p><br />
                            <p className="text-gray-500 dark:text-neutral-500"><span className="font-semibold text-sky-700">Pour en expliquer un peu plus sur moi et comment j'ai choisit le domaine du web :</span><br /> J'ai toujours eu une passion pour les jeux vidéo, donc biensûr comme chaque jeune j'ai voulût être développeur de jeux vidéo. Ensuite, dans mon étude en informatique j'ai découvert la programmation, celle-ci m'a fait découvrir l'existence du web et des milliers de possibilité de créations. Lors de mon stage de designer web, j'ai développé mes connaissances en web. À ce moment j'ai découvert ma passion pour le domaine du web.</p>
                        </div>
                        <img src="/support-center.png" className="w-80 lg:w-[28rem] justify-self-center col-span-2 lg:col-span-1 h-auto order-1 lg:order-2" />
                </section>
            </div>
        </div>
    )
}

export default About;