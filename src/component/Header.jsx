const Header = () => {
  return (
    <header className="py-5">
        <div className="w-full max-w-[1240px] mx-auto px-5">
            <div className="flex justify-between items-center">
                <a href="index.html">
                    <h1 className="text-3xl font-bold md:text-4xl">Food<span className="text-yellow-600">Fast</span></h1>
                </a>

                <nav className="hidden md:block">
                    <ul className="flex space-x-5">
                        <li>
                            <a className="text-lg font-medium text-yellow-600" href="#">Bosh sahifa</a>
                        </li>
                        <li>
                            <a className="text-lg font-medium hover:text-yellow-600 transition-all duration-300" href="#">Taomlar</a>
                        </li>
                        <li>
                            <a className="text-lg font-medium hover:text-yellow-600 transition-all duration-300" href="#">Kategoriya</a>
                        </li>
                    </ul>
                </nav>

                <a className="px-8 py-2 border-2 border-yellow-600 bg-yellow-600 text-white font-bold rounded-lg hover:bg-white transition-all duration-300 hover:text-black" href="#">Telegram</a>
            </div>
        </div>
    </header>
  )
}

export default Header
