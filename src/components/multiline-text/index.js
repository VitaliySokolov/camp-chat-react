import React, {PropTypes} from 'react';
import ReactEmoji from 'react-emoji';

const MultilineText = (props) => {
  return (
    <div className='multilines'>
      {props.text && props.text.split('\n').map((line, index) => (<div key={index}>{
        ReactEmoji.emojify(line)
        }</div>))}
    </div>
  )
}
MultilineText.propTypes = {
  text: PropTypes.string
};

export default MultilineText;
