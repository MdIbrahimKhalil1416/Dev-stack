// Nav links are defined ONCE here and reused by the desktop and mobile menus.
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

// The link that is shown as "active" (pink). Fixed for now — no state yet.
const activeHref = '#home'

function Navbar() {
  // Logo is used in two places (desktop left, mobile center), so keep it in one variable.
  const logo = (
    <a href="#home" className="flex items-center gap-2 text-lg font-bold sm:text-xl">
      <span className="bg-brand flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white">
        DS
      </span>
      <span>
        <span className="text-slate-900">Dev</span>
        <span className="text-brand">Stack</span>
      </span>
    </a>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center px-4">
        {/* Left: hamburger (mobile) + logo (desktop) */}
        <div className="flex flex-1 items-center">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost btn-square btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-slate-200 bg-white p-2 shadow"
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={
                      link.href === activeHref
                        ? 'font-medium text-pink-600'
                        : 'font-medium text-slate-600'
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex">{logo}</div>
        </div>

        {/* Center: logo (mobile only) */}
        <div className="flex flex-1 justify-center lg:hidden">{logo}</div>

        {/* Center: nav links (desktop only) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.href === activeHref
                    ? 'font-medium text-pink-600'
                    : 'font-medium text-slate-600 hover:text-slate-900'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Sign In + Sign Up */}
        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
          <button className="btn btn-ghost btn-sm lg:btn-md font-medium text-slate-700">
            Sign In
          </button>
          <button className="btn btn-sm lg:btn-md bg-brand rounded-full border-0 font-semibold text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
