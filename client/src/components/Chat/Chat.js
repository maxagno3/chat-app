import React, { useEffect, useState } from "react";
import queryString from "query-string";

const Chat = ({ location }) => {
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    
  }, []);

  return <h1>Chat Page.</h1>;
};

export default Chat;
