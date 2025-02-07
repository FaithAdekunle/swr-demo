import useSWR from "swr";
import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import fetcher from "./fetcher";
import WithUseSwr from "./WithUseSwr";
import WithUseEffect from "./WithUseEffect";

const url = "https://counter10.p.rapidapi.com";

const Demo = () => {
  const [useEffectData, setUseEffectData] = useState(undefined);

  useEffect(() => {
    if (useEffectData === undefined) {
      fetcher(url)
        .then(data => {
          setUseEffectData(data);
        })
        .catch(error => console.log(error));
    }
  }, [useEffectData]);

  const { data: useSwrData } = useSWR(url, fetcher);

  const timeDiff = useMemo(() => {
    if (useEffectData && useSwrData) {
      return (useEffectData.time - useSwrData.time).toFixed(2);
    }
    return 0;
  }, [!!useEffectData, !!useSwrData]);

  return (
    <div className="p-4">
      <NavLink
        to="/"
        className="underline cursor-pointer text-blue-500 font-bold"
      >
        Back to Home page
      </NavLink>
      <div className="grid grid-cols-2">
        <WithUseEffect count={useEffectData?.message} timeDiff={timeDiff} />
        <WithUseSwr count={useSwrData?.message} timeDiff={timeDiff} />
      </div>
    </div>
  );
};

export default Demo;
