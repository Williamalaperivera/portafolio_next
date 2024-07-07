import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar"; // Importa el componente Navbar
import PropTypes from "prop-types"; // Importa PropTypes para la validación de tipos
import NProgress from "nprogress"; // Importa NProgress para la barra de progreso
import nProgress from "nprogress"; // Importa nProgress, parece un error de duplicación
import classNames from "classnames"; // Importa classNames para manejar clases condicionales

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter(); // Obtiene el router de Next.js

  useEffect(() => {
    // Efecto para manejar cambios de ruta
    const handleRouteChange = (url) => {
      console.log(url); // Registra la URL en la consola
      NProgress.start(); // Inicia la barra de progreso al cambiar de ruta
    };

    router.events.on("routeChangeStart", handleRouteChange); // Escucha el inicio de cambio de ruta

    router.events.on("routeChangeComplete", () => NProgress.done()); // Escucha el final exitoso de cambio de ruta

    router.events.on("routeChangeError", () => nProgress.done()); // Escucha el error en el cambio de ruta

    return () => {
      router.events.off("routeChangeStart", handleRouteChange); // Limpia el event listener al desmontar el componente
    };
  }, []); // Dependencia vacía para asegurar que se ejecute solo una vez

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar /> {/* Renderiza el componente Navbar */}

      <main className="container py-4">
        {/* Título */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Contenido principal */}
        {children}
      </main>

      {/* Renderiza el pie de página si footer es true */}
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Inés María Oliveros Portfolio</h1>
            <p>2024 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

// Definición de PropTypes para validar las propiedades
Layout.propTypes = {
  children: PropTypes.node, // children debe ser un nodo de React (componente, string, etc.)
  title: PropTypes.string, // title debe ser un string
  footer: PropTypes.bool, // footer debe ser un booleano
};

export default Layout; // Exporta el componente Layout por defecto
