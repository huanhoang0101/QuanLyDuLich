import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <Button style={{float:"right"}} variant="info">Go Detail Blog</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogBlock;