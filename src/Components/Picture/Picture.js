import React from 'react';
import './Picture.css';

class Picture extends React.Component {
  constructor(props){
    super(props);
    let startingRating = this.props.currentRating;

    this.renderClick = this.renderClick.bind(this);
  }

  renderClick() {
    if (this.startingRating === this.props.currentRating){
      return (<button className="Button-action" onClick={this.onAdd}>Vote</button>);
    } else {
      return (<button className="Button-action" onClick={this.onRemove}>Unvote</button>);
    }
  }

  render() {
    return (
      <div className="Picture">
        <div className="image-container">
          <img src={this.props.handlePictures.imageUrl} alt=''/>
        </div>
        <h2>{this.props.handlePictures.pictureTitle}</h2>
        <div className="Picture-information">
          <div className="Picture-address">
            <p>{this.props.handlePictures.name}</p>
              <p>{this.props.handlePictures.phoneNumber} {this.props.handlePictures.misrad}</p>
          </div>
          <div className="Picture-reviews">
            <h3 className="rating">{this.props.handlePictures.rating} upvotes</h3>
             // <p>{this.props.handlePictures.reviewCount} reviews</p>

          </div>
          {this.renderClick()}
        </div>
      </div>
    );
  }
}


export default Picture;
