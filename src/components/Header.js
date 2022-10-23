import logo from "../svg/logo.svg";
import {ReactComponent as Github} from "../svg/github.svg";
import {ReactComponent as Linkedin} from "../svg/linkedin.svg";

import '../styles/Header.sass'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Vitor Gregorio - Desenvolvedor Front-End" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="" className="header__link">
                HOME
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                SOBRE
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                SERVIÇOS
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                TÉCNOLOGIAS
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                PROJETOS
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                CONTATO
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
      </div>
    </header>
  );
}

export default Header;
