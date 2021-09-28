import { Link } from '@chakra-ui/layout';
import React from 'react';

function Button({ text, color }) {
    return (
        <Link
            d='block'
            py='0.5rem'
            my='1rem'
            bg={color}
            color='white'
            textAlign='center'
            borderRadius='50px'
            fontWeight='600'
            borderBottom={`${color} 3px solid`}
            w={{ md: '250px' }}
        >
            {text}
        </Link>
    );
}

export default Button;
