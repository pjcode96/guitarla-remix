import image from '../../public/img/nosotros.jpg'
import styles from '../styles/about.css'

export function links() {
    return (
        [
            {
                rel: 'stylesheet',
                href: styles
            },
            {
                rel: 'preload',
                href: image,
                as: 'image'
            }
        ]
    )
}

function About() {
    return (
        <main className='about container'>
            <h2 className="heading">Nosotros</h2>
            <div className="content">
                <img src={image} alt="Imagen nosotros" />

                <div>
                    <p>
                        En GuitarLA, nuestra pasión es tu música. Como amantes de las guitarras, estamos dedicados a ayudarte a encontrar el instrumento perfecto. Ya sea que estés dando tus primeros acordes o eres un profesional experimentado, nuestra selección cuidadosamente elegida y nuestro conocimiento profundo están aquí para elevar tu música al siguiente nivel.
                    </p>

                    <p>
                        Únete a nosotros en GuitarLA y explora un universo de sonidos y posibilidades musicales.
                    </p>

                </div>
            </div>
        </main>
    )
}

export default About