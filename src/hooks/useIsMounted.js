import { useCallback, useEffect, useRef } from "react";

export default function useIsMounted() {
  const isMounted = useRef(false);

  const getIsMounted = useCallback(() => {
    return isMounted.current;
  }, []);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return getIsMounted;
}
