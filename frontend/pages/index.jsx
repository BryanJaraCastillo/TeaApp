
// Este componente se envuelve alrededor de todas tus páginas
function MyApp({ Component, pageProps }) {
  return (
    // Renderiza la página actual pasando las props
    <Component {...pageProps} />

  );
}

// Exporta el componente MyApp
export default MyApp;
