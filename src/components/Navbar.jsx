import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo o nombre del sitio con un enlace al inicio */}
        <Link href="/" className="navbar-brand">
          Portfolio
        </Link>

        {/* Botón de hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Elemento de menú para el blog */}
            <li className="nav-item">
              <Link
                href="/blog"
                className="nav-link active"
                aria-current="page"
              >
                Blog
              </Link>
            </li>

            {/* Elemento de menú para GitHub */}
            <li className="nav-item">
              <Link href="/github" className="nav-link">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;