import Image from 'next/image'

export default function Header() {
    return (
        <>
            <div className="bg-blue-950">
                <div className='container flex p-3 mx-auto'>
                    <div className='flex gap-3 items-center'>
                        <Image src="/logo-header-branco.svg" alt="Logomarc - BRC" width={160} height={160} />
                        <div className="w-px h-10 bg-white opacity-25"></div>
                        <h1 className='text-2xl text-white'>Blog</h1>
                    </div>
                    <ul className="font-sans text-white text-xl items-center justify-end flex gap-5 flex-1">
                        <li><a href="/">Home</a></li>
                        <li><a href="#articles">Artigos</a></li>
                        <li><a href="#videos">Videos</a></li>
                        <li><a href="#noticias">Noticias</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
