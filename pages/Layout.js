import Head from "next/head";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>My App</title>
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
            </Head>
            <NavBar/>
            <main className="w-screen">{children}</main>
            <Footer/>
            
        </div>
    );
};

export default Layout;
