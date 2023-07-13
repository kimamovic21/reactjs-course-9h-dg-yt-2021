import React from 'react';

const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section 
            className='square'
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? '#000' : '#fff',
            }}
        >
            <p>{colorValue ? colorValue : 'Color empty value'}</p>
            <p>{hexValue ? hexValue : 'Hex empty value'}</p>
        </section>
    );
};

Square.defaultProps = {
    colorValue: 'Empty Default Props'
};

export default Square;
