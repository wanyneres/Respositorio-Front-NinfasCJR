"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { CATEGORIAS_LOJA } from "../../contantes";

export default function ModalEditarPerfil({ Aberto, Fechado, Salvar, Deletar}) {

    const [nomeLoja, setNomeLoja] = useState("");
    const [bannerLoja, setBannerLoja] = useState("");
    const [logoLoja, setLogoLoja] = useState("");
    const [fotoPerfilLoja, setFotoPerfilLoja] = useState("");
    const [categoria, setCategoria] = useState("");

    const inputFotoPerfilLojaRef = useRef(null);
    const inputLogoRef = useRef(null);
    const inputBannerRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const dados = {nome: nomeLoja, categoria: categoria, banner: bannerLoja, logo: logoLoja, foto: fotoPerfilLoja};
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

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center sm:max-h-screen max-h-[80vh] w-full max-w-md sm:max-w-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>

                <div className="relative mb-2 w-full">
                    <div type="text" className="text-[43px] text-center">Editar Loja</div>
                    <button type="button" onClick={Fechado} className="absolute top-1 right-1 text-gray-400 hover:text-gray-600">
                        <Image src="/images/X.svg" alt="X" width={30} height={30}/>
                    </button>
                </div>

                <div className="rounded-full bg-white z-0 w-full flex items-center px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[61px] w-full bg-transparent focus:outline-none" placeholder="Nome da Loja"/>
                </div>

                <div className="relative mt-6 w-full">
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className={`w-full h-[61px] text-[20px] bg-white rounded-full py-2 pl-7 pr-10 text-black focus:outline-none appearance-none ${categoria === "" ? 'text-gray-500' : 'text-black'}`}>
                        <option value="" disabled>Selecione uma Categoria</option>
                        {CATEGORIAS_LOJA.map(cat => (<option key={cat.valor} value={cat.valor}>{cat.nome}</option>))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 mr-5 right-0 flex items-center px-2 text-gray-700">
                        <Image src="/images/seta_modal_edit_loja.svg" alt="X" width={30} height={30} priority/>
                    </div>
                </div>

                <div className="mt-7 rounded-xl p-6 border-2 relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputFotoPerfilLojaRef.current.click()}>
                    <div className="mt-5">
                        <Image src="/images/file.svg" alt="X" width={35} height={35}/>
                    </div>
                    <div type="text" className="text-[18px] mt-2 font-extralight text-center">Anexe a foto de perfil de sua loja</div>
                </div>
                <input type="file" ref={inputFotoPerfilLojaRef} className="hidden" onChange={(e) => setFotoPerfilLoja(e.target.files[0])}></input>

                <div className="mt-3 rounded-xl p-6 border-2 relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputLogoRef.current.click()}>
                    <div className="mt-5">
                        <Image src="/images/file.svg" alt="X" width={35} height={35}/>
                    </div>
                    <div type="text" className="text-[18px] mt-2 font-extralight text-center">Anexe a logo em SVG de sua loja</div>
                </div>
                <input type="file" ref={inputLogoRef} className="hidden" onChange={(e) => setLogoLoja(e.target.files[0])}></input>

                <div className="mt-3 rounded-xl p-6 border-2 relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputBannerRef.current.click()}>
                    <div className="mt-5">
                        <Image src="/images/banner.svg" alt="X" width={35} height={35}/>
                    </div>
                    <div type="text" className="text-[18px] mt-2 font-extralight text-center">Anexe o banner de sua loja</div>
                </div>
                <input type="file" ref={inputBannerRef} className="hidden" onChange={(e) => setBannerLoja(e.target.files[0])}></input>


                <button type="button" className="bg-[#FF0000] text-white flex justify-center items-center flex-none text-lg mt-7 w-full h-[50px] rounded-full font-thin" onClick={handleDelete}>DELETAR</button>

                <button type="button" className="bg-violet-600 text-yellow-50 mt-4 text-lg h-[50px] w-[200px] flex justify-center items-center flex-none sm:w-[300px] rounded-full font-thin" onClick={handleSubmit}>SALVAR</button>
            </div>
        </div>
    );
}