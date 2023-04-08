import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CommentForm() {
  return (
    <Form style={{marginTop:"0px", marginBottom:"10px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;