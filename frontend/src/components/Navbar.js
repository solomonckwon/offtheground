import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1 style={{color:'white'}}>Off the Ground</h1>
                </Link>

                <Link to='/home'>
                    <h2>Climbs</h2>
                </Link>

                <Link to='/profile'>
                    <h2>Climbs2</h2>
                </Link>
                
            </div>
        </header>
    )
}

export default Navbar