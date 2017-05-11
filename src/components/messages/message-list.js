import React, { Component } from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';
import Progress from '../progress';
import { getWsMessages } from '../../actions/wsActions';

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
    return (
      <ReactPullToRefresh
        className="message-list"
        onRefresh={this.handleRefresh}
        disabled={noMore}
        loading={(
          <div className="loading" style={{
            textAlign: "center"
          }}>
            Pull to load more...
          </div>
        )}
        ref={(node) => this.listNode = node}>
        {this.props.children}
      </ReactPullToRefresh>
    );
  }
}

export default MessageList;
