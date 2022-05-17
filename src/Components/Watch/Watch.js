import { useState, useEffect } from "react";
import "./Watch.scss";
import moment from "moment";
import "moment/locale/ru";

const Watch = (props) => {
  moment.locale("ru");
  const { data } = props;

  const [update, setUpdate] = useState(
    moment.utc().add(data.offset, "hours").format("LTS")
  );

  let timeout;

  const workWatch = () => {
    setUpdate(moment.utc().add(data.offset, "hours").format("LTS"));
  };

  useEffect(() => {
    timeout = setInterval(workWatch, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [update]);

  return (
    <div className="watch">
      <div className="watch__name">{data.name}</div>
      <div className="watch__dipslay">{update}</div>
      <button className="watch__delete">X</button>
    </div>
  );
};

export default Watch;
