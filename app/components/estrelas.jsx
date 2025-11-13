"use client";
import { useState } from "react";
import { FaStar, FaRegStar } from 'react-icons/fa';

function EstrelasAvaliacao() {
    const [avaliacao, setAvaliacao] = useState(0);
    const [hover, setHover] = useState(0);
    return (

        <div className="flex flex-row">
            {[1, 2, 3, 4, 5].map((valorEstrela) => (
            
            <div 
                key={valorEstrela} 
                onClick={() => setAvaliacao(valorEstrela)}
                onMouseEnter={() => setHover(valorEstrela)}
                onMouseLeave={() => setHover(0)}
                className="cursor-pointer">
                
                {valorEstrela <= (hover || avaliacao) ? (<FaStar className="sm:w-[110px] sm:h-[110px] w-[60px] h-[60px] text-violet-600" />) : (<FaRegStar className="sm:w-[110px] sm:h-[110px] w-[60px] h-[60px] stroke-0 text-gray-400" />)}
            </div>
            ))}
        </div>
    );
}

export default EstrelasAvaliacao;