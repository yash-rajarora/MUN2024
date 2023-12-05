import {
    Box,
  Image,
  Text,
  VStack,
  Container,
  Card,
  CardBody,
  Flex,
  Heading
  } from '@chakra-ui/react';
  import React from 'react';
  import AboutBanner from './About/AboutBanner';
  
  const Ramanan = () => {
    
    return (
      <>
        <AboutBanner munheading="CHIEF GUEST" />
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
                <Flex justify="center" align="center" >
                <Image
                  objectFit="cover"
                  boxSize={["90%","40%"]}
                  justifyContent={'center'}
                  pb={10}
                  src={
                    'https://attend.ieee.org/r10htc-2021/wp-content/uploads/sites/322/image0-1536x1536.jpeg'
                  }
                />
                </Flex>
                <Heading
                    className="about_heading"
                    color={'green.500'}
                    fontSize={['25px', '40px']}
                    
                    marginBottom={'10'}
                    textAlign="center"
                    fontWeight={'semibold'}
                  >
                    Ramanan Ramanathan
                  </Heading>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    textAlign={'justify'}
                  >
                    As the Mission Director of AIM, Ramanan Ramanathan has been instrumental in the launch and execution of several 
                    nationwide innovation and entrepreneurship initiatives resulting in establishment of over 10,000 Atal Tinkering Labs
                     schools nationwide with above 8,700 currently operational in more than 650 districts giving an access to four million 
                     students to innovative technologies like 3D printers, robotics, IOT, electronics and do-it-yourself kits. He has also 
                     been the key pillar behind taking Atal incubation centers across the country, setting up Atal Community Innovation 
                     Centers especially in tier-2 cities, and launching Atal New India Challenges, ARISE Challenges to give boost to make 
                     in India MSME initiatives. He is also responsible for coming up with one of the largest Mentors of Change networks 
                     with over 5000 mentors nationwide to mentor school students and startups.<br /><br />
                    Ramanan’s illustrious career in the IT industry spans more than three decades when he joined TCS in 1981 after 
                    graduating from IIT Bombay in Electrical Engineering.<br /><br />
                    Mr. Ramanan has received the most valuable CEO award twice in succession by Business World in 2011 and 2013. He was 
                    awarded the Asia CEO of the Year award in 2015 by CMO Asia Singapore, the Digitalist of the year award by SAP MINT 
                    in 2018, and an Honorary Doctorate by Gujarat Law Society.<br /><br />
                  </Text>
                  
                </CardBody>
                
              </Card>
            </VStack>
          </Container>
        </Container>
      </Box>

      </>
    );
  };
  
  export default Ramanan;
  