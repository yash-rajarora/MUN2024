import { Box, Container, Heading} from '@chakra-ui/react';
import React from 'react';

const AboutBanner = (props) => {
  return (
    <Box
      minwidth={'100%'}
      height="40vh"
      backgroundColor="blackAlpha.600"
      backgroundImage={'https://wallpaperaccess.com/full/1393241.jpg'}
      backgroundPosition="center"
      backgroundRepeat={'no-repeat'}
      backgroundSize="cover"
    >
        <Container background={'blackAlpha.800'} minWidth="100%" height="40vh" display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
            <Heading fontSize={'50px'} letterSpacing='4px' textAlign={'center'} color={'white'}>{props.munheading}</Heading>
            <Heading fontSize={'30px'} textAlign={'center'} color={'white'}>JECRC MUN</Heading>
        </Container>

    </Box>
  );
};

export default AboutBanner;
