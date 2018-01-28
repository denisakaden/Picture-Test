import React from 'react';
import './PictureList.css';
import Picture from '../Picture/Picture.js';

class PictureList extends React.Component {

  render() {
    return (
      <div className='PictureList'>
        {
          this.props.handlePictures.map(picture => {
            return <Picture handlePictures={picture} onAdd={this.props.onAdd} onRemove={this.props.onRemove} currentRating={this.props.currentRating}/>;
          })
        }
      </div>
    );
  }
}


export default PictureList;
