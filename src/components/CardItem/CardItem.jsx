import { Link } from 'react-router-dom';
import { Button } from '../Button';

export const CardItem = ( { servicio } ) => {
    const { title, pills, imgUrl, altTxt } = servicio;

    return (
        <div className="card-container">
            <div className="card-container__image">
                <img className="card" src={imgUrl} alt={altTxt} />
            </div>
            <div className="card-servicios mb-1">
                <h3>{title}</h3>
                <div className="servicios-pill__container">
                    {pills.map( ( pill, index ) => (
                        <p key={index} className="servicios-pill">
                            {pill}
                        </p>
                    ) )}
                </div>
            </div>
            <Link to='/service' className="btn-primary__card mt-2">
                más info &gt;
            </Link>
        </div>
    );
};
