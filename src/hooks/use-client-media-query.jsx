import * as React from 'react';

export function useClientMediaQuery(query) {
  const [matches, setMatches] = React.useState(null);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMatchChange = (e) => {
      setMatches(e.matches);
    };

    mediaQueryList.addEventListener('change', handleMatchChange);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return matches;
}
