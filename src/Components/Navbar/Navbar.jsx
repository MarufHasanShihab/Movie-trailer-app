import "./Navbar.css"
import navLogo from "../../assets/logo.png"
import searchIcon from "../../assets/search_icon.svg"
import bellIcon from "../../assets/bell_icon.svg"
import profileImg from "../../assets/profile_img.png"
import createIcon from "../../assets/caret_icon.svg"
import { useEffect, useRef } from "react"
import { logOut } from "../../firebase/firebase"

const Navbar = () => {
    const navRef = useRef();
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add("nav-dark")
            }else{
                navRef.current.classList.remove("nav-dark")
            }
        })
    },[])
    return (
        <div className="navbar" ref={navRef}>
            {/* navbar left */}
            <div className="navbar-left">
                <img src={navLogo} alt="nav_logo" className="nav-logo" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Brows by Language</li>
                </ul>
            </div>
            {/* navbar right */}
            <div className="navbar-right">
                <img src={searchIcon} className="icons"/>
                <p>Children</p>
                <img src={bellIcon} alt="beel_icon" className="icons" />
                <div className="nav-profile">
                    <img src={profileImg} className="profile" />
                    <img src={createIcon}  />
                    <div className="dropdown">
                        <p onClick={logOut}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;