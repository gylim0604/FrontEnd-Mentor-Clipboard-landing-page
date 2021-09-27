import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

function FeatureText({ heading, content }) {
    return (
        <Box textAlign='center' my='3rem'>
            <Heading>{heading}</Heading>
            <Text>{content}</Text>
        </Box>
    );
}

export default FeatureText;
