export default function Test() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
      <section className="max-w-4xl w-full px-6 py-12">
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Tailwind JSX Boilerplate
        </h1>

        <p className="text-gray-400 max-w-2xl mb-8">
          This is a clean starting point for any React + Tailwind project.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            Primary Action
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition">
            Secondary
          </button>
        </div>

      </section>
    </main>
  )
}
