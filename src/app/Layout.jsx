import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/about">About me</NavLink>
      </header>

      <main style={{ paddingTop: 2 }}>
        <Outlet />
      </main>
    </div>
  )
}
