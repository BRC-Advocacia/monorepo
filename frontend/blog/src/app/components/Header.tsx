import Image from 'next/image'

export function Header () {
    return (
        <>
            <div className="container flex place-center place-self-center p-3 space-justify-between">
                <Image src="/logo-header-branco.svg" alt="Logomarc - BRC" width={160} height={160} />
                <ul className="font-sans text-white text-xl font-bold items-center justify-end flex gap-5 flex-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="#articles">Artigos</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                </ul>
            </div>
        </>
    )
}
