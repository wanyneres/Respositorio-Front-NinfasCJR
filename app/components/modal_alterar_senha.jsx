"use client";
import Image from "next/image";
import { useState } from "react";

export default function ModalAlterarSenha ({ Aberto, Fechado, AbrirModalEditarPerfil, SalvarSenha }) {

    const [senhaAntiga, setSenhaAntiga] = useState("");
    const [senhaNova, setSenhaNova] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const dados = {senha_antiga: senhaAntiga, senha_nova: senhaNova, confirmar_senha: confirmarSenha};
        SalvarSenha(dados);
        Fechado();
    }

    if(!Aberto) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4" onClick={Fechado}>

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center sm:max-h-screen max-h-[80vh] w-full max-w-md sm:max-w-[500px] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={Fechado} className="cursor-pointer absolute right-5 text-gray-400 hover:text-gray-600">
                    <Image src="/images/X-2.svg" alt="X" width={30} height={30}/>
                </button>

                <button type="button" onClick={AbrirModalEditarPerfil} className="cursor-pointer absolute left-15 mt-15 text-gray-400 hover:text-gray-600">
                    <Image src="/images/seta_senha.svg" alt="X" width={18} height={24}/>
                </button>

                <Image src="/images/key.svg" alt="X" width={180} height={180}/>

                <div className="rounded-full mt-8 bg-white z-0 flex px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[50px] sm:w-[320px] w-[200px] bg-transparent" placeholder="Senha Antiga"/>
                </div>
                <div className="rounded-full mt-5 bg-white z-0 flex px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[50px] sm:w-[320px] w-[200px] bg-transparent" placeholder="Nova Senha"/>
                </div>
                <div className="rounded-full mt-5 bg-white z-0 flex px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[50px] sm:w-[320px] w-[200px] bg-transparent" placeholder="Confirmar Senha"/>
                </div>

                <button type="button" className="bg-violet-600 cursor-pointer hover:opacity-90 transition text-yellow-50 mt-20 mb-15 text-lg h-[50px] w-[250px] flex justify-center items-center flex-none sm:w-[373px] rounded-full font-light" onClick={handleSubmit}>SALVAR</button>
            </div>
        </div>
    );
}