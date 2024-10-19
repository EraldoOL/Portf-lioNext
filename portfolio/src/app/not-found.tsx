import Link from "next/link";

const Notfound = () => {
  return(
    
    <>
    
    <Head>
    <title>404 | Eraldo</title>
    </Head>
    
   <main>
    <h1>404</h1>
    <div>
    <p>Oops, não conseguimos encontrar</p>
    <span>clique no botão abaixo para voltar</span>
    </div>
    <Link href="/">Ir para pág inicial</Link>
   </main>
    </>
    );
};

export default Notfound;