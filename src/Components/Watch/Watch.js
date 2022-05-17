import { useState, useEffect } from "react";
import "./Watch.scss";
import moment from "moment";
import PropTypes from "prop-types";
import "moment/locale/ru";

const Watch = (props) => {
  moment.locale("ru");
  const { data, onDelete } = props;

  const [update, setUpdate] = useState(
    moment.utc().add(data.offset, "hours").format("LTS")
  );

  const handleDelete = (target) => {
    onDelete(target, data.id);
  };

  let timeout;

  const workWatch = () => {
    setUpdate(moment.utc().add(data.offset, "hours").format("LTS"));
    console.log(update);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timeout = setInterval(workWatch, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [update]);

  return (
    <div className="watch">
      <div className="watch__name">{data.name}</div>
      <div className="watch__dipslay">{update}</div>
      <button className="watch__delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

Watch.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Watch;
