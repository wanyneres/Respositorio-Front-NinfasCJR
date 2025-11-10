"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import { ContextoAutentic } from "../../context/ContextoAutentic";
import NavbarLog from "./navbar_logado";
import NavbarDeslog from "./navbar_deslog";

function NavbarsPerfil() {
    const { usuarioLogado } = useContext(ContextoAutentic);
    
    const params = useParams();

    const estaVendoOProprioPerfil = usuarioLogado?.username === params?.usuario;

    return (estaVendoOProprioPerfil ? <NavbarLog /> : <NavbarDeslog />);
}

export default NavbarsPerfil;