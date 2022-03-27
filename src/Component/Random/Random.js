import React from 'react';

const Random = (props) => {

    const array = props.random;




    // for (const item of array) {
    //     console.log(item);
    // }
    //console.log(array);
    // console.log(props.random[0]);
    // const { img, name } = array;
    return (
        <div className='randomData'>
            {/* <img src={img} alt="" />
            <p>Name:{name}</p> */}
        </div>
    );
};

export default Random;