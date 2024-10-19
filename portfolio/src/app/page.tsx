import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    
    <>
    
    <Head>
    <title>Sobre mim | Eraldo</title>
    </Head>
    
    <main>
      <h1>hello world</h1>
      <Link href="/contatos"> Ir para página contatos</Link>
    </main>
    </>
 
  );
}

export default Home;