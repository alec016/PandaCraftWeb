import React from 'react'
import '../index.css'
import './css/home.scss'
import NavBar from './NavBar'
export default function Home(){
    document.title = "PandaCraft | Home"
    return(
        <div>
            <NavBar/>
            <section className='w100 color-white m-50-b'>
            <article className="h App-logow75 padding-5-l white-color">
                <p className='h-title w75'>
                    Información:
                </p>
                <div className="h-text">
                    <p className='w75 padding-5-l'>
                        ¡Bienvenidos a PandaCraft!
                    </p>
                    <p className='w75 padding-5-l'>
                        Un servidor de Minecraft muy especial, donde podrás disfrutar de varias modalidades con distintos ModPacks. Ya sea dentro de un mundo de Zombies con grandes ciudades donde sobrevivir es todo un reto, o entrar a un mundo de Magia y Fantasía donde tendrás que realizar misiones, matar a grandes jefes y crear tu propia aventura siendo un mago, vampiro, hombre lobo, etc. 
                    </p>
                    <p className='w75 padding-5-l'>
                        En nuestra tienda podrás encontrar los diferentes rangos disponibles de lo más útiles para comprar y disfrutar para mejorar tu experiencia dentro del servidor. 
                    </p>
                    <p className='w75 padding-5-l'>
                        Además, para no olvidar el trabajo del equipo que hay detrás, también tendréis la opción de hacer una donación de cualquier cantidad para ayudar a mejorar y a mantener este gran servidor.
                    </p>
                    <p className='w75 padding-5-l'>
                        Entra a jugar con nosotros y a disfrutar de tu experiencia.
                    </p>
                    <p className='w75 padding-5-l'>
                        No te pierdas lo que queda por llegar próximamente, por lo que te invito a nuestro Discord y a seguirnos en nuestras redes sociales para no perderte ninguna de nuestras novedades y poder ganar todo tipo de premios.
                    </p>
                    <p className='w75 padding-5-l'>
                        ¡Te esperamos!
                    </p>
                </div>
                </article>
                <article className="h w75 padding-5-l white-color padding-7-5-t">
                    <p className='h-title w75'> Modalidades activas:</p>
                    <div className='h-text'>
                        <p className='w75 padding-5-l'> Adventure</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

