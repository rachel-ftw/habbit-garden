import { useState } from "react";
import { Status } from "../utils/status";

const useFetch = () => {
  const [status, setStatus] = useState<any>(Status.Init);

  const fetchData = async (fnName: string, cb: any) => {
    setStatus(Status.Loading);
    try {
      const response = await fetch(`.netlify/functions/${fnName}`);
      const json = await response.json();

      cb(json);
      setStatus(Status.Loaded);
    } catch (e) {
      console.error(e);
      setStatus(Status.Error);
    }
  };

  return { fetchData, status, setStatus };
};

export default useFetch;
