import React from 'react';
import Avatar from 'react-avatar';

function ModAvatar(props) {
  if (props.user === 'robot') {
    return (<Avatar src={"/img/robot.png"}  alt="robot" className="user-image robot" size={50}
    />);
  }
  return (
    <Avatar name={props.user.username || props.user.name} alt="img" className="user-image"
    size={props.size || 50}
    round={true}
    />
  )
}

export default ModAvatar;
