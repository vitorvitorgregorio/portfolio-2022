import '../styles/Carrer.sass'
function Carrer(){
    return(
        <section className="carrer">
            <div className="container">
                <h2 className="carrer__title">
                    Trajetória até aqui
                </h2>

                <div className="carrer__cards-container">
                    <article className="carrer__professional">
                        <h3 className="carrer__second-title">
                            Área Profissional
                        </h3>
                        <div className="carrer__cards">
                            <div className="carrer__card active">
                                <h4 className="carrer__role">
                                    Desenvolvedor Front-End
                                </h4>
                                <h5 className='carrer__company'>
                                    Prime Web
                                </h5>
                                <p className="carrer__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, blanditiis eaque reprehenderit dolor quidem unde sed doloribus doloremque accusamus quasi
                                </p>
                                <ul className="carrer__abilities">
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>PHP</li>
                                </ul>
                                <span className="carrer__year">maio/2022 · Atualmente</span>
                            </div>
                        </div>
                    </article>
                    <article className="carrer__academic">
                        <h3 className="carrer__second-title">
                            Área Acadêmica
                        </h3>
                    
                        <div className="carrer__cards">
                        <div className="carrer__card active">
                                <h4 className="carrer__role">
                                    Análise e desenvolvimento de sistemas
                                </h4>
                                <h5 className='carrer__company'>
                                    FMU
                                </h5>
                                <p className="carrer__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, blanditiis eaque reprehenderit dolor quidem unde sed doloribus doloremque accusamus quasi
                                </p>
                                <ul className="carrer__abilities">
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>PHP</li>
                                </ul>
                                <span className="carrer__year">Fevereiro/2022 · Atualmente</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Carrer