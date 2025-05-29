import Footer from "./footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Bienvenidos a <span className="text-purple-700">Alpha Edu</span>
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Un proyecto desarrollado con dedicación por nuestro equipo de desarrollo
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Desarrolladores</h2>
          <ul className="space-y-2 text-gray-600 text-lg">
            <li>• Eric Hernandez Hernandez</li>
            <li>• Jose Marcos Conde Vazquez</li>
            <li>• Perez Quiroz Abraham</li>
            <li>• Miguel Angel Islas Mendez</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
