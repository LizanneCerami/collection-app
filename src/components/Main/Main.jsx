import { HashLink } from 'react-router-hash-link'
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Main () {
  return (

      <main>
        <Container>
          <Row>
            <Col>
              <h1> Gallery</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore cumque delectus praesentium tenetur. Porro, excepturi. Saepe nostrum vero, amet cum eum, quo a aspernatur consequuntur, eligendi itaque facere soluta?</p>
              <HashLink to="/#gallery"> <Button>See Gallery</Button> </HashLink>
            </Col>
          </Row>
        </Container>
      </main>

  )
}