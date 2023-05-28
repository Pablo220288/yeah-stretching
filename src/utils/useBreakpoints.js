

import useMediaQuery from "./mediaQueries";

export default function useBreakpoints () {
    const breakpoints = {
        isXs: useMediaQuery( "(max-width: 390px)" ),
        isSm: useMediaQuery( "(min-width: 391px) and (max-width: 576px)" ),
        isMd: useMediaQuery( "(min-width: 577px) and (max-width: 768px)" ),
        isLg: useMediaQuery( "(min-width: 769px) and (max-width: 992px)" ),
        isXl: useMediaQuery( "(min-width: 993px) and (max-width: 1200px)" ),
        isXxl: useMediaQuery( "(min-width: 1201px) and (max-width: 1400px)" ),
        isXxxl: useMediaQuery( "(min-width: 1401px)" ),
        active: "xs"
    };
    if ( breakpoints.isXs ) breakpoints.active = "xs";
    if ( breakpoints.isSm ) breakpoints.active = "sm";
    if ( breakpoints.isMd ) breakpoints.active = "md";
    if ( breakpoints.isLg ) breakpoints.active = "lg";
    if ( breakpoints.isXl ) breakpoints.active = "xl";
    if ( breakpoints.isXxl ) breakpoints.active = "xxl";
    if ( breakpoints.isXxxl ) breakpoints.active = "xxxl";
    return breakpoints;
}
