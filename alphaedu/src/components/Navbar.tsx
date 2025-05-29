import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white p-5 flex">
      <ul className="flex justify-around w-screen">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>Acerca De</Link></li>
        <li><Link to={"/contact"}>Contacto</Link></li>
      </ul>
    </div>
  )
}
