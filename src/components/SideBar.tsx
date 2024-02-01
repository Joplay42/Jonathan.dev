import ListItem from "./ListItem";
interface Props {
    index:string;
    setIndex: React.Dispatch<React.SetStateAction<string>>;
}
const nav = [
    {name: "Accueil", link:"Accueil", icon: "../src/components/svg/Accueil.svg",},
    {name: "À propos", link:"About", icon: "../src/components/svg/About.svg",},
    {name: "Mes expériences", link:"Experiences", icon: "../src/components/svg/Experience.svg",},
    {name: "Réalisations", link:"Realisation", icon: "../src/components/svg/Realisation.svg",},
    {name: "Me joindre", link:"Contact", icon: "../src/components/svg/Contact.svg",},
]
const SideBar = ({ index, setIndex }: Props) => {
    return (
        <div id="sidebar" className="hidden xl:block bg-white py-10 px-4 2xl:px-10 ml-16 mt-6 rounded-3xl w-2/5 2xl:w-2/6 relative order-1 shadow-xl border border-gray-200">
            <div className="flex flex-col">
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