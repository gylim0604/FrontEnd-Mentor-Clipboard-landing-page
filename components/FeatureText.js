import { Img } from '@chakra-ui/image';
import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

function FeatureText({ img, heading, content, center = true }) {
    return (
        <Box
            textAlign={center ? 'center' : { base: 'center', lg: 'left' }}
            my='2rem'
        >
            {img ? (
                <Img src={img} alt='' mx='auto' my='2rem' d='inline-block' />
            ) : (
                ''
            )}
            <Heading as='h3' size='md' mb='.5rem'>
                {heading}
            </Heading>
            <Text>{content}</Text>
        </Box>
    );
}

export default FeatureText;
