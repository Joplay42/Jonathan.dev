import { useState } from "react";
import { CiLink } from "react-icons/ci";

interface Props {
    link: string;
    img: string;
    name: string;
    type: string;
    description: string;
}

const Website = ({ link, img, name, type, description }: Props) => {

    const [isHover, setHover] = useState(false);

    function handleHover() {
        setHover(true);
    }
    function handleOut() {
        setHover(false);
    }

    return (
        <div>
            <div className="relative">
                <img className="border border-neutral-200 rounded-lg shadow-lg" src={img} onMouseOver={handleHover} onMouseOut={handleOut}/>
                {isHover && 
                    <div className="absolute bottom-1/2 transform translate-y-1/2 bg-blue-700 dark:bg-neutral-800 border border-blue-700 dark:border-neutral-700 rounded-lg bg-opacity-90 h-full w-full flex justify-center items-center" onMouseOver={handleHover} onMouseOut={handleOut}>
                        <div>
                            <h4 className="text-center text-white text-lg font-bold">{type}</h4>
                            <p className="p-4 text-white text-lg xl:text-sm 2xl:text-md text-center font-medium text-opacity-100">{description}</p>
                            <a href={link} target="_blank" className="flex gap-2 items-center text-white border border-white px-3 py-1 w-fit rounded-full hover:bg-white hover:text-blue-700 dark:hover:text-neutral-800 mx-auto">
                                Voir le site 
                                <CiLink className="w-8 h-auto"/>
                            </a>
                        </div>
                    </div>
                }
            </div>
            <h4 className="font-bold text-xl text-center my-8">{name}</h4>
        </div>    
    )
}

export default Website;