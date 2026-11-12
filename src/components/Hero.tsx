import banner from '../assets/banner-stack.png'

function Hero() {
  return (
    <section id="home">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="text-brand block">Development Stack</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#technologies"
              className="bg-brand rounded-lg px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={banner}
            alt="Illustration of stacked development technology layers"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
