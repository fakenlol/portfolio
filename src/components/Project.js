import "../stylesheets/Project.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function Project(props) {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="image" variant="top" src={require(`../imgs/projects/project-${props.image}.${props.ext}`)} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button variant="primary">Go to the Project</Button>
            </Card.Body>
        </Card>
    );
}