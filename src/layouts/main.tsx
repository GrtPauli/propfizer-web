import { Footer, Navbar } from "../components";

export default function MainLayout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
