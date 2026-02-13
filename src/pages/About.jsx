import React from 'react';
import Header from '../components/estatics/Header';
import Footer from '../components/estatics/Footer';
import './styleAbout.css'; 
import barImage from '../assets/fitness.jpeg'; 

const About = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      {/* Aplicamos la clase 'nosotros-title' para los nuevos estilos */}
      <h1 className="nosotros-title">Nosotros</h1> 
      <div className="container">
        <div className="text-column">
        
          <p> <strong>¡Hola! Soy Verónica.</strong></p>
          <p>Si estás leyendo esto, probablemente compartimos algo: el deseo de sentirnos mejor, de tener más energía y de construir una versión más fuerte de nosotros mismos.</p>
          <p>Este espacio no es solo un sitio web. Es el resultado de años de aprendizaje, constancia y evolución personal en el mundo del fitness.</p>
          <p>Mi historia no empezó con un físico perfecto ni con disciplina absoluta. Empezó con una sensación: algo no estaba funcionando. Mi energía no era la que quería y mi cuerpo no reflejaba cómo deseaba sentirme. Durante la pandemia, cuando no podía entrenar como estaba acostumbrada, sentí frustración e incertidumbre. Pero también fue el momento en el que decidí hacerme responsable de mi proceso.</p>
          <p>Esa decisión me llevó a profundizar en entrenamiento, nutrición y autoconocimiento.</p>
          <p>El camino no fue lineal. Hubo desmotivación, estancamientos y ajustes constantes. Probé distintas disciplinas —spinning, entrenamiento funcional, trabajo de fuerza— siempre buscando entender cómo funciona el cuerpo y cómo optimizarlo de manera inteligente. Cada error fue aprendizaje. Cada avance, una confirmación de que con constancia y el enfoque correcto, el cambio es posible</p>
          <p>Con el tiempo, lo que empezó como una transformación personal se convirtió en vocación.</p>
          <p>Me formé en Entrenamiento Personal, Entrenamiento Funcional, Hipopresivos, Spinning y Stretching. Desde entonces, acompaño a personas de distintas edades y niveles a alcanzar sus objetivos de manera realista, sostenible y consciente.</p>
          <p>Mi compromiso es claro: no ofrezco atajos, sino procesos. Trabajo con un enfoque basado en evidencia, adaptado a cada persona y orientado no solo a transformar el cuerpo, sino también a fortalecer la mente.</p>
          <p>Porque el fitness no es solo estética. Es energía, disciplina, confianza y bienestar integral.</p>
          <p>Y si decidís empezar este camino, me encantaría acompañarte. 💪✨</p>
          <p className="signature">Así que, bienvenido/a. ¿Estás listo/a para empezar tu propia transformación?<br /></p>
        </div>
        <div className="image-column">
          {/* Asegúrate de que la clase de la imagen sea 'fitness-image' */}
          <img src={barImage} alt="Fitness" className="fitness-image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;