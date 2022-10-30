import {ReactComponent as Notebook} from '../svg/notebook.svg'
import {ReactComponent as BubbleG} from '../svg/bubbles/bubbleG.svg'
import {ReactComponent as BubbleM} from '../svg/bubbles/bubbleM.svg'
import {ReactComponent as BubbleP} from '../svg/bubbles/bubbleP.svg'

import '../styles/About.sass'

function About() {
    return (
        <section className="about">
            <div className="bubbles">
                <BubbleG className='bubble__1'/>
                <BubbleM className='bubble__2'/>
                <BubbleM className='bubble__3'/>
                <BubbleP className='bubble__4'/>
                <BubbleP className='bubble__5'/>
                <BubbleP className='bubble__6'/>
                <BubbleG className='bubble__7'/>
                <BubbleG className='bubble__8'/>
                <BubbleM className='bubble__9'/>
                <BubbleG className='bubble__10'/>
                <BubbleG className='bubble__11'/>
                <BubbleG className='bubble__12'/>
                <BubbleG className='bubble__13'/>
                <BubbleM className='bubble__14'/>
                <BubbleM className='bubble__15'/>

            </div>
            <div className="container">
                <article className="about__description">
                    <h2 className="about__title"> Quem sou </h2>
                    <p className="paragraph about__paragraph">Prazer, sou o Vitor Gregorio - Desenvolvedor Front-End que ama técnogia e apaixonado por CSS. Desenvolvo interfaces modernas e de alta qualidade com foco em performance, interatividade, responsividade e SEO</p>
                    <a href="#" className="about__button">Saiba mais sobre mim</a>
                </article>
                <article className="about__image">
                    <Notebook className='note'/>
                </article>
            </div>
        </section>
    )
};

export default About;