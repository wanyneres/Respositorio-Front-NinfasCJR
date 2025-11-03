"use client"
import Image from "next/image";
import BotaoPerfil from "../../components/mostrar_botao_edit_perfil";
import CardProduto from "../../components/card_produto";
import NavbarsPerfil from "../../components/mostrar_icone_user";

export default function PaginaDePerfil() {
  return (
    <main className="min-h-screen bg-yellow-50 flex flex-col">
        <div className="w-full h-[449px] bg-black flex flex-col justify-between relative z-0">
            <div className="w-full flex justify-between items-center px-6 lg:px-[115px] pt-8">
                <Image 
                width={221}
                height={43}
                src={"/images/logo2.svg"}
                alt={"Logo da Stock.io branca"}/>

                <div className="flex items-center gap-6">
                    <Image src="/images/bag.svg" alt="Sacolinha da Navbar" width={30} height={30}/>
                    <Image src="/images/lojinha.svg" alt="Lojinha da Navbar" width={30} height={30}/>
                    <NavbarsPerfil />
                    <Image src="/images/exit.svg" alt="Sair" width={30} height={30}/>
                </div>
            </div>

            <div className="w-full px-6 lg:px-[115px] pb-10">
                <Image
                className="dark:invert"
                src="/images/seta_perfil.svg"
                alt="seta perfil"
                width={28}
                height={48}
                priority/>
            </div>
        </div>

    <div className="w-full px-6 lg:px-[115px] relative z-10">
        <div className="flex justify-between items-start">
            <div className="w-[230px] h-[230px] ml-0 lg:ml-[65px] bg-gray-200 rounded-full mt-[-150px] border-yellow-50 shrink-0"></div>

            <div className="mt-8">
                <BotaoPerfil />
            </div>
        </div>

        <div className="w-full px-6 lg:px-[71px] relative z-10">
            <div className="w-full max-w-[318px] mt-[5px] flex flex-col gap-3">
                <input type="text" className="placeholder-black text-[52.56px]" placeholder="Nome"/>

                <div className="flex items-center gap-2">
                    <div className="text-[29.15px] text-gray-500">@</div>
                    <input type="text" className="placeholder-gray-500 text-[29.15px]" placeholder="IG"/>
                </div>

                <div className="flex items-center gap-2">
                    <Image
                    className="dark:invert"
                    src="/images/email.svg"
                    alt="símbolo e-mail"
                    width={25}
                    height={25}/>
                    <input type="text" className="placeholder-gray-500 text-[29.15px]" placeholder="E-mail"/>
                </div>
            </div>
        </div>

        <div className="flex justify-between items-end mt-12">
            <h1 className="text-3xl font-medium mt-12">Produtos</h1>
            <div type="text" className="text-violet-600 text-lg w-[324px] h-[43px] font-thin text-right">ver mais</div>
        </div>

        <div className="mt-4 w-full overflow-x-auto overflow-y-hidden">
            <div className="flex flex-nowrap gap-6">
            
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            
          </div>
        </div>
      </div>
    </main>
  );
}
