const About = () => {
    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-24 2xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh]">
                <section className="grid grid-cols-3 justify-between items-center gap-5 2xl:gap-10 py-10 lg:py-0">
                        <div className="order-1 max-w-5xl col-span-3 md:col-span-2">
                            <h4 className="font-bold text-blue-700 dark:text-white mb-3 text-xl"><span className="text-gray-400 text-2xl mr-2 dark:text-sky-700">01</span> À propos de moi</h4><hr className="border-neutral-400 dark:border-neutral-700" />
                            <p className="mt-6 text-gray-600 font-medium dark:text-neutral-500 leading-6">Hey, je m'appelle Jonathan Deschênes et je suis à la recherche d'un emploi en tant que designer et programmeur web. J'ai de l'expérience dans ce domaine, autrement dit j'ai réaliser plusieurs sites professionel pour d'autre compagnie.</p><br />
                            <p className="text-gray-600 font-medium dark:text-neutral-500 leading-6"><span className="font-semibold text-sky-700">Pour en expliquer un peu plus sur moi et comment j'ai choisit le domaine du web :</span><br /> J'ai toujours eu une passion pour les jeux vidéo, donc biensûr comme chaque jeune j'ai voulût être développeur de jeux vidéo. Ensuite, dans mon étude en informatique j'ai découvert la programmation, celle-ci m'a fait découvrir l'existence du web et des milliers de possibilité de créations. Lors de mon stage de designer web, j'ai développé mes connaissances en web. À ce moment j'ai découvert ma passion pour le domaine du web.</p>
                        </div>
                        <img src="/support-center.png" className="hidden md:block w-40 md:w-[28rem] justify-self-center col-span-1 h-auto order-2" />
                </section>
                <section className="py-20 xl:py-0">
                    <h2 className="text-center text-xl text-neutral-600 dark:text-neutral-300">Mon parcours scolaire</h2>
                    <div className="grid grid-col-1 lg:grid-cols-2 lg:grid-rows-5 gap-x-24 relative mt-10 lg:mt-0">
                        <div className="relative lg:row-start-2">
                            <div className="border border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
                                <div className="bg-blue-700 dark:bg-sky-700 text-white text-xs font-bold px-2 py-1 rounded-full w-fit mb-3">
                                    <p>2017-2022</p>
                                </div>
                                <h4 className="font-semibold text-blue-700 dark:text-sky-700">Diplôme étude secondaire - DES</h4>
                                <p className="font-light leading-10">Centre professionel des riverains</p>
                            </div>
                            <div className="hidden lg:block z-50 bg-blue-700 text-blue-700 px-1 leading-3 rounded-full ring-1 ring-neutral-500 ring-offset-4 absolute -right-[54px] top-14">.</div>
                        </div>
                        <div className="relative lg:row-start-3 lg:col-start-2">
                            <div className="border border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
                                <div className="bg-blue-700 dark:bg-sky-700 text-white text-xs font-bold px-2 py-1 rounded-full w-fit mb-3">
                                    <p>2020-2023</p>
                                </div>
                                <h4 className="font-semibold text-blue-700 dark:text-sky-700">Diplôme etude professionel - DEP</h4>
                                <p className="font-semibold leading-10">Soutien informatique</p>
                                <p className="font-light">Centre professionel des riverains</p>
                            </div>
                            <div className="hidden lg:block z-50 bg-blue-700 text-blue-700 px-1 leading-3 rounded-full ring-1 ring-neutral-500 ring-offset-4 absolute -left-[54px] top-14">.</div>
                        </div>
                        <div className="relative lg:row-start-4">
                            <div className="border border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
                                <div className="bg-blue-700 dark:bg-sky-700 text-white text-xs font-bold px-2 py-1 rounded-full w-fit mb-3">
                                    <p>En cours</p>
                                </div>
                                <h4 className="font-semibold text-blue-700 dark:text-sky-700">Diplôme étude collégiale - DEC</h4>

                                <p className="font-semibold leading-10">Technique en programmation</p>
                                <p className="font-light">Cégep Montmorency</p>
                            </div>
                            <div className="hidden lg:block z-50 bg-blue-700 text-blue-700 px-1 leading-3 rounded-full ring-1 ring-neutral-500 ring-offset-4 absolute -right-[54px] top-14">.</div>
                        </div>
                        <div className="hidden lg:block absolute inset-y-0 left-1/2 top-1/2 bg-neutral-300 dark:bg-neutral-600 w-[1px] transform -translate-y-1/2 -translate-x-1/2 h-[35rem]"></div>                    
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;