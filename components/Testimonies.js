import { Img } from '@chakra-ui/image';
import { Container, Stack } from '@chakra-ui/layout';
import React from 'react';

function Testimonies() {
    return (
        <Container centerContent='true' py='5rem'>
            <Stack d='inline-flex' spacing='5rem'>
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
