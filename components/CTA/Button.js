import { Link } from '@chakra-ui/layout';
import React from 'react';
import { useToken } from '@chakra-ui/system';
function Button({ text, color }) {
    const [colorHover, colorBorder] = useToken('colors', [
        `${color}.50`,
        `${color}.200`,
    ]);
    return (
        <Link
            d='block'
            py='0.5rem'
            my='1rem'
            bg={`${color}.100`}
            color='white'
            textAlign='center'
            borderRadius='50px'
            fontWeight='600'
            borderBottom={`${colorBorder} 3px solid`}
            w={{ md: '250px' }}
            _hover={{ bg: colorHover }}
        >
            {text}
        </Link>
    );
}

export default Button;
