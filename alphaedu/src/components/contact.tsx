export default function Contact() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4">
      <h2 className="text-lg font-bold mb-3">Contacto</h2>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 w-full mb-3"
        />
        <input
          type="email"
          placeholder="Correo"
          className="border p-2 w-full mb-3"
        />
        <textarea
          placeholder="Mensaje"
          className="border p-2 w-full mb-3"
          rows={3}
        />
        <button className="bg-blue-500 text-white px-4 py-2">
          Enviar
        </button>
      </form>
    </div>
  )
}
