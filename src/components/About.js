import {ReactComponent as Notebook} from '../svg/notebook.svg'
import bubbleG from '../svg/bubbles/bubbleG.svg'
import bubbleM from '../svg/bubbles/bubbleM.svg'
import bubbleP from '../svg/bubbles/bubbleP.svg'
import '../styles/About.sass'

function About() {
    return (
        <section className="about">
            <div className="bubbles">
                <img src={bubbleG} alt="" />
                <img src={bubbleM} alt="" />
                <img src={bubbleP} alt="" />
            </div>
            <div className="container">
                <article className="about__description">
                    <h2 className="about__title"> Quem sou </h2>
                    <p className="paragraph about__paragraph">Prazer, sou o Vitor Gregorio - Desenvolvedor Front-End que ama técnogia e apaixonado por CSS. Desenvolvo interfaces modernas e de alta qualidade com foco em performance, interatividade, responsividade e SEO</p>
                    <a href="#" className="about__button">Saiba mais sobre mim</a>
                </article>
                <article className="about__image">
                    <Notebook />
                </article>
            </div>
        </section>
    )
};

export default About;