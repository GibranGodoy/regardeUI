import React from 'react'
import './footer.scss'
import repo from '../../../css/assets/img/repo.svg'
import bedu from '../../../css/assets/img/bedu.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='info'>
                <div className='team'>
                    <h6>Equipo 8</h6>
                    <p className="body-1">Karla Flores Valona</p>
                    <p className="body-1">Jorge Alberto Gomez Gomez</p>
                    <p className="body-1">Jessica Astrid Ortega Murillo</p>
                    <p className="body-1">Martha Rachell Gozcon Domínguez</p>
                    <p className="body-1">Brian Gibran Godoy Lomelí</p>
                </div>
                <div className='repo'>
                    <h6>Repositorio</h6>
                    <a href="https://github.com/GibranGodoy/regardeUI">
                        <img alt="Enlace al repositorio de Regarde en GitHub" src={repo}></img>
                    </a>
                </div>
            </div>
            <div className='bedu-logo'>
                <a href='https://bedu.org/'>
                    <img alt='Enlace a la página oficial de Bedu' src={bedu}></img>
                </a>
            </div>
            <p className="body-2 copyright">© 2021 Regarde. Equipo 8. Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer