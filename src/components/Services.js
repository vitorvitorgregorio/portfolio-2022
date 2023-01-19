import frontEnd from "../svg/front-end.svg";
import ui from "../svg/ui.svg";
import development from "../svg/development.svg";
import responsive from "../svg/responsive.svg";
import "../styles/Services.sass";

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <article className="services__description">
          <h2 className="services__title">O que eu faço</h2>
          <p className="paragraph services__paragraph">
          Investigação detalhada, design intuitivo e desenvolvimento de alta qualidade  permitem responder a todas as solicitações do cliente e criar produtos sob demanda.
          </p>
        </article>
        <article className="services__cards">
          <div className="services__card">
            <img src={frontEnd} alt="" />
            <h3 className="services__card-title">Front-End</h3>
            <p>Concepção e implementação de interfaces web modernas.</p>
          </div>
          <div className="services__card">
            <img src={ui} alt="" />
            <h3 className="services__card-title">Ui Design</h3>
            <p>Criação e prototipação de interfaces intuitivas.</p>
          </div>
          <div className="services__card">
            <img src={development} alt="" />
            <h3 className="services__card-title">Desenvolvimento</h3>
            <p>
              Desenvolvimento de sites profissionais, portfólios e landing
              pages.
            </p>
          </div>
          <div className="services__card">
            <img src={responsive} alt="" />
            <h3 className="services__card-title">Responsividade</h3>
            <p>
              Desenvolvimento de interfaces responsivas que se adaptam a todos
              os tipos de telas.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
