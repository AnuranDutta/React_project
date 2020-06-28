import React, { Component } from 'react'
import { CardImg, Card, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderComments(comments) {
        const commentsList = comments.map((temp) => {
            return (
                <div key={temp.id} className="li">
                    {temp.comment}
                    <br />
                    -- {temp.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(temp.date))}
                    <br />
                </div>
            );
        })

        if (comments != null) {
            return (
                <div className="list-unstyled">
                    {commentsList}
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 m-1 p-2">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-5 m-1 p-2">
                            <strong>
                                <h4>Comments</h4>
                            </strong>
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;