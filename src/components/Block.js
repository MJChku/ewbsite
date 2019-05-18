import React from "react";
import styled from "styled-components";



const Layout = ({ img, children }) => {
  const Block = styled.div({
    height: `500px`,
    textAlign: 'center',
    backgroundImage: `url(${img})`
    //backgroundPosition: `0 .25em`,
    //backgroundSize: `10em`,
  });

  return (
      <Block >
        {children}
      </Block>
  );
};

export default Layout;

