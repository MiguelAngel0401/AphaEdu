import Footer from "./footer";
import Navbar from "./Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-30 p-6">

                <img src="/logo.jpg" alt="logo" />

                <div className="text-left md:text-left">
                    <h1 className="text-3xl font-bold mb-2">Acerca de</h1>
                    <h2 className="text-xl font-semibold mb-4">Team AlphaEdu</h2><br />

                        <p className="font-medium mb-1">Integrantes: </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Abraham Pérez Quiroz</li>
                            <li>Eric Hernández Hernández</li>
                            <li>Miguel Angel Islas Mendez</li>
                            <li>José Marcos Conde Vázquez</li>
                        </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}