import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import "../globals.css"
import BottomBar from "@/components/shared/BottomBar"
import LeftSidebar from "@/components/shared/LeftSideBar"
import RightSideBar from "@/components/shared/RightSideBar"
import TopBar from "@/components/shared/TopBar"
export const metadata = {
    title: 'Connextions',
    description: 'A Connextions with your friends'
}
const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}