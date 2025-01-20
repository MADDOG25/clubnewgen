import { useState } from "react";

export default function Newletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Limpia mensajes previos

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbye2P4LJ3QyiF2Lr5j63izpfyX4UO0qmk86P7Xt_y0faOAaXTJPAUCN7WNRQ75AVyuo4w/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar el correo. Inténtalo de nuevo.");
      }

      const data = await response.json();

      if (data.status === "success") {
        setMessage(
          "¡Gracias por registrarte! Redirigiendo a la MasterClass..."
        );
        setEmail(""); // Limpia el input
        setTimeout(() => {
          // Redirige a la página de la MasterClass
          window.location.href = "/masterclass";
        }, 2000);
      } else {
        throw new Error(data.message || "Algo salió mal. Intenta de nuevo.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // function handleSumbit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const email = formData.get("email");
  //   console.log(email);
  //   fetch("https://script.google.com/macros/s/AKfycbye2P4LJ3QyiF2Lr5j63izpfyX4UO0qmk86P7Xt_y0faOAaXTJPAUCN7WNRQ75AVyuo4w/exec", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="relative isolate overflow-hidden bg-white py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex justify-center items-center max-w-2xl gap-x-8 gap-y-16">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold text-black">
              Entra a la MasterClass Gratuita
            </h2>
            <div className="mt-6 flex flex-col gap-y-4 lg:flex-row justify-center gap-x-4">
              <form
                onSubmit={handleSubmit}
                className="form flex w-full gap-y-4 justify-center gap-x-4"
              >
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="correo electrónico"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-gray-400 px-3.5 py-4 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-none rounded-md bg-purple-800 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800"
                >
                  {loading ? "Enviando..." : "Entrar"}
                </button>
              </form>
            </div>
            {/* Mensajes para el usuario */}
            {message && (
              <p className="mt-4 text-center text-sm text-red-600">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
