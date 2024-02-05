import { useState } from "react";
import Hover from "./Hover";

interface Props {
    path: string;
    description: string;
}

const LanguageLogo = ({ path, description }: Props) => {
    const [isHover, setHover] = useState(false);

    function handleHover() {
        setHover(true);
    }

    function handleOut() {
        setHover(false);
    }

    return (
        <div className="relative">
            <img src={path} 
                className="w-20 h-auto cursor-pointer" 
                onMouseOver={handleHover} 
                onMouseOut={handleOut}
            />
            {isHover && <Hover description={description}/>}
        </div>
    )
}

export default LanguageLogo;