import Link from "next/link";

const Notfound = () => {
  return(
    
    <div>
    <h1>404</h1>
    <div>
    <p>Oops, não conseguimos encontrar</p>
    <spam>clique no botão abaixo para voltar</spam>
    </div>
    <Link href="/">
    Ir para pág inicial
    </Link>
    </div>
    
    );
};

export default Notfound;