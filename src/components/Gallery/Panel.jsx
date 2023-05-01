import { Card, Col } from "react-bootstrap";

export default function Panel ({ data: {id, title, author, quote } }) {

  return (
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3">
        <figure>
          {/* <Image src ={cover} fluid /> */}
        </figure>

        <div className="content">
          <h3>{title}</h3>
          <p>{quote}</p>
        </div>
      </Card>
    </Col>
  )
}