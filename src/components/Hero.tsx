function Hero() {
  return (
    <section id="home" className="border border-gray-300 p-4">
      Hero section
      {/* TEMP: Phase 2 theme test — will be replaced in Phase 3 */}
      <div className="mt-4 space-y-3">
        <h1 className="text-4xl font-extrabold">
          Dev <span className="text-brand">Stack</span>
        </h1>
        <button className="bg-brand rounded-lg px-5 py-2 font-semibold text-white">
          Gradient Button
        </button>
        <p>This paragraph should use the Plus Jakarta Sans font.</p>
      </div>
    </section>
  )
}

export default Hero
