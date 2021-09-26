import { Container, Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Button from './Button';

function CTA({ icon, bg, heading, content }) {
    return (
        <Box backgroundImage={bg}>
            <Container textAlign='center'>
                {icon}
                <Heading as='h1' size='md'>
                    {heading}
                </Heading>
                <Text color='grayBlue'>{content}</Text>
                <Button text='Download for iOS' color='strongCyan' />
                <Button text='Download for Mac' color='lightBlue' />
            </Container>
        </Box>
    );
}

export default CTA;
