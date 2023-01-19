import "../styles/Footer.sass";
import bat from "../images/bat.png";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import logo from "../svg/logo.svg";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__flex">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          
          <div className="footer__social">
            <ul>
              <li>
                <a
                  className="footer__icons-link"
                  href="https://www.linkedin.com/in/vitor-gregorio/"
                  target="_blank"
                >
                  <Instagram className="instagram" />
                </a>
              </li>
              <li>
                <a
                  className="footer__icons-link"
                  href="https://github.com/vitorvitorgregorio"
                  target="_blank"
                >
                  <Github className="github" />
                </a>
              </li>
              <li>
                <a
                  className="footer__icons-link"
                  href="https://www.linkedin.com/in/vitor-gregorio/"
                  target="_blank"
                >
                  <Linkedin className="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copy">
          <p>
            Desenvolvido por Vitor Gregorio <img src={bat} alt="" /> <span>
               &copy;
              Alguns direitos reservados
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
