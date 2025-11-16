import React from 'react'

export default function Navbar() {
    return (
        <header className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap px-4 py-8 border-b border-zinc-800">
            <div className="flex items-center gap-3 text-white">
                <div className="size-8 bg-linear-to-br from-pink-500 to-violet-500 rounded-lg flex items-center justify-center p-1">
                    <svg
                        className="size-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5>.25v9.32l9-5.25V7.93zM2.25 7.93v9.32l9 5.25v-9.32l-9-5.25z"></path>
                    </svg>
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">edu.pathixo</h2>
            </div>

            <nav className="flex items-center gap-6">
                <a className="text-zinc-300 hover:text-white text-sm font-medium transition-colors" href="/">
                    Courses
                </a>
                <a className="text-zinc-300 hover:text-white text-sm font-medium transition-colors" href="https://pathixo.com">
                    Home
                </a>
                <a className="text-zinc-300 hover:text-white text-sm font-medium transition-colors" href="https://pathixo.com/about">
                    About
                </a>
            </nav>
        </header>
    )
}
