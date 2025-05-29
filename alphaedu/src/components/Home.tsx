import Footer from "./footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenidos a <span className="text-blue-600">Alpha Edu</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl">
          Nuestra plataforma está diseñada para promover el proceso de aprendizaje autonomo para todos los tipos de usuarios de manera gratuita y eficaz.
        </p>

        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Qué es Alpha Edu?</h2>
          <p className="text-gray-700 text-base">
            Es un sistema pensado para facilitar el proceso de aprendizaje con nuevos cursos educativos para todos los usuarios y expandir su conocimiento y ayudarse entre distintos usuarios.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
