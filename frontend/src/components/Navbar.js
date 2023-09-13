import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Off the Ground</h1>
                </Link>

                <Link to='/'>
                    <h2>Off the Ground</h2>
                </Link>
                
            </div>
        </header>
    )
}

export default Navbar