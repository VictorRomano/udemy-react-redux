import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure?</ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 17:45" 
          content="Oie!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Jess" 
          timeAgo="Today at 08:06" 
          content="Hello!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Joseph" 
          timeAgo="Yesterday at 14:25" 
          content="Hola!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));