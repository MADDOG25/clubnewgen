export default function Newletter() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex justify-center items-center max-w-2xl gap-x-8 gap-y-16">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold text-black">
              Entra a la MasterClass Gratuita
            </h2>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="correo electrónico"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-gray-400 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-purple-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
