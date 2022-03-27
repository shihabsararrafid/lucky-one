import React from 'react';
import './Showcart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Showcart = (props) => {
    console.log(props);
    const { img, name } = props.singleItem;
    return (
        <div className='showCart'>
            <img src={img} alt="" />
            <h5>{name}</h5><FontAwesomeIcon icon={faTrash} />

        </div>
    );
};

export default Showcart;