"use client";
import Image from "next/image";
import { useState } from "react";

export default function ModalEditarPerfil({ Aberto, Fechado, Salvar, Deletar, AbrirModalAlterarSenha}) {

    const [nomeUsuario, setNomeUsuario] = useState("");
    const [Username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dados = {nome: nomeUsuario, username: Username, email: email};
        Salvar(dados);
        Fechado();
    }

    const handleDelete = (e) => {
        e.preventDefault();
        
        if(window.confirm("Tem certeza que quer deletar todos os dados da loja?")){
            Deletar();
            Fechado();
        }
    }

    if(!Aberto) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4" onClick={Fechado}>

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center sm:max-h-screen max-h-[80vh] w-full max-w-md sm:max-w-[500px] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={Fechado} className="absolute right-5 text-gray-400 hover:text-gray-600">
                    <Image src="/images/X-2.svg" alt="X" width={30} height={30}/>
                </button>

                <div className="w-[150px] h-[150px] bg-gray-500 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                    <div className="w-[60px] h-[60px] mt-35 mx-auto bg-white rounded-full shrink-0 flex items-center justify-center">
                        <Image src="/images/camera.svg" alt="camera" width={30} height={30}/>
                    </div>
                </div> 

                <div className="rounded-full mt-8 bg-white z-0 flex px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[50px] sm:w-[320px] w-[200px] bg-transparent" placeholder="Nome"/>
                </div>
                <div className="rounded-full mt-5 bg-white z-0 flex px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[50px] sm:w-[320px] w-[200px] bg-transparent" placeholder="Username"/>
                </div>
                <div className="rounded-full mt-5 bg-white z-0 flex px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[50px] sm:w-[320px] w-[200px] bg-transparent" placeholder="E-mail"/>
                </div>

                <button type="button" className="border-[#AF052A] border-2 bg-transparent text-[#AF052A] cursor-pointer hover:opacity-90 transition flex justify-center items-center flex-none text-lg mt-7 sm:w-[373px] w-[250px] h-[50px] rounded-full font-light" onClick={handleDelete}>DELETAR</button>                
                
                <button type="button" className="border-violet-600 border-2 text-violet-600  cursor-pointer hover:opacity-90 transition mt-4 text-lg h-[50px] w-[250px] flex justify-center items-center flex-none sm:w-[373px] rounded-full font-light" onClick={() => { AbrirModalAlterarSenha() ; Fechado() }}>ALTERAR SENHA</button>

                <button type="button" className="bg-violet-600 text-yellow-50 mt-4 text-lg h-[50px] w-[250px] cursor-pointer hover:opacity-90 transition flex justify-center items-center flex-none sm:w-[373px] rounded-full font-light" onClick={handleSubmit}>SALVAR</button>
            </div>
        </div>
    );
}