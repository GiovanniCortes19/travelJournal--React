import worldIcon from './world-icon.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={worldIcon} alt='world-icon-img' className='world-icon' />
            <h1>my travel journal</h1>
        </nav>
    )
}