"use client"
import React, {useState} from "react";
import Image from 'next/image';


export default function Login() {
  return (
  <main>
    <div className = "flex min-h-screen bg-yellow-50 justify-between">
      {/* Uso justify-between porque é uma página com dois principais elementos,
      o mascote na esquerda e o formulário na direita*/}
      <div>
        <div className="pl-50 pt-10">
          <Image 
            width={250}
            height={50}
            src={"/images/logo.png"}
            alt={"Logo da Stock.io"}></Image>
        </div>

        <div className="pl-50">
          <Image 
            width={350}
            height={350}
            src={"/images/stockles.png"}
            alt={"Stockles, mascote da empreasa"}></Image>
        </div>
      </div>

      <div className = "w-2/5 min-w-100 bg-black rounded-t-[3rem] p-15 mr-25 mt-15"> 
      {/* usei rounded-t-[3rem] porque o maior raio padrão da documentação não chega perto da referência */}
        <h2 className="text-center font-league text-3xl text-yellow-50 font-bold mb-10 mt-5">BEM VINDO DE VOLTA!</h2>

          <div>
            <label
            htmlFor = "email"
            className="sr-only" //Essa label não aparece na tela, deixei ela por causa do leitor de acessibilidade
            >E-mail</label>
            <input
              id = "email" 
              type = "text" 
              placeholder="E-mail" 
              className="text-sm text-gray-500 font-league w-full p-2 pl-4 mb-6 bg-yellow-50 rounded-full">
            </input>
          </div>

          <div>
            <label
            htmlFor = "email"
            className="sr-only" 
            >Senha</label>
            <input
              id = "password" 
              type = "text" 
              placeholder="Senha" 
              className="text-sm text-gray-500 w-full p-2 pl-4 mb-4 bg-yellow-50 rounded-full">
            </input>  
          </div>

          <div className="w-full text-center pb-5">
            <a 
            href="INSIRA O LINK"
            className="text-sm text-center font-light underline"
            >Esqueceu sua senha?</a>
          </div>

          <div>
            <button className="bg-violet-600 w-full rounded-full text-bold p-2 mb-4">ENTRAR</button>
          </div>

          <div>
            <p className="text-yellow-50 ">
                Não possui uma conta?  
                <a 
                  href="INSIRA O LINK" 
                  className="text-violet-600"
                >  Cadastre-se</a>
            </p>
          </div>

        </div>
      </div>
      </main>

    )
}
