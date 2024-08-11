import "~/styles/globals.css"

import { GeistSans } from "geist/font/sans"
import { type Metadata } from "next"
import Navbar from "~/components/Navbar"

export const metadata: Metadata = {
    title: "James - Dev Portfolio",
    description: "A showcase of the projects I have worked on",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>
                <main className="flex flex-col">
                    <Navbar />
                    <div className="flex h-full flex-1 flex-col">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}
