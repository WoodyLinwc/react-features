// components/DisqusComments.jsx
import React from "react";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ identifier, title }) => {
  const disqusConfig = {
    url: window.location.href,
    identifier: identifier,
    title: title,
  };

  return (
    <div style={{ marginTop: "200px", maxWidth: "800px" }}>
      <DiscussionEmbed shortname="react-features" config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
