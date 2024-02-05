import LanguageLogo from "../LanguageLogo";

const logo = [
    {path: "/html.png", description: "HTML, acronyme de HyperText Markup Language, est le langage de balisage standard utilisé pour créer et s'assurer de la bonne structure du contenu des pages web."},
    {path: "/css.png", description: "CSS, ou Cascading Style Sheets, est un langage de feuilles de style utilisé en tandem avec HTML pour définir une belle présentation visuelle des pages web."},
    {path: "/javascript.png", description: "JavaScript est un langage de programmation polyvalent côté client utilisé pour rendre les pages web interactives. Le javascript est très populaire."},
    {path: "/tailwind.png", description: "Tailwind CSS est un framework de développement CSS basé sur des classes utilitaires prédéfinies, plutôt que de créer des feuilles de style personnalisées."},
    {path: "/sql.png", description: "SQL, ou Structured Query Language, est un langage de programmation spécialement conçu pour la gestion et la manipulation des bases de données relationnelles."},
    {path: "/react.png", description: "React.js est une bibliothèque JavaScript open-source développée par Facebook, utilisée pour la construction d'interfaces utilisateur interactives et dynamiques."},
    {path: "/laravel.png", description: "Laravel est un framework de développement web open-source écrit en PHP, conçu pour simplifier et accélérer le processus de création d'applications web modernes."}
]

const Experiences = () => {
    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh] ">
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-10 lg:py-20">
                        <div className="order-1 max-w-5xl">
                            <h4 className="font-bold text-blue-700 dark:text-white mb-3 text-xl"><span className="text-gray-400 text-2xl mr-2 dark:text-sky-700">02</span> Mes expériences</h4><hr className="border-neutral-400 dark:border-neutral-700" />
                            <p className="mt-6 text-gray-600 font-medium dark:text-neutral-500 leading-6">En tant que développeur web et désigner j'ai beaucoup d'expériences dans le domaine. En commençant par Squarespace, ensuite vers html, et même des applications web framework!</p><br />
                            <p className="text-gray-600 font-medium dark:text-neutral-500 leading-6"><span className="font-bold">Comment je travaille?</span> Squarespace, Wix, <span className="text-blue-700 dark:text-sky-700">Html</span>, <span className="text-blue-700 dark:text-sky-700">Javascript</span>, Tailwindcss, <span className="text-blue-700 dark:text-sky-700">React</span>, Laravel et plus!</p>
                        </div>
                        <img src="/software-engineer.png" className="w-96 justify-self-center col-span-1 h-auto order-2" />
                </section>
                <section className="bg-neutral-100 border border-neutral-300 shadow-xl dark:bg-neutral-800 dark:border dark:border-neutral-700 p-10 rounded-xl lg:rounded-full my-20">
                    <div className="flex flex-wrap gap-10 justify-evenly items-center">
                        {logo.map(logo => (
                            <LanguageLogo path={logo.path} description={logo.description}/>
                        ))}
                    </div>
                </section>
                <section className="grid lg:grid-cols-2 justify-between items-center gap-5 2xl:gap-10 py-10 lg:py-20">
                        <div className="order-1 lg:order-2 max-w-5xl">
                            <h4 className="font-bold text-[#FE904D] mb-3">Carrière</h4>
                            <h1 className=" dark:text-white text-2xl font-semibold leading-10">La vie en tant que <span className="text-[#FE904D]">designer web</span></h1><hr className="border-neutral-400 dark:border-neutral-700" />
                            <p className="leading-6 mt-3 text-neutral-600 font-medium dark:text-neutral-400">Avec plus d'un an d'expérience en tant que designer dans la start-up Zorilla web. Une belle expérience et surtout beaucoup d'expériences gagné lors de la conception de site web. J'ai eu la chance de pouvoir réaliser plusieurs site web pour des organismes à but non-lucratif.<br/>Si vous voulez en voir plus sur mes sites web, n'hésitez pas à regarder mes réalisations.</p>
                            <a href="https://zorillaweb.com/" target="_blank">
                                <button className="bg-[#FE904D] hover:bg-transparent hover:text-[#FE904D] border border-[#FE904D] dark:bg-[#FE904D] dark:border-[#FE904D] dark:hover:text-white hover:dark:bg-transparent text-white px-6 py-3 rounded-lg mt-4">Voir le site</button>
                            </a>
                        </div>
                        <img src="/zorilla.png" className="w-52 justify-self-center col-span-1 h-auto order-2 lg:order-1" />
                </section>
            </div>
        </div>
    )
}

export default Experiences;