

import useMediaQuery from "./mediaQueries";

export default function useBreakpoints () {
    const breakpoint = {
        isXs: useMediaQuery( "(max-width: 390px)" ),
        isSm: useMediaQuery( "(min-width: 391px) and (max-width: 576px)" ),
        isMd: useMediaQuery( "(min-width: 577px) and (max-width: 768px)" ),
        isLg: useMediaQuery( "(min-width: 769px) and (max-width: 992px)" ),
        isXl: useMediaQuery( "(min-width: 993px) and (max-width: 1200px)" ),
        isXxl: useMediaQuery( "(min-width: 1201px) and (max-width: 1400px)" ),
        isXxxl: useMediaQuery( "(min-width: 1401px)" ),
        active: "xs"
    };
    if ( breakpoint.isXs ) breakpoint.active = "xs";
    if ( breakpoint.isSm ) breakpoint.active = "sm";
    if ( breakpoint.isMd ) breakpoint.active = "md";
    if ( breakpoint.isLg ) breakpoint.active = "lg";
    if ( breakpoint.isXl ) breakpoint.active = "xl";
    if ( breakpoint.isXxl ) breakpoint.active = "xxl";
    if ( breakpoint.isXxxl ) breakpoint.active = "xxxl";
    return breakpoint;
}
