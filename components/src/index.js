import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.people()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.animals()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="g8!!! Thanks"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.fashion()}
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="Cool$$$$$!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
