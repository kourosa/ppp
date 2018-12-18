import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card
} from "reactstrap";

export default props => (
  <div>
    <Card m={2} p={2}>
      <Form>
        <FormGroup row>
          <Label sm={2} size="lg">
            Product Name :
          </Label>
          <Col sm={4}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="lg"
              bsSize="lg"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail2"
              placeholder="default"
            />
          </Col>
        </FormGroup>
      </Form>
      <hr />
      <h3> "Add New Product to List"</h3>
      <strong>Product Name : </strong>
      <input
        key="asadas"
        className="input"
        onChange={props.onNameChange.bind(this)}
        value={props.newItem.pname}
      />
      <br />
      <strong>Product Price:</strong>
      <input
        key="asassdas"
        className="input"
        type="number"
        onChange={props.onPriceChange.bind(this)}
        value={props.newItem.price}
      />
      <br />
      <Button className="btn m1" onClick={props.onClick}>
        add
      </Button>
      <hr />
    </Card>
  </div>
);
