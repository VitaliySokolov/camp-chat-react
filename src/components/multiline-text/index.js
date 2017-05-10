import React, {PropTypes} from 'react';
import ReactEmoji from 'react-emoji';

const MultilineText = (props) => {

  return (
    <div className='multilines'>
      {props.text.split('\n').map(line => (<div>{
        ReactEmoji.emojify(line)
        }</div>))}
    </div>
  )
}
MultilineText.propTypes = {
  text: PropTypes.String
};

export default MultilineText;
