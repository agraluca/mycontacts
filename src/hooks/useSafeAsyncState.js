import { useCallback, useState } from "react";

import useIsMounted from "./useIsMounted";

export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useIsMounted();

  const setSafeAsyncState = useCallback(
    (value) => {
      if (isMounted()) setState(value);
    },
    [isMounted]
  );

  return [state, setSafeAsyncState];
}
