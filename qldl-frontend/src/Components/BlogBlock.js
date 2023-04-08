import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  Link
} from 'react-router-dom';

function BlogBlock() {
  return (
    <Card style={{padding:"0px", marginTop: "20px", borderRadius:"0px"}}>
      <Card.Header as="h5">03/03/2023</Card.Header>
      <Card.Body>
        <Card.Title>Huân hoàn du lịch sapa? tin tức như cức hôm nay</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content. 
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button style={{float:"right"}} variant="info">
          <Link style={{color:"black", textDecoration:"none"}} to="/blog/1">Go Detail Blog</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogBlock;