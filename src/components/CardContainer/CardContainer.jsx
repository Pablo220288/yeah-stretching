

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
