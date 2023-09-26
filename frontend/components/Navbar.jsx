import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/login">
        <a>Iniciar sesión</a>
      </Link>
      <Link href="/profile">
        <a>Mi Perfil</a>
      </Link>
      {/* Agrega aquí más enlaces según tus rutas */}
    </nav>
  );
}

export default Navbar;
