import {
    Container,
    Box,
    HStack,
    Grid,
    GridItem,
    Text,
} from '@chakra-ui/layout';
import React from 'react';
import { Facebook, Instagram, Logo, Twitter } from './Icons';

function Footer() {
    return (
        <Box bg='blackAlpha.100'>
            <Container
                centerContent='true'
                py={{ base: '3rem', md: '0' }}
                flexDir={{ md: 'row' }}
                justifyContent={{ md: 'space-between' }}
                maxW={{ md: '1200px' }}
            >
                <Logo h='60px' w='60px' />
                <Grid
                    gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                    py={{ base: '2rem' }}
                    gap={{ base: '2rem' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    color='darkGrayBlue'
                >
                    <GridItem>
                        <Text>FAQs</Text>
                    </GridItem>
                    <GridItem>
                        <Text>Contact Us</Text>
                    </GridItem>
                    <GridItem>
                        <Text>Privacy Policy</Text>
                    </GridItem>
                    <GridItem>
                        <Text>Press Kit</Text>
                    </GridItem>
                    <GridItem>
                        <Text>Install Guide</Text>
                    </GridItem>
                </Grid>
                <HStack alignItems='baseline' spacing='2rem'>
                    <Facebook h='24px' w='24px' />
                    <Twitter h='20px' w='24px' />
                    <Instagram h='24px' w='24px' />
                </HStack>
            </Container>
        </Box>
    );
}

export default Footer;
