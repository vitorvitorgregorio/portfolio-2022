import anna from "../images/anna.gif";
import lucas from "../images/lucas.gif";
import officina from "../images/officina.gif";
import studio from "../images/studio.gif";
import '../styles/projects.sass'
import {ReactComponent as Link} from  '../svg/link.svg'

function Projects() {
  return (
    <section className="projects" id="projetos">
        
      <div className="container">
      <h2 className="project__title"> Meus Projetos </h2>
        <div className="projects__cards">
          <div className="project__card">
            <img src={anna} />
            <a href="https://photosannaaraujo.com/" target="_blank">photosannaaraujo.com <Link /> </a>
          </div>
          <div className="project__card">
            <img src={lucas} />
            <a href="https://lucas-gregorio.netlify.app/" target="_blank">lucasgregorio.com <Link /> </a>
            </div>
          <div className="project__card">
            <img src={studio} />
            <a href="https://studionataliacosta.com.br/" target="_blank">studionataliacosta.com.br <Link /> </a>
            </div>
          <div className="project__card">
            <img src={officina} />
            <a href="https://officinadoacrilico.com.br/" target="_blank">officinadoacrilico.com.br <Link /> </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
