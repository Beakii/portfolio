import "~/styles/globals.css"

import { Source_Code_Pro } from "next/font/google"
import { type Metadata } from "next"
import Navbar from "~/components/Navbar"

const font = Source_Code_Pro({
    subsets: ["latin"],
    weight: "500",
})

export const metadata: Metadata = {
    title: "James - Dev Portfolio",
    description: "A showcase of the projects I have worked on",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <main className="flex h-screen flex-col">
                    <Navbar />
                    <div className="flex h-full flex-1 flex-col">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}
