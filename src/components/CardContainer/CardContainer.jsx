

import { CardItem } from '../CardItem/CardItem';

export const CardContainer = ( { global } ) => {
    const servicios = Array.isArray( global.servicios ) ? global.servicios : [];

    return (
        <div className="cards-container">
            {servicios.map( ( servicio, index ) => (
                <CardItem key={index} servicio={{ id: index, ...servicio }} />
            ) )}
        </div>
    );
};


// export const Card = ( { cardInformation } ) => {
//     return (
//         <div className='card-container'>
//             <div className='card-container__image'>
//                 <img
//                     className='card'
//                     src="../../src/assets/img/1-Pilates Mat.jpg"
//                     alt="Imagen de clases de Pilates" />

//             </div>
//             <div className='card-servicios mb-1'>
//                 <h3>Pilates Mat</h3>
//                 <div className='servicios-pill__container'>
//                     <p className='servicios-pill'>Flexibilidad</p>
//                     <p className='servicios-pill'>Respiración</p>
//                     <p className='servicios-pill'>Control</p>
//                     <p className='servicios-pill'>Fuerza</p >
//                 </div>
//             </div >
//             <Button
//                 className='btn-primary mt-2'
//             >más info &gt;
//             </Button>
//         </div >
//     )
// }
