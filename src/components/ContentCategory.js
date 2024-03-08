import React, { useState } from 'react';
import './ContentCategory.css';
import ContentDetails from './ContentDetails'; // Importa el componente ContentDetails
import marvelsImage from '../assets/marvels.jpg'; 
import lokiImage from '../assets/loki.jpeg';
import ballenaImage from '../assets/ballena.jpeg';
import liloImage from '../assets/lilo.jpeg';
import musicaImage from '../assets/musica.jpg';
import wishImage from '../assets/wish.jpeg';
import cocoImage from '../assets/coco.jpeg';
import avengersImage from '../assets/avengers4.jpeg';
import msmarvelImage from '../assets/msmarvel.jpeg';
import moonImage from '../assets/moon.jpg';
import ladybugImage from '../assets/ladybug.jpg';
import mariposaImage from '../assets/mariposa.jpeg';
import storyImage from '../assets/story.jpg';
import bambiImage from '../assets/bambi.jpeg';
import gatosImage from '../assets/aristogatos.jpeg';
import hsmImage from '../assets/hsm.jpg';
import encantoImage from '../assets/encanto.jpeg';
const ContentCategory = ({ selectedCategory }) => {
    // Datos de ejemplo de contenido relacionado a cada categoría
    const contentByCategory = {
      'Películas': [
        { id: 1, title: 'The Marvels', imageUrl: marvelsImage, summary: 'La guerra civil de los kree provoca una alteración en el espacio-tiempo. La Capitana Marvel va a investigar qué ha sucedido, pero la alteración cuántica hace que sus poderes se entremezclen con los de otras dos superheroínas.', videoUrl: 'https://www.youtube.com/embed/itm8efx8k8U', type:'video' },
        { id: 2, title: 'Wish', imageUrl: wishImage, summary:'Mediante la fuerza energética de un deseo, una joven Asha invoca la magia de las estrellas para intentar salvar su reino del malvado Magnífico.',videoUrl: 'https://youtube.com/embed/fdLg09p4s6w', type:'video'},
        { id: 3, title: 'Coco', imageUrl: cocoImage, summary:'Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó, y quieren obligar a Miguel a ser zapatero, como todos los miembros de la familia. Por accidente, Miguel entra en la Tierra de los Muertos',  videoUrl: 'https://www.youtube.com/embed/awzWdtCezDo', type:'video'},
        { id: 4, title: 'Avengers 4', imageUrl: avengersImage, summary:'Después de los eventos devastadores de "Avengers: Infinity War", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas', videoUrl: 'https://www.youtube.com/embed/Oy_SER6dfK4', type:'video' },
      ],
      'Series': [
        { id: 1, title: 'Loki', imageUrl: lokiImage, summary:'Loki el Dios del Engaño de Marvel y que retoma su historia justo después de cuando éste se hace con el Teseracto en Vengadores: Endgame', videoUrl: 'https://www.youtube.com/embed/KcBStos46EM', type:'video' },
        { id: 2, title: 'Ms Marvel', imageUrl: msmarvelImage, summary:'Kamala Khan, una fan de 16 años de los Vengadores, que lucha por encajar hasta que obtiene sus propios poderes.', videoUrl: 'https://www.youtube.com/embed/hJUVWZNwkFk', type:'video'},
        { id: 3, title: 'Moon Knight', imageUrl: moonImage, summary:'Un trabajador de un museo que lucha contra un trastorno de identidad disociativo, recibe los poderes de un dios egipcio de la luna. Pronto descubre que estos poderes pueden ser tanto una bendición como una maldición.', videoUrl: 'https://www.youtube.com/embed/4QIbLY2ZOAU', type:'video' },
        { id: 4, title: 'Miraculous', imageUrl: ladybugImage, summary:'Una antigua leyenda habla de misteriosas piezas de joyería con poderes mágicos: los prodigios. Marinette y Adrien, dos niños de lo más normales, no tienen idea, pero pronto la seguridad y el bienestar de la ciudad estarán en sus manos. Como Ladybug y Cat Noir, luchan contra el mal y el supervillano Lepidóptero.', videoUrl: 'https://www.youtube.com/embed/WpM5BDRRlJg', type:'video' },
      ],
      'Documentales': [
        { id: 1, title: 'Documental sobre ballenas', imageUrl: ballenaImage, summary:'Los secretos de las ballenas sumergirá a los espectadores en el epicentro de la cultura de las ballenas para que conozcan la extraordinaria capacidad de comunicación y las intrincadas estructuras sociales de cinco especies de ballenas diferentess', videoUrl: 'https://www.youtube.com/embed/zWD_iokIcKA', type:'video' },
        { id: 2, title: 'Alas de vida', imageUrl: mariposaImage, summary:'Una nueva e íntima mirada al mundo de los colibrís, murciélagos, mariposas, flores y abejas. Una celebración de la vida de los responsables de un tercio de nuestros alimentos.', videoUrl: 'https://www.youtube.com/embed/J6r8BNnEDRk', type:'video' },
        { id: 3, title: 'La historia de la imaginacion', imageUrl: storyImage, summary:'Durante casi setenta años, un conjunto único de artistas e ingenieros han cultivado una noción imposible surgida de la mente de un hombre, Walt Disney, para convertirla en un fenómeno global que llega a millones de corazones. Estos diseñadores se llaman imagineers.', videoUrl: 'https://www.youtube.com/embed/oingmQTEdZk', type:'video' },
      ],
      'Infantil': [
        { id: 1, title: 'Lilo y Stitch', imageUrl: liloImage, summary:'Lilo es una niña hawaiana solitaria que adopta a un perro que en realidad es un extraterrestre travieso que se esconde de unos cazadores intergalácticos.', videoUrl: 'https://www.youtube.com/embed/5rJU6N7vNAQ', type:'video' },
        { id: 2, title: 'Bambi', imageUrl: bambiImage, summary:'Un joven ciervo llamado Bambi descubre los valores de la vida en su camino hacia la edad adulta. Lo acompañarán sus nuevos amigos, Tambor, el conejo juguetón; Flor, la tímida y adorable mofeta; y su sabio amigo el Búho.', videoUrl: 'https://www.youtube.com/embed/bUHVXp3coDI', type:'video' },
        { id: 3, title: 'Aristogatos', imageUrl: gatosImage, summary:'En París una anciana millonaria lleva una vida feliz con sus gatos en su mansión, con la única ayuda de su fiel mayordomo Edgar. Allí, Duquesa vive despreocupadamente con sus tres cachorros, sin saber que Edgar planea acabar con todos los gatos.', videoUrl: 'https://www.youtube.com/embed/sBSpb2w2raw', type:'video' },
      ],
      'Músical': [
        { id: 1, title: 'Coco el Musical', imageUrl: musicaImage, summary:'Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó, y quieren obligar a Miguel a ser zapatero, como todos los miembros de la familia. Por accidente, Miguel entra en la Tierra de los Muertos', videoUrl: 'https://www.youtube.com/embed/awzWdtCezDo', type:'video' },
        { id: 2, title: 'High School Musical', imageUrl: hsmImage, summary:'Troy y Gabriela se conocen en un karaoke durante las vacaciones. Troy es una estrella de baloncesto, y Gabriela es la nueva estudiante. Al volver al colegio, se presentan al casting para el musical de la escuela, pero deben superar varios obstáculos.', videoUrl: 'https://www.youtube.com/embed/TsAsEC1kLUI', type:'video' },
        { id: 3, title: 'Encanto', imageUrl: encantoImage, summary:'Mirabel se convierte en la última esperanza para su familia cuando descubre que la magia de Encanto, un lugar especial que bendice a los niños y hogar de los Madrigal, corre un serio peligro.', videoUrl: 'https://www.youtube.com/embed/E4dCY_DvT-4', type:'video' },
      ],
    };
  // Estado para almacenar el contenido seleccionado para mostrar los detalles
  const [selectedContent, setSelectedContent] = useState(null);

  // Manejar clic en un elemento de contenido para mostrar los detalles
  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="content-category">
      <h2 className="category-title">{selectedCategory}</h2>
      <div className="content-list">
        {contentByCategory[selectedCategory]?.map(item => (
          <div key={item.id} className="content-item" onClick={() => handleContentClick(item)}>
            <img src={item.imageUrl} alt={item.title} />
            <h3 className="content-title">{item.title}</h3>
          </div>
        ))}
      </div>
      {/* Mostrar los detalles del contenido seleccionado */}
      {selectedContent && <ContentDetails selectedContent={selectedContent} />}
    </div>
  );
};

export default ContentCategory;
