import { Outlet, Link } from "react-router-dom"

export function Home() {
  return (
    <>
      <h1>Home</h1>

      <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={`/signin`} className="nav-link">Registrarse</Link>
          </li>
          <li className="nav-item">
            <Link to={`/user/login`} className="nav-link">Iniciar Sesion</Link>
          </li>
          <li className="nav-item">
            <Link to={`/user`} className="nav-link">Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link to={`/createTeam`} className="nav-link">Crear Equipo</Link>
          </li>
          <li className="nav-item">
            <Link to={`/team`} className="nav-link">Equipos</Link>
          </li>
          <li className="nav-item">
            <Link to={`/createSport`} className="nav-link">Crear Deporte</Link>
          </li>
          <li className="nav-item">
            <Link to={`/sport`} className="nav-link">Deportes</Link>
          </li>
          <li className="nav-item">
            <Link to={`/createEvent`} className="nav-link">Crear Evento</Link>
          </li>
          <li className="nav-item">
            <Link to={`/event`} className="nav-link">Eventos</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  )
}
