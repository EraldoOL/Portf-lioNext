import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import { JetBrains_Mono} from 'next/font/google';
import {Roboto} from 'next/font/google';

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
});
const roboto = Roboto({
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
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
    <div className={`${jetbrains_mono.className} py-12 px-6 md:px-32 space-y-10 md:space-y-28 text-white flex-col items-center xl:items-start gap-4 w-full xl:w-120`}>
    <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">Olá, sou&nbsp;
    <span className="font-bold">Eraldo</span>
    </h1>

    <div className="mb-12">
    <h2 className={`${roboto.className} mb-12`}>Sou um desenvolvedor Web</h2>
    <Link href="/contatos" className="p-3 bg-e-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Fale comigo</Link>
    </div>
    <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
    <li style={{ background: "#2F74C0", color:"#FFFFFF"}} className='w-fit p-2 rounded-md'>typescript</li>
    <li style={{ background: "#6BDDFA", color:"#000000"}} className='w-fit p-2 rounded-md'>react</li>
    <li style={{ background: "#EFD81D", color:"#000000"}} className='w-fit p-2 rounded-md'>javascript</li>
    <li style={{ background: "#000000",color:"#FFFFFF"}} className='w-fit p-2 rounded-md'>next.js</li>
    </ul>
    </div>
    
    <div className="relative">
    <Image src="https://avatars.githubusercontent.com/u/139938613?s=400&u=3307ad614c532f668543ad211dd4f7c78678da77&v=4" alt=""
    unoptimized
    width={500} height={500}
    className="rounded-full"
    />
    <p className="p-4 w-fit text-base leading-tight bg-e-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
    <span className="text-4xl">1.5+</span>
    <br />
    anos de experiência
    </p>
    </div>
    </main>
    </>
 
  );
}

export default Home;