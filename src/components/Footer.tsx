import React from 'react'

export default function Footer() {
    return (
        <div className="w-full border-t border-zinc-800 mt-16 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-400 text-sm">
                <div className="text-center sm:text-left">
                    © 2025 Pathixo. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://pathixo.com/#contact"
                        className="hover:text-white transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}
