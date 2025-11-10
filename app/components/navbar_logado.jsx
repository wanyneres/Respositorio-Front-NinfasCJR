import Image from "next/image";
function NavbarLog() {
    return (<Image src="/images/user_log.svg" alt="Usuario Logado" className="cursor-pointer hover:opacity-90 transition" width={30} height={30}/>);
}

export default NavbarLog;