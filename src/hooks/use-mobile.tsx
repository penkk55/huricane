// import * as React from 'react';
// const MOBILE_BREAKPOINT = 768;

// export function useIsMobile() {
//   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
//     undefined
//   );

//   React.useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
//     const onChange = () => {
//       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
//     };
//     mql.addEventListener('change', onChange);
//     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
//     console.log('window.innerWidth', window.innerWidth);

//     return () => mql.removeEventListener('change', onChange);
//   }, []);

//   return !!isMobile;
// }

import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const updateIsMobile = () => {
      const viewportWidth = document.documentElement.clientWidth;
      console.log('viewportWidth,viewportWidth', viewportWidth);

      setIsMobile(viewportWidth < MOBILE_BREAKPOINT);
    };

    updateIsMobile(); // Set initial value
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return !!isMobile;
}
