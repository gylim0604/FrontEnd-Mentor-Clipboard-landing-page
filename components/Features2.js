import { Img } from '@chakra-ui/image';
import { Box, Container, Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import FeatureText from './FeatureText';

function Features2() {
    return (
        <Container my='5rem'>
            <Box textAlign='center' my={{ base: '3rem' }}>
                <Heading> Access Clipboard anywhere</Heading>
                <Text>
                    Whether you’re on the go, or at your computer, you can
                    access all your Clipboard snippets in a few simple clicks.
                </Text>
            </Box>
            <Img src='/images/image-devices.png' />
            <Box textAlign='center' my={{ base: '3rem' }}>
                <Heading>Supercharge your workflow</Heading>
                <Text>We’ve got the tools to boost your productivity.</Text>
            </Box>
            <FeatureText
                img='/images/icon-blacklist.svg'
                heading='Create blacklists'
                content='Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'
            />
            <FeatureText
                img='/images/icon-text.svg'
                heading='Plain text snippets'
                content='Remove unwanted formatting from copied text for a consistent look.'
            />
            <FeatureText
                img='/images/icon-preview.svg'
                heading='Sneak preview'
                content='Quick preview of all snippets on your Clipboard for easy access.'
            />
        </Container>
    );
}

export default Features2;
