"use client"
import { SlArrowLeft } from "react-icons/sl";
import Navbar from '../components/navbar';
import Image from 'next/image';
import {Estrelas} from '../components/estrelas_estaticas'
import HeaderAvaliacao from '../components/header_avaliacao'


export default function avaliacoesComentarios(){
    return(
        <div className="h-full h-full">

            <div className="bg-black h-1/2 p-12">
                <div className="flex flex-row items-center  mb-4">

                    <button className="ml-8 mr-8" type="button">
                        <SlArrowLeft size={24}></SlArrowLeft>
                    </button>

                    <HeaderAvaliacao 
                        nome="Nome do usuário"
                        imagem="/images/teste.png"
                        horas={2}
                    ></HeaderAvaliacao>

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

