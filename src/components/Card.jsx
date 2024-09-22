import React from 'react';
import img from "../../src/img.png";

function Card(props) {
    return (
        <div className='flex justify-between items-center border rounded p-2'>
            <h3 className='flex-1'>{props.text}</h3>
            <button onClick={props.funcDeleteCard} className='w-6 flex items-center'>
                <img src={img} alt="" />
            </button>
        </div>
    );
}

export default Card;
