import '../App.css'

const NavBar = () => {
    return (
        <header className="body-font bg-ebony-400 shadow-2xl shadow-ebony-600/50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-16 h-16 text-white p-2 bg-ebony-900 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-3xl font-poppins bg-ebony-900 p-6 rounded-full text-slate-50">TO-DO APP</span>
                </a>
            </div>
        </header>
    )
}

export default NavBar