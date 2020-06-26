import React, { Component } from 'react'
import { CardImg, Card, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const renderComments = this.props.selectedDish.comments.map((prop) => {
            if (prop != null) {
                return (
                    <div key={prop.id} className="list-unstyled">
                        {prop.comment}
                        <br />
                    -- {prop.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(prop.date))}
                        <br />

                    </div>
                );
            } else {
                return (
                    <div></div>
                );
            }
        });
        return [
            <div className="col-md-5 m-1 p-2">
                <Card>
                    <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>,
            <div className="col-md-5 m-1 p-2">
                <strong>
                    <h4>Comments</h4>
                </strong>
                {renderComments}
            </div>
        ];
    }
}

export default DishDetail;