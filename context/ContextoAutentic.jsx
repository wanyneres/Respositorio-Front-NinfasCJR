"use client";
import React, { useState, createContext } from "react";

export const ContextoAutentic = createContext();

export function ProvedorAutentic({ children }) {
    const [usuarioLogado, setUsuarioLogado] = useState({username: 'ana', logado: true});

    return (
        <ContextoAutentic.Provider value={{ usuarioLogado, setUsuarioLogado }}> 
            {children}
        </ContextoAutentic.Provider>
    );
}