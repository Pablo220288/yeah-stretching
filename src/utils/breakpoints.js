

import useBreakpoints from "./useBreakpoints";


export const Breakpoints = ( { at, children } ) => {
    if ( !at ) {
        console.error( "<Breakpoint>: must specify a breakpoint for the `at` prop." );
    }
    const { active } = useBreakpoints();
    return active === at ? children : null;
}

