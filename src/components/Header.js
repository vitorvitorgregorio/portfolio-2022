import logo from "../svg/logo.svg";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";

import "../styles/Header.sass";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Vitor Gregorio - Desenvolvedor Front-End" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Sobre
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Serviços
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Técnologias
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Projetos
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Contato
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

        <button className="hamburguer">
          <div className="bar bar__1"></div>
          <div className="bar bar__2"></div>
          <div className="bar bar__3"></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
