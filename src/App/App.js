import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddForm from "../Components/Form/AddForm";
import Watch from "../Components/Watch/Watch";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
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
        id: uuidv4(),
        name: form.name,
        offset: form.offset,
      };
      setWatch((prevWatch) => [...prevWatch, newWatch]);
      setForm({
        name: "",
        offset: "",
      });
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const newWatch = watch.filter((el) => el.id !== id);
    setWatch(newWatch);
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
          <Watch data={el} key={el.id} onDelete={handleDelete} id={el.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
