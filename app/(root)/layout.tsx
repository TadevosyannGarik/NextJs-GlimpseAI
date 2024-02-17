import MobileNavbar from "@/components/shared/mobile-navbar"
import Sidebar from "@/components/shared/sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            <Sidebar />
            <MobileNavbar />
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout