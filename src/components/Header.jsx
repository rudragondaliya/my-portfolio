import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <header>
       <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid p-3">
                <a className="navbar-brand text-white ms-5" href="#">RG</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto gap-5">
                    <a className="nav-link text-white active  " aria-current="page" href="#home">Home</a>
                    <a className="nav-link text-white " href="#about">About</a>
                    <a className="nav-link text-white " href="#project">Projects</a>
                    <a className="nav-link text-white " href='#contact' aria-disabled="true">Contact</a>
                    <a className="nav-link text-white " href='#skills' aria-disabled="true">Skills</a>
                </div>
                <div className="icon-nav me-5 d-flex align-items-center">
                    <FaStarOfLife  color='white' size={35}/>
                    <a href='/Rudra_Resume.pdf' download="Rudra_Resume.pdf" style={{textDecoration: "none"}} className=' btn btn-outline-light p-2 mx-3 '>Resume</a>
                </div>
                </div>
            </div>
            </nav>

      </header>
    </div>
  );
}

export default Header;
