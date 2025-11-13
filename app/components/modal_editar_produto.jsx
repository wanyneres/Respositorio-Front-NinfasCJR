"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { HiMinus, HiPlus } from 'react-icons/hi';
import { CATEGORIAS_PRODUTOS } from "../../categorias_produtos";

export default function ModalEditarProduto({ Aberto, Fechado, Salvar, Deletar}) {

    const [nomeProduto, setNomeProduto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [foto1, setFoto1] = useState("");
    const [foto2, setFoto2] = useState("");
    const [foto3, setFoto3] = useState("");
    const [foto4, setFoto4] = useState("");
    const [estoque, setEstoque] = useState(1);
    const [categoriaProduto, setCategoriaProduto] = useState("");

    const inputFoto1 = useRef(null);
    const inputFoto2 = useRef(null);
    const inputFoto3 = useRef(null);
    const inputFoto4 = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const dados = {nome: nomeProduto, categoriaProduto: categoriaProduto, descricaoProduto: descricao, 
            preco: preco, foto1: foto1, foto2: foto2, foto3: foto3, foto4: foto4, estoque: estoque};
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

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center sm:max-h-screen max-h-[80vh] w-full max-w-md sm:max-w-3xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>

                <div className="relative mb-2 w-full">
                    <div type="text" className="text-[43px] mt-9 sm:mt-0 text-center">Editar Produto</div>
                    <button type="button" onClick={Fechado} className="absolute top-1 right-1 text-gray-400 hover:text-gray-600">
                        <Image src="/images/X-2.svg" alt="X" width={30} height={30}/>
                    </button>
                </div>

                <div className="mt-7 rounded-xl p-2 sm:max-w-xl border-2 relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputFoto1.current.click()}>
                    <div className="mt-5">
                        <Image src="/images/camera_produto.svg" alt="X" width={65} height={60}/>
                    </div>
                    <div type="text" className="text-[18px] mt-2 font-light text-center">Anexe as fotos do seu produto</div>
                </div>
                <input type="file" ref={inputFoto1} className="hidden" onChange={(e) => setFoto1(e.target.files[0])}></input>


                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:max-w-xl">
                    <div className="mt-3 rounded-xl sm:max-w-[228px] sm:max-h-[145px] p-6 border-2 relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputFoto2.current.click()}>
                        <div className="mt-5">
                            <Image src="/images/camera_produto.svg" alt="X" width={65} height={60}/>
                        </div>
                    </div>
                    <input type="file" ref={inputFoto2} className="hidden" onChange={(e) => setFoto2(e.target.files[0])}></input>

                    <div className="sm:mt-3 rounded-xl p-6 border-2 sm:max-w-[228px] sm:max-h-[145px] relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputFoto3.current.click()}>
                        <div className="mt-5">
                            <Image src="/images/camera_produto.svg" alt="X" width={65} height={60}/>
                        </div>
                    </div>
                    <input type="file" ref={inputFoto3} className="hidden" onChange={(e) => setFoto3(e.target.files[0])}></input>

                    <div className="sm:mt-3 rounded-xl p-6 border-2 sm:max-w-[228px] sm:max-h-[145px] relative flex flex-col items-center border-dashed border-violet-600 h-[145px] w-full cursor-pointer" onClick={() => inputFoto4.current.click()}>
                        <div className="mt-5">
                            <Image src="/images/camera_produto.svg" alt="X" width={65} height={60}/>
                        </div>
                    </div>
                    <input type="file" ref={inputFoto4} className="hidden" onChange={(e) => setFoto4(e.target.files[0])}></input>
                </div>

                <div className="rounded-full bg-white z-0 w-full sm:max-w-xl mt-5 flex items-center px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[61px] w-full bg-transparent focus:outline-none" placeholder="Nome do Produto"/>
                </div>

                <div className="relative mt-3 w-full sm:max-w-xl">
                    <select value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)} className={`w-full h-[61px] text-[20px] bg-white rounded-full py-2 pl-7 pr-10 text-black focus:outline-none appearance-none ${categoriaProduto === "" ? 'text-gray-500' : 'text-black'}`}>
                        <option value="" disabled>Selecione uma Subcategoria</option>
                        {CATEGORIAS_PRODUTOS.map(cat => (<option key={cat.valor} value={cat.valor}>{cat.nome}</option>))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 mr-5 right-0 flex items-center px-2 text-gray-700">
                        <Image src="/images/seta_modal_edit_loja.svg" alt="X" width={30} height={30} priority/>
                    </div>
                </div>

                <textarea className="placeholder-gray-500 mt-3 text-[20px] rounded-2xl h-60 sm:h-[150px] w-full sm:max-w-xl bg-white pt-4 px-6 resize-none shrink-0" placeholder="Descrição do Produto"></textarea>

                <div className="rounded-full bg-white z-0 w-full sm:max-w-xl mt-3 flex items-center px-7">
                    <input type="text" className="placeholder-gray-500 text-[20px] h-[61px] w-full bg-transparent focus:outline-none" placeholder="Preço"/>
                </div>

                <button type="button" className="bg-[#FF0000] text-white flex sm:max-w-xl justify-center items-center flex-none text-lg mt-3 w-full h-[50px] rounded-full font-light" onClick={handleDelete}>DELETAR</button>

                <div className="mt-9 flex items-center sm:flex-row gap-10">
                    <button type="button" className="rounded-full h-[68px] w-[68px] justify-center flex flex-col items-center border-2 border-violet-600 p-2" onClick={() => { if (estoque > 0) { setEstoque(estoque - 1); } } }>
                        <HiMinus className="w-[37px] h-[37px] text-violet-600 font-black"/>
                    </button>

                    <span className="text-violet-600 text-[81px] font-normal">{estoque}</span>

                    <button type="button" className="rounded-full justify-center flex flex-col items-center h-[68px] w-[68px] border-2 border-violet-600 p-2" onClick={() => setEstoque(estoque + 1)}>
                        <HiPlus className="w-[37px] h-[37px] text-violet-600 font-black"/>
                    </button>
                </div>

                <button type="button" className="bg-violet-600 text-yellow-50 sm:max-w-xl mt-4 text-lg h-[50px] w-[200px] flex justify-center items-center flex-none sm:w-[300px] rounded-full font-light" onClick={handleSubmit}>SALVAR</button>
            </div>
        </div>
    );
}