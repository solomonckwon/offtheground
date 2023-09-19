import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">Off the Ground</a>
        <ul>
                <CustomLink to="/home">
                    <h3>Climbs</h3>
                </CustomLink>

                <CustomLink to="/profile">
                    <h3>Profile</h3>
                </CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }