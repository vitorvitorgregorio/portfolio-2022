import logo from "../svg/logo.svg";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import "../styles/Header.sass";
import { useState } from "react";

function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <header className="header">
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="container">
          <img src={logo} alt="Vitor Gregorio - Desenvolvedor Front-End" />

          <nav className="header__nav">
            <ul className="header__list">
              
              <li className="header__item">
                <a href="#sobre" className="header__link">
                  Sobre
                </a>
              </li>
              <li className="header__item">
                <a href="#servicos" className="header__link">
                  Serviços
                </a>
              </li>
              <li className="header__item">
                <a href="#tecnologias" className="header__link">
                  Técnologias
                </a>
              </li>
              <li className="header__item">
                <a href="#projetos" className="header__link">
                  Projetos
                </a>
              </li>
              
            </ul>
          </nav>
          

          <nav className="header__icons">
            <a
              className="header__icons-link"
              href="https://github.com/vitorvitorgregorio"
              target="_blank"
            >
              <Github className="github" />
            </a>
            <a
              className="header__icons-link"
              href="https://www.linkedin.com/in/vitor-gregorio/"
              target="_blank"
            >
              <Linkedin className="linkedin" />
            </a>
          </nav>
          <div
            className={active ? "icon iconActive" : "icon"}
            onClick={ToggleMode}
          >
            <div className="hamburguer hamburguerIcon">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
            </div>
          </div>
        </div>
        <nav className="header__nav-mobile">
            <ul className="header__list-mobile">
              
              <li className="header__item">
                <a href="#sobre" className="header__link" onClick={ToggleMode}>
                  Sobre
                </a>
              </li>
              <li className="header__item">
                <a href="#servicos" className="header__link" onClick={ToggleMode}>
                  Serviços
                </a>
              </li>
              <li className="header__item">
                <a href="#tecnologias" className="header__link" onClick={ToggleMode}>
                  Técnologias
                </a>
              </li>
              <li className="header__item">
                <a href="#projetos" className="header__link" onClick={ToggleMode}>
                  Projetos
                </a>
              </li>
              
            </ul>
          </nav>
      </div>
    </header>
  );
}

export default Header;
