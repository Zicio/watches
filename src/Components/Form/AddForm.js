import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classNames from "classnames";
import PropTypes from "prop-types";

const AddForm = (props) => {
  const { name, offset, onChange, onSubmit } = props;
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    onChange(name, value);
  };

  return (
    <Form
      className={classNames(
        "form",
        "d-flex",
        "align-items-end",
        "justify-content-evenly",
        "my-3"
      )}
      onSubmit={onSubmit}
    >
      <Form.Group controlId="name">
        <Form.Label>Название</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="offset">
        <Form.Label>Временная зона</Form.Label>
        <Form.Control
          type="number"
          name="offset"
          max="12"
          min="-12"
          value={offset}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
};

AddForm.propTypes = {
  name: PropTypes.string.isRequired,
  offset: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddForm;
