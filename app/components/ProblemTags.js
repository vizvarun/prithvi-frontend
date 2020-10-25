import React from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';

export default function ProblemTags() {
  const [tags, setTags] = React.useState([]);
  return (
    <ReactTagInput
      tags={tags}
      onChange={newTags => setTags(newTags)}
      removeOnBackspace
      placeholder="Add Tags"
    />
  );
}
