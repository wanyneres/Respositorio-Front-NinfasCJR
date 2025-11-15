"use client"
import { SlArrowLeft } from "react-icons/sl";
import Navbar from '../components/navbar';
import Image from 'next/image';
import {Estrelas} from '../components/estrelas_estaticas'


export default function avaliacoesComentarios(){
    return(
        <div className="h-full h-full">

            <div className="bg-black h-1/2 p-12">
                <div className="flex flex-row items-center  mb-4">

                    <button className="ml-8 mr-8" type="button">
                        <SlArrowLeft size={24}></SlArrowLeft>
                    </button>

                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image width={128}
                                height={128}
                                src={"/images/teste.png"}
                                alt={"Foto de perfil do usuário"}
                                className="object-cover w-full h-full"></Image>
                    </div>

                    <p className="text-yellow-50 text-2xl ml-2 mr-2">Nome de usuário</p>

                    <p className="text-yellow-50 font-light text-sm">1h</p>

                    <div className="ml-auto mr-16">
                        <Estrelas rating={4}></Estrelas>
                    </div>

                </div>

                <p className="text-xl font-thin ml-20">Texto de avaliação. Aqui vai aparecer as informações que saem do back</p>
            </div>
            <div className="bg-yellow-50 h-1/2">

            </div>
        </div>




    )
}

