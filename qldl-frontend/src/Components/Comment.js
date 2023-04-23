import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CommentForm(props) {
  return (
    <Form style={{marginTop:"0px", marginBottom:"10px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          value={props.comment} 
          onChange={e => props.setComment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={props.sendComment}>
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;