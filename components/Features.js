import { Img } from '@chakra-ui/image';
import { Box, Container, Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import FeatureText from './FeatureText';

function Features() {
    return (
        <Container>
            <Box textAlign='center' my={{ base: '3rem' }}>
                <Heading>Keep track of your snippets</Heading>
                <Text>
                    Clipboard instantly stores any item you copy in the cloud,
                    meaning you can access your snippets immediately on all your
                    devices. Our Mac and iOS apps will help you organize
                    everything.
                </Text>
            </Box>
            <Img src='/images/image-computer.png' />
            <FeatureText
                heading='Quick Search'
                content='Easily search your snippets by content, category, web address, application, and more.'
            />
            <FeatureText
                heading='iCloud Sync'
                content='Instantly saves and syncs snippets across all your devices.'
            />
            <FeatureText
                heading='Complete History'
                content='Retrieve any snippets from the first moment you started using the app.'
            />
        </Container>
    );
}

export default Features;
