import Navbar from "@/app/components/Navbar";


export default function Layout({children: children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="layout">
            <Navbar />
            {children}
        </main>
    )
}