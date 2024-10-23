import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import { JetBrains_Mono} from 'next/font/google';

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
});


const Home = () => {
  return (
    
    <>
    
    <Head>
    <title>Sobre mim | Eraldo</title>
    </Head>
    <meta name="description" content="Sou um desenvolvedor Web" />
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between">
    <div className={`${jetbrains_mono.className} py-12 px-6 md:px-32 space-y-10 md:space-y-28`}>
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
    
    <div>
    <Image src="https://avatars.githubusercontent.com/u/139938613?s=400&u=3307ad614c532f668543ad211dd4f7c78678da77&v=4" alt=""
    unoptimized
    width={500} height={500} />
    <p>
    <span>1.5+</span>
    <br />
    anos de experiência
    </p>
    </div>
    </main>
    </>
 
  );
}

export default Home;