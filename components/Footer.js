import {
    Container,
    Box,
    HStack,
    Grid,
    GridItem,
    Link,
} from '@chakra-ui/layout';
import React from 'react';
import { Facebook, Instagram, Logo, Twitter } from './Icons';
function Footer() {
    return (
        <Box bg='blackAlpha.100'>
            <Container
                centerContent='true'
                py={{ base: '3rem', md: '0' }}
                flexDir={{ base: 'column', md: 'row' }}
                maxW={{ md: '1200px' }}
            >
                <Logo h='60px' w='60px' />
                <Grid
                    gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                    py={{ base: '2rem' }}
                    gap={{ base: '2rem' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    color='darkGrayBlue'
                    ml={{ md: '150px' }}
                >
                    <GridItem>
                        <Link
                            _hover={{
                                color: 'strongCyan.100',
                                cursor: 'pointer',
                            }}
                        >
                            FAQs
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link
                            _hover={{
                                color: 'strongCyan.100',
                                cursor: 'pointer',
                            }}
                        >
                            Contact Us
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link
                            _hover={{
                                color: 'strongCyan.100',
                                cursor: 'pointer',
                            }}
                        >
                            Privacy Policy
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link
                            _hover={{
                                color: 'strongCyan.100',
                                cursor: 'pointer',
                            }}
                        >
                            Press Kit
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link
                            _hover={{
                                color: 'strongCyan.100',
                                cursor: 'pointer',
                            }}
                        >
                            Install Guide
                        </Link>
                    </GridItem>
                </Grid>
                <HStack
                    alignItems='baseline'
                    spacing='2rem'
                    ml={{ md: 'auto' }}
                >
                    <Facebook h='24px' w='24px' bg={'darkGray'} />
                    <Twitter h='20px' w='24px' />
                    <Instagram h='24px' w='24px' />
                </HStack>
            </Container>
        </Box>
    );
}

export default Footer;
