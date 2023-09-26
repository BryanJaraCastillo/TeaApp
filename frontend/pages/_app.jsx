// Importa las librerías necesarias
import Link from 'next/link';

// Componente funcional para la página de inicio
function HomePage() {
  return (
    <div>
      <h1>Bienvenido a nuestra aplicación social!</h1>
      
      <div>
        <p>Explora las funcionalidades de la aplicación y disfruta de la comunidad.</p>
        <Link href="/profile">
          <a>Ir a mi perfil</a>
        </Link>
        {/* Puedes agregar más Links aquí para navegar a otras páginas */}
      </div>
    </div>
  );
}

// Exporta el componente HomePage
export default HomePage;
