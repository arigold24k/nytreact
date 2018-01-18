import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/index";
import Nav from "../../components/Nav/index";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import API from "../../utils/API";
import { ArticleList, ArticleListItem } from "../../components/ArticleList/index";
import { Container, Row, Col } from "../../components/Grid/index";

class SearchArticles extends Component {
    state = {
        articles: [],
        articleSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        // When the form is submitted, prevent its default behavior, get articles update the articles state
        event.preventDefault();
        API.searchArticles(this.state.articleSearch)
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="articleSearch"
                                                value={this.state.articleSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For Articles"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.articles.length ? (
                                <h1 className="text-center">No Recipes to Display</h1>
                            ) : (
                                <ArticleList>
                                    {this.state.articles.map(recipe => {
                                        return (
                                            <ArticleListItem
                                                key={recipe.title}
                                                title={recipe.title}
                                                href={recipe.href}
                                                ingredients={recipe.ingredients}
                                                thumbnail={recipe.thumbnail}
                                            />
                                        );
                                    })}
                                    <DeleteBtn />
                                </ArticleList>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export  SearchArticles;