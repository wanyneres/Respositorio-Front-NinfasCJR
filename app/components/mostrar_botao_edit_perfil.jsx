"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import { ContextoAutentic } from "../../context/ContextoAutentic";
import BotaoEditarPerfil from "./botao_editar_perfil";

function BotaoPerfil() {
    const { usuarioLogado } = useContext(ContextoAutentic);
    
    const params = useParams();

    const estaVendoOProprioPerfil = usuarioLogado?.username === params?.usuario;

    return (estaVendoOProprioPerfil ? <BotaoEditarPerfil /> : null);
}

export default BotaoPerfil;