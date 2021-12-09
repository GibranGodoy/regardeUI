import React from 'react';
import "./modal.scss";
import image from '../../../css/assets/img/image.jpg';

const Modal = () => {
    return (
        <div>
            <div className="modal">
                <div className="modal-wrapper">
                    <div className="modal-image">
                            <img src={ image } alt="image" />
                        </div>
                    <div className="modal-content">
                        <h5>Kimetsu no Yaiba Movie: Mugen Ressha-hen</h5>
                        <hr />
                        <div className="content-info">
                            <div className="pub-dir-rep">
                                <span className="elements-name">
                                    Publicada
                                    <p>2020</p>
                                </span>
                                <span className="elements-name">
                                    Director(es)
                                    <p>Haruo Sotozaki</p>
                                </span>
                                <span className="elements-name">
                                    Reparto
                                    <p>Natsuki Hanae Akari Kitó</p>
                                    <p></p>
                                </span>
                            </div>
                            <div className="gen-sin">
                                <span className="elements-name">
                                    Géneros
                                    <p>
                                        Fantasía, Acción, Aventura
                                    </p>
                                </span>
                                <span className="elements-name">
                                    Sinópsis
                                    <p>
                                        Después de que una serie de misteiorsas desapariciones cominecen  
                                        a solar un tren, los múltiples intentos del Cuerpo de Cazadores de 
                                        Demonios por remediar...
                                    </p>
                                </span>
                            </div>
                            
                        </div>
                        <button className="show-more">
                            Ver más
                        </button>
                        <hr />
                        <span class="calification">
                            Calificación
                        </span>
                        <span class="calification-number">
                            8.72
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal;