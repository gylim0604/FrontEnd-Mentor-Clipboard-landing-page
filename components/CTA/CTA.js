import { Container, Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Button from './Button';

function CTA({ icon, bg, heading, content }) {
    return (
        <Box bgImage={bg} bgRepeat='no-repeat' bgSize='cover' py='5rem'>
            <Container textAlign='center'>
                {icon}
                <Heading as='h1' size='xl'>
                    {heading}
                </Heading>
                <Text color='grayBlue'>{content}</Text>
                <Box my='3rem'>
                    <Button text='Download for iOS' color='strongCyan' />
                    <Button text='Download for Mac' color='lightBlue' />
                </Box>
            </Container>
        </Box>
    );
}

export default CTA;
