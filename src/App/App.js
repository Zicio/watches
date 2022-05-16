import "bootstrap/dist/css/bootstrap.min.css";
import AddForm from "../Components/Form/AddForm";
import Watch from "../Components/Watch/Watch";
import { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import { v4 as uuidv4 } from "uuid";

function App() {
  moment.locale("ru");
  const [form, setForm] = useState({
    name: "",
    offset: "",
  });

  const [watch, setWatch] = useState([]);

  const handleChange = (name, value) => {
    if (value) {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.offset) {
      const newWatch = {
        name: form.name,
        time: moment().add(form.offset, "hours").format("LTS"),
      };
      setWatch((prevWatch) => [...prevWatch, newWatch]);
      setForm({
        name: "",
        offset: "",
      });
      console.log({ watch });
    }
  };

  return (
    <main className="container">
      <AddForm
        name={form.name}
        offset={form.offset}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className="watches">
        {watch.map((el) => (
          <Watch data={el} key={uuidv4()} />
        ))}
      </div>
    </main>
  );
}

export default App;
