import Button from "@material-ui/core/Button";
import React from 'react';
import Card from "../../../containers/carousel/Card";
import './favorites.scss'
import { favorites } from "../../../data";



class Favorites extends React.Component {
    status = { isLogin: true }
    render() {
        let content

        if (this.status.isLogin) {
            content = (
              <div className="movies-deck">
                {favorites.map((favorite, index) => {
                  return <Card key={index} {...favorite} />;
                })}
              </div>
            );
        }
        else {
            content = <div className='loggedOut'>
                <div>
                    <h6>Parece que todavía no has iniciado sesión</h6>
                    <p className='body-1'>Crea tu cuenta para guardar las películas que quieres ver</p>
                </div>
                <div className='buttons'>
                    <Button className="signup" variant="outlined" color="secondary">
                        Crear cuenta
                    </Button>
                    <Button className="login" variant="contained" color="primary">
                        Iniciar sesión
                    </Button>
                </div>
                
            </div>
        }

        return (
            <section className="favorite-list">
                <h5>Tu lista de favoritos</h5>
                {content}
            </section>
        )
    }
}

export default Favorites;
