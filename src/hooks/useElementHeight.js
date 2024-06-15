import { useEffect, useState } from "react";

const useElementHeight = (ref) => {
  const [contentHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [ref]);
  return contentHeight;
};
export default useElementHeight;
