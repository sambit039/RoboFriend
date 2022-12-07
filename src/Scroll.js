import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'auto', height: '100%',width:'100%'}}>
      {props.children}
    </div>
  );
};

export default Scroll;