import { Link } from 'react-router-dom'
import { GiHamburgerMenu }  from "react-icons/gi"
import { data } from "./restApi.json"
import { useState } from 'react'

const Navbar = () => {
    const [show , setShow ] = useState(false)
  return (
    <nav>
    <div className="logo">F00DiE</div>
    <div className={show ? "navLinks showmenu" : "navLinks"}>
      <div className="links">
        {data[0].navbarLinks.map((element) => (
          <Link
            to={element.link}
            spy={true}
            smooth={true}
            duration={500}
            key={element.id}
          >
            {element.title}
          </Link>
        ))}
      </div>
      <button className="menuBtn">OUR MENU</button>
    </div>
    <div className="hamburger" onClick={()=> setShow(!show)}>
            <GiHamburgerMenu/>
    </div>
  </nav>
  )
}

export default Navbar