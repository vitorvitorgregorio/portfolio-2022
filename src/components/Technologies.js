import javascript from "../svg/javascript.svg";
import react from "../svg/react.svg";
import html from "../svg/html.svg";
import css from "../svg/css.svg";
import sass from "../svg/sass.svg";
import figma from "../svg/figma.svg";
import "../styles/Technologies.sass";

function Technologies() {
  return (
    <section className="technologies" id="tecnologias">
      <div className="container">
        <div className="technologies__description">
          <h2 className="technologies__title">Técnologias</h2>
          <p className="technologies__paragraph">Técnologias que atualmente eu estudo e utilizo para desenvolver todos os sites. </p>
        </div>
        <article className="technologies__cards">
          <div className="technologies__card">
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              target="_blank"
            >
              <img src={javascript} alt="" />
            </a>
          </div>
          <div className="technologies__card">
            <a href="https://reactjs.org/" target="_blank">
              <img src={react} alt="" />
            </a>
          </div>
          <div className="technologies__card">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <img src={html} alt="" />
            </a>
          </div>
          <div className="technologies__card">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/css"
              target="_blank"
            >
              <img src={css} alt="" />
            </a>
          </div>
          <div className="technologies__card">
            <a 
              href="https://sass-lang.com/documentation/" 
              target="_blank"
            >
              <img src={sass} alt="" />
            </a>
          </div>
          <div className="technologies__card">
            <a 
              href="https://www.figma.com/best-practices/guide-to-developer-handoff/components-styles-and-documentation/" 
              target="_blank"
            >
              <img src={figma} alt="" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Technologies;
