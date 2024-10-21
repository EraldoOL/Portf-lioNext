import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    
    <>
    
    <Head>
    <title>Sobre mim | Eraldo</title>
    </Head>
    <meta name="description" content="Sou um desenvolvedor Web" />
    <div>
    <h1>Olá, sou &nbsp;</h1>
    <span>Eraldo</span>
    <div>
    <h2>Sou um desenvolvedor Web</h2>
    <Link href="/contatos">Fale comigo</Link>
    </div>
    <ul>
    <li style={{ background: "#2F74C0", color:"#FFFFFF"}}>typescript</li>
    <li style={{ background: "#6BDDFA", color:"#000000"}}>react</li>
    <li style={{ background: "#EFD81D", color:"#000000"}}>javascript</li>
    <li style={{ background: "#000000",color:"#FFFFFF"}}>next.js</li>
    
    </ul>
    
    </div>
    </>
 
  );
}

export default Home;