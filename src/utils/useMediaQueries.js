

import { useEffect, useState } from "react";


export const useMediaQueries = ( query ) => {

    const [ matches, setMatches ] = useState( false );

    useEffect(
        () => {
            const mediaQuery = window.matchMedia( query );
            setMatches( mediaQuery.matches );

            const handler = ( event ) => setMatches( event.matches );

            mediaQuery.addEventListener( "change", handler );

            return () => mediaQuery.removeEventListener( "change", handler );

        },

        [ query ]
    );

    return matches;

};
