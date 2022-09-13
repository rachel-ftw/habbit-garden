import { useState } from "react";
import { Status } from "../utils/status";

const useFetch = () => {
  const [status, setStatus] = useState<any>(Status.Init);

  const fetchData = async (fnName: string, cb: any) => {
    try {
      const response = await fetch(`.netlify/functions/${fnName}`);
      const json = await response.json();

      cb(json);
    } catch (e) {
      console.error(e);
    }
  };

  return { fetchData, status, setStatus };
};

export default useFetch;
