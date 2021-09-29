import { Img } from '@chakra-ui/image';
import { Container, Stack } from '@chakra-ui/layout';
import React from 'react';

function Testimonies() {
    return (
        <Container
            centerContent={{ base: 'true' }}
            py='5rem'
            maxW={{ md: '1200px' }}
        >
            <Stack
                d='inline-flex'
                spacing={{ base: '5rem', md: '0' }}
                direction={{ base: 'column', md: 'row' }}
                alignItems={{ md: 'center' }}
                w={{ md: '100%' }}
                justifyContent={{ md: 'space-between' }}
            >
                <Img src='/images/logo-google.png' alt='Google logo' />
                <Img src='/images/logo-ibm.png' alt='IBM logo' />
                <Img src='/images/logo-microsoft.png' alt='Microsoft logo' />
                <Img src='/images/logo-hp.png' alt='HP logo' />
                <Img
                    src='/images/logo-vector-graphics.png'
                    alt='Vector Graphics logo'
                />
            </Stack>
        </Container>
    );
}

export default Testimonies;
