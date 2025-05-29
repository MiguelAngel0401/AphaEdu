import Footer from "./footer";
import Navbar from "./Navbar";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex flex-col md:flex-row items-center md:items-center-safe justify-center gap-30 p-6 flex-grow">

                <img src="/logo.jpg" alt="logo" />

                <div className="text-left md:text-left bg-blue-100 rounded-lg shadow p-6 w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-2">Acerca de</h1>
                    <h1 className="text-3xl font-bold mb-2  text-blue-600">Team Alpha Edu</h1><br />

                    <p className="font-medium mb-1">Integrantes: </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Abraham Pérez Quiroz</li>
                        <li>Eric Hernández Hernández</li>
                        <li>Miguel Angel Islas Mendez</li>
                        <li>José Marcos Conde Vázquez</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}