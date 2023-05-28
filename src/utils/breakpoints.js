

import useBreakpoints from "./useBreakpoints";


export const breakpoints = ( { at, children } ) => {
    if ( !at ) {
        console.error( "<Breakpoints>: must specify a breakpoints for the `at` prop." );
    }
    const { active } = useBreakpoints();
    return active === at ? children : null;
}

