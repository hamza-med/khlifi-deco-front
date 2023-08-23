import { useState } from "react";

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);
  const onOpen = () => setState(true);
  const onClose = () => setState(false);
  return [state, onOpen, onClose];
};
export default useToggle;
