import React, { Component } from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';
import { getWsMessages } from '../../actions/wsActions';
import FlatButton from 'material-ui/FlatButton';
import classNames from 'classnames';
import Progress from '../progress';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(resolve, reject) {
    // console.log('refresh');
    getWsMessages(this.props.cutoff);
    resolve();
  }


  render() {
    const { noMore } = this.props;
    const pullToRefreshClassNames = classNames({
      hidden: this.props.children.length === 0
    });
    const progressBar = (this.props.children.length === 0) ?
      <Progress /> : null
    return (
      <div
        className="message-list">
        <ReactPullToRefresh
          className={pullToRefreshClassNames}
          onMouseDown={this.handleMouseDown}
          onRefresh={this.handleRefresh}
          disabled={noMore}
          ref={(node) => this.listNode = node} >
          <FlatButton
            label="Pull to get older ones"
            fullWidth={true}
            disabled={noMore}
          />
        </ReactPullToRefresh>
        {progressBar}
        {this.props.children}
      </div>
    );
  }
}

export default MessageList;
