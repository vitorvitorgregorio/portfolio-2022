import javascript from "../svg/javascript.svg";
import react from "../svg/react.svg";
import html from "../svg/html.svg";
import css from "../svg/css.svg";
import sass from "../svg/sass.svg";
import "../styles/Main.sass";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">Desenvolvedor Front-End</h1>
        <section className="main__cards">
          <div className="main__card">
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              target="_blank"
            >
              <img src={javascript} alt="" />
            </a>
          </div>
          <div className="main__card">
            <a href="https://reactjs.org/" target="_blank">
              <img src={react} alt="" />
            </a>
          </div>
          <div className="main__card">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <img src={html} alt="" />
            </a>
          </div>
          <div className="main__card">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/css"
              target="_blank"
            >
              <img src={css} alt="" />
            </a>
          </div>
          <div className="main__card">
            <a 
              href="https://sass-lang.com/documentation/" 
              target="_blank"
            >
              <img src={sass} alt="" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
