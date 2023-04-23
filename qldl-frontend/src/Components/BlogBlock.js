import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  Link
} from 'react-router-dom';

function BlogBlock(props) {
  const url = "/post/"+props.post.id;
  const getDateTime = function(isoTimestamp){
    const date = new Date(isoTimestamp);

    const formattedDate = ("0" + date.getUTCDate()).slice(-2) + "/" +
                          ("0" + (date.getUTCMonth() + 1)).slice(-2) + "/" +
                          date.getUTCFullYear() + " " +
                          ("0" + date.getUTCHours()).slice(-2) + ":" +
                          ("0" + date.getUTCMinutes()).slice(-2) + ":" +
                          ("0" + date.getUTCSeconds()).slice(-2);
    return formattedDate;

  }
  const parseHtml = function(htmlString){
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const plainText = doc.documentElement.textContent;
    const shortText = plainText.slice(0, 300);
    return shortText  + " ... ";
  }
  return (
    <Card style={{padding:"0px", marginTop: "20px", borderRadius:"0px"}}>
      <Card.Header as="h5">{getDateTime(props.post.created_date)}</Card.Header>
      <Card.Body>
      <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>
          {parseHtml(props.post.content)}
        </Card.Text>
        <Button style={{float:"right"}} variant="info">
          <Link style={{color:"black", textDecoration:"none"}} to={url}>Go Detail Blog</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogBlock;