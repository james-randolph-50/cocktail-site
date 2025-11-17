import navLinks from '../../constants'

const Navbar = () => {
  return (
    <nav>
    <div>
        <a href="#home" className='flex items-center justify-between'>
            <div>
                <p>El Osito</p>
            </div>
        </a>

        <ul>
           {navLinks.map((item) => (
            <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
            </li>
           ))}
        </ul>
            </div>
        </nav>
    );
};

export default Navbar;