import React from 'react';

const Scroll = (props) =>{
    return ( 
        <div style = {{
        overflow: 'auto',
        border: '5px solid red', 
        height: '33em',
        margin: '10px'
        }}>
            {props.children};
        </div>
    );
};

export default Scroll;