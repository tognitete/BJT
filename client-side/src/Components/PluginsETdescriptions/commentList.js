import React from "react";
import Comment from "./comment";

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        {props.comments.length > 0 ? "Comment" : "Comment"}
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}