import React, { Component } from "react";
import API from "../../utils/API";
import { ArticleList, ArticleListItem } from "../../components/ArticleList/index";
import { Container, Row, Col } from "../../components/Grid/index";

class Articles extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    deletesaved = (id) => {
      API.deleteBook()
          .then(res => this)
    };

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
              <Row>
                <Col size="xs-12">
                    {!this.state.articles.length ? (
                        <h1 className="text-center">No Articles to Display</h1>
                    ) : (
                        <ArticleList>
                            {this.state.articles.map(article => {
                                return (
                                    <ArticleListItem
                                        key={article.title}
                                        title={article.title}
                                        href={article.href}
                                        summary={article.summary}
                                    />
                                );
                            })}
                          <DeleteBtn data-id={article.id} onClick={this.deletesaved(this.article.id)} />
                        </ArticleList>
                    )}
                </Col>
              </Row>
            </Container>
        );
    }
}

export Articles;
