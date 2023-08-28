import { ClerkProvider } from "@clerk/nextjs"
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BottomBar from "@/components/shared/BottomBar"
import LeftSidebar from "@/components/shared/LeftSideBar"
import RightSideBar from "@/components/shared/RightSideBar"
import TopBar from "@/components/shared/TopBar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Connextions',
    description: 'A Connextions with your friends'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
