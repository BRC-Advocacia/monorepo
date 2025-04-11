import Image from 'next/image'

export default function Header() {
    return (
        <>
            <div className="flex bg-blue-950 p-3">
                <Image src="/logo-header-branco.svg" alt="Logomarc - BRC" width={160} height={160} />
                <ul className="font-sans text-white text-xl items-center justify-end flex gap-5 flex-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="#articles">Artigos</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                </ul>
            </div>
        </>
    )
}
