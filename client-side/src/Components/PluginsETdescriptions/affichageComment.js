import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

import CommentList from "./commentList";
import CommentForm from "./commentForm";

class AffichageCommentaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:7777")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <div className="App container bg-light shadow borderGray"  style={{ "border" : "2px solid #cec7c7"}}>
        

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about my plugin</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AffichageCommentaire;