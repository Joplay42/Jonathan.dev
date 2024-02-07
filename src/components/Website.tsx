import { useState } from "react";

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
                <img className="border border-neutral-400 rounded-xl shadow-lg" src={img} onMouseOver={handleHover} onMouseOut={handleOut}/>
                {isHover && 
                    <div className="absolute bottom-1/2 transform translate-y-1/2 bg-blue-700 rounded-xl bg-opacity-90 h-full w-full flex justify-center items-center" onMouseOver={handleHover} onMouseOut={handleOut}>
                        <p className="p-10 text-white text-center font-medium text-opacity-100">{description}</p>
                    </div>
                }
            </div>
            <h4 className="font-bold text-xl text-center my-8">{name}</h4>
        </div>    
    )
}

export default Website;