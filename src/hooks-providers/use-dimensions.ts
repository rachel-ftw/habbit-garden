import { useState } from "react";
import { Types } from "./provider.dimensions";
import useWindowSize from "./use-window-size";

const useDimensions = () => {
  const [viewSize, setViewSize] = useState<Types>(Types.computer);
  const [width, height] = useWindowSize();

  if (width > 1024 && viewSize !== Types.computer) {
    setViewSize(Types.computer);
  }

  if (width < 1024 && width > 768 && viewSize !== Types.tablet) {
    setViewSize(Types.tablet);
  }

  if (width < 768 && viewSize !== Types.phone) {
    setViewSize(Types.phone);
  }

  return { viewType: viewSize, width, height };
};

export default useDimensions;
