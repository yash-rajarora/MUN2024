import {
    Box,
    Heading,
    Text,
    VStack,
    Container,
    Card,
    CardBody,
    Link,
    Button,
    useDisclosure,
    Stack
  } from '@chakra-ui/react';
  import AboutBanner from './AboutBanner';
  
  const AboutUs = () => {
    const { onClose } = useDisclosure();
    return (
      <>
        <AboutBanner munheading={'ABOUT US'} />
        <Box>
          <Container background={'green.50'} minWidth="100%">
            <Container
              minWidth={['100%','85%']}
              minHeight="80vh"
              display="flex"
              flexDir={'column'}
              justifyContent="center"
              alignItems={'center'}
            >
              <VStack
                alignItems={['center', 'flex-start']}
                width={['100%', '90%']}
              >
                <Card size={'lg'} marginTop="20" marginBottom={'20'}>
                  <CardBody paddingLeft={['5','20']} paddingRight={['5','20']} >
                    
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={['normal','medium']}
                      fontSize={['15px',"17px"]}
                    >
                    JECRC MUN is a community established with the aim of creating a society for youth to discuss, debate and deliberate 
                    present-day crises contributing towards solutions for global imbalance.<br/><br/>

                    Focusing on the need to value ideas and approach toward solutions for the atrocities around the globe, some like-minded
                    individuals figured a need for such a platform for people to discuss and deliberate With the laying of the foundation 
                    by Shri Kulbhushan Kothari, our journey began in 2012, with us being the first institution in Jaipur and second in 
                    Rajasthan to introduce Model UN to the crowd. Commemorating the 12 years of legacy, we stand firm as the host of 
                    exceptional MUN conferences in the state. With the collective efforts of our enthusiastic and extensive organizing 
                    committees over the years, we have arisen as one of the best and most promising Model UN societies in India.<br/><br/>

                    We aspire to involve youth in international dialogue, deliberate upon the dire issues of the world, and shape them 
                    into strong individuals molding them into the leaders of tomorrow.<br/><br/>

                    We have organized 12 MUN conferences till now and have hosted approximately 2500+ delegates in total, from 20+ 
                    countries, 25+ states, and 350+ institutions. <br/><br/>

                    </Text>
                    <Stack align="center" pt="10">
                  <Link onClick={onClose} to="/register">
                  {/* <Button 
                  variant={'solid'} 
                  colorScheme="green" 
                  size={['md', 'lg']}
                  >
                    Register Now
                  </Button> */}
                  </Link>
                  </Stack>
                  </CardBody>
                  
                </Card>
              </VStack>
            </Container>
          </Container>
        </Box>
      </>
    );
  };
  
  export default AboutUs;
  