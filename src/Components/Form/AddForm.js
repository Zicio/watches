import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classNames from "classnames";

const AddForm = () => {
  return (
    <Form
      className={classNames(
        "form",
        "d-flex",
        "align-items-end",
        "justify-content-evenly"
      )}
    >
      <Form.Group controlId="name">
        <Form.Label>Название</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <Form.Group controlId="time">
        <Form.Label>Временная зона</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
};

export default AddForm;
