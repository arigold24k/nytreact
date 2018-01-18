import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Summary: {props.summary}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to recipe!</a>
        </Col>
        <Col size="xs-4 sm-2">
          <Button/>
        </Col>
      </Row>
    </Container>
  </li>
);
