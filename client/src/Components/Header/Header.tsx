import  { useState } from "react";
import "./Header.css";
import { useAuth } from "../../context/Auth";
import AvatarMenu from "../AvatarMenu";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../App";
import { FaCarCrash } from "react-icons/fa";

function Header() {

  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
      setShowSearch(!showSearch);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${query}`);
    setQuery("");
  }

  const { isAuthenticated }  = useAuth();
  const { handleToast } = useAppContext();

  return (
    <div>
      <header className="header pb-5">
        <div className="logo-name">
            <a href="/home" className="companyLogo" >
             <h3  className="headingLogo" >  CMS </h3> 
             <FaCarCrash size={50} className="carLogo" />
             </a>
        </div>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          {showSearch ? (
            <li className="search-input">
                <input 
                 type="text" 
                 placeholder="Search..."
                 onChange={(event) => setQuery(event.target.value)}
                 onKeyDown={(event) => {
                  if (event.key === 'Enter') {

                      if(query.length > 0)
                        handleSearch();

                      else 
                        handleToast("Please Enter something in Search Field");
                  }
                 }}
                 value={query} 
                />
                <button onClick={toggleSearch}><i className="fa-regular fa-circle-xmark"></i></button>                
            </li>
          ):(
            <li className="nav-link">
                <a href="#" onClick={toggleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </a>
            </li>
          )}


          <li className="nav-link">
            <a href="/home"><i className="fa-solid fa-house"></i> Home</a>
          </li>

          <li className="nav-link">
            <a href="/sell"><i className="fa-solid fa-plus"></i> Add Cars</a>
          </li>


          <li className="nav-link">
            <a href="/view"><i className="fa-regular fa-eye"></i> View Your Cars </a>
          </li>     

          {isAuthenticated ? (
            <li>
              <AvatarMenu />
            </li>
          ) : (
            <li className="nav-link"><a href="/auth/signup"><i className="fa-solid fa-right-to-bracket"></i> login/singup</a></li>
          )}
         
        </ul>
      </header>
      
    </div>
  );
}

export default Header;

