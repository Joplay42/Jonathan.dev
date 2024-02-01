interface Props {
    name:string;
    link:string;
    icon:string;
    index:string;
    setIndex: React.Dispatch<React.SetStateAction<string>>;
}

const ListItem = ({ name, link, icon, index, setIndex }: Props) => {
    const isActive = index === link;
    return (
        <div
            className={`flex items-end gap-2 py-6 px-2 2xl:px-10 cursor-pointer ${isActive ? 'text-blue-700 font-bold slide-in-left bg-gray-100 rounded-xl' : ''}`}
            onClick={() => setIndex(link)}
        >            
            <img src={icon} className="w-6 h-6" /> 
            <p>{name}</p>
        </div>
    )
}

export default ListItem;