import ListItem from "./ListItem";
interface Props {
    index:string;
    setIndex: React.Dispatch<React.SetStateAction<string>>;
}
const nav = [
    {name: "Accueil", link:"Accueil", icon: "/Accueil.svg",},
    {name: "À propos", link:"About", icon: "/About.svg",},
    {name: "Mes expériences", link:"Experiences", icon: "/Experience.svg",},
    {name: "Réalisations", link:"Realisation", icon: "/Realisation.svg",},
    {name: "Me joindre", link:"Contact", icon: "/Contact.svg",},
]
const SideBar = ({ index, setIndex }: Props) => {
    return (
        <div id="sidebar" className="hidden xl:block bg-white py-20 lg:py-10 px-4 2xl:px-10 ml-16 mt-6 mr-6 rounded-3xl lg:w-2/5 2xl:w-2/6 relative order-1 shadow-xl border border-gray-200 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="absolute top-1/2 transform -translate-y-1/2 lg:top-auto lg:transform-none lg:-translate-y-0 lg:static py-4 lg:py-0 flex flex-wrap lg:flex-col">
                {nav.map(nav => ( 
                    <ListItem 
                        index={index} 
                        name={nav.name} 
                        link={nav.link} 
                        icon={nav.icon} 
                        setIndex={setIndex}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar;