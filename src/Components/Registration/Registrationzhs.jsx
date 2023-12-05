import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import AboutBanner from '../About/AboutBanner';
  import reg1 from '../../Assets/images/ambassador.png'
  import reg2 from '../../Assets/images/delegate.png'
  const Registrationzhs = () => {
    return (
      <>
        <AboutBanner munheading={'Registration'} />
        <Box minwidth="100%" minHeight={'50vh'} background="green.50"  >
          <Container minWidth={'80%'} minHeight={'8 0vh'}>
              <SimpleGrid
                spacing={4}
                templateColumns="1"
              >
                
                <Card size={'md'} variant="elevated" marginTop={['5','20']} marginBottom={['5','20']} w={'300px'}>
                  <CardHeader>
                    <Heading size="md" textAlign={'center'} fontWeight="semibold"> Delegate</Heading>
                  </CardHeader>
                  <CardBody display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
                    <Image src={reg2} />
                  </CardBody>
                  <CardFooter display={'flex'} flexDirection="column"  justifyContent='center'>
                    <Text textAlign={'center'}>
                       
                    </Text>
                    
                    <Button 
                    colorScheme={'green'} 
                    size={'lg'} 
                    variant="solid"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://forms.gle/bZ7JR1bmB8wiTYTs5';
                    }}                  
                    >Register Now !</Button>
                  </CardFooter>
                </Card>
                
                
                
                
              </SimpleGrid>
          </Container>
        </Box>
      </>
    );
  };
  
  export default Registrationzhs;
  