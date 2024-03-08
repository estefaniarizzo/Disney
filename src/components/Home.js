import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar';
import ContentCategory from './ContentCategory'; 
import marvelsImage from '../assets/marvels.jpg'; 
import lokiImage from '../assets/loki.jpeg';
import ballenaImage from '../assets/ballena.jpeg';
import liloImage from '../assets/lilo.jpeg';
import musicaImage from '../assets/musica.jpg';

const Home = () => {
  // Datos de ejemplo 
  const categories = [
    { id: 1, title: 'Películas', imageUrl: marvelsImage }, 
    { id: 2, title: 'Series', imageUrl: lokiImage },
    { id: 3, title: 'Documentales', imageUrl: ballenaImage },
    { id: 4, title: 'Infantil', imageUrl: liloImage },
    { id: 5, title: 'Músical', imageUrl: musicaImage },
  ];

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <Navbar />
      <div>
        <h2 className='h2-home'>Bienvenido</h2>
        <div className="categories">
          {categories.map(category => (
            <div key={category.id} className="category-card" onClick={() => setSelectedCategory(category.title)}>
              <img src={category.imageUrl} alt={category.title} />
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Mostrar el contenido relacionado con la categoría seleccionada */}
      {selectedCategory && <ContentCategory selectedCategory={selectedCategory} />}
    </>
  );
};

export default Home;

