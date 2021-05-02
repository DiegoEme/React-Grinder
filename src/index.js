import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          imgID="50"
          author="Sam"
          timeAgo="Today at 4:45 pm"
          comment="That sounds awesome!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imgID="500"
          author="Carlos"
          timeAgo="Today at 3:15 pm"
          comment="sounds cool bro"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imgID="130"
          author="Juana"
          timeAgo="Today at 6:26 am"
          comment="rad my man"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
