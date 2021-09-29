import { Img } from '@chakra-ui/image';
import { Box, Container, Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import FeatureText from './FeatureText';

function Features1() {
    return (
        <Container maxW={{ md: '1200px' }} centerContent={{ md: 'true' }}>
            <Box
                textAlign='center'
                my={{ base: '3rem' }}
                maxW={{ md: '700px' }}
            >
                <Heading as='h2' size='lg'>
                    Keep track of your snippets
                </Heading>
                <Text>
                    Clipboard instantly stores any item you copy in the cloud,
                    meaning you can access your snippets immediately on all your
                    devices. Our Mac and iOS apps will help you organize
                    everything.
                </Text>
            </Box>
            <Box
                py={{ lg: '2rem' }}
                d={{ lg: 'flex' }}
                pos={{ lg: 'relative' }}
            >
                <Img
                    pos={{ lg: 'relative' }}
                    transform={{ lg: 'translateX(-20%)' }}
                    src='/images/image-computer.png'
                    my={{ base: '5rem', lg: '0' }}
                />
                <Box
                    d={{ lg: 'flex' }}
                    flexDir={{ lg: 'column' }}
                    maxW={{ base: '500px', lg: 'unset' }}
                    mx={{ base: 'auto', lg: 'unset' }}
                >
                    <FeatureText
                        heading='Quick Search'
                        content='Easily search your snippets by content, category, web address, application, and more.'
                        center={false}
                    />
                    <FeatureText
                        heading='iCloud Sync'
                        content='Instantly saves and syncs snippets across all your devices.'
                        center={false}
                    />
                    <FeatureText
                        heading='Complete History'
                        content='Retrieve any snippets from the first moment you started using the app.'
                        center={false}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Features1;
