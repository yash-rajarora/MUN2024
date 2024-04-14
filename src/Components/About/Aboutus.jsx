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
          <Container background={' #FEFCE7'} minWidth="100%">
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
                    {/* JECRC MUN is a community established with the aim of creating a society for youth to discuss, debate and deliberate 
                    present-day crises contributing towards solutions for global imbalance. */}
                    The JECRC Model United Nations (MUN) serves as a vibrant platform uniting intellect with diplomacy, fostering the leaders of tomorrow. 
                    True to the spirit of the United Nations, JECRC MUN strives to provide a constructive forum for open dialogue on a variety of complex issues across different committees. 
                    As responsible young adults ourselves, we recognize the importance of well-prepared young individuals and their role in regional and national progress and development.  <br/><br/>

                    {/* Focusing on the need to value ideas and approach toward solutions for the atrocities around the globe, some like-minded
                    individuals figured a need for such a platform for people to discuss and deliberate With the laying of the foundation 
                    by Shri Kulbhushan Kothari, our journey began in 2012, with us being the first institution in Jaipur and second in 
                    Rajasthan to introduce Model UN to the crowd. Commemorating the 12 years of legacy, we stand firm as the host of 
                    exceptional MUN conferences in the state. With the collective efforts of our enthusiastic and extensive organizing 
                    committees over the years, we have arisen as one of the best and most promising Model UN societies in India. */}
                    Based in Jaipur, we are the biggest MUN in Rajasthan and the oldest in Jaipur. Through our flagship JECRC MUN conference, strategic partnerships, and collaborative efforts, we aim to inspire, challenge, and equip youth with a deeper understanding of the region and the world. 
                    We encourage youth to question their existing mindsets and to embrace the responsibility of delivering positive change in their communities.<br/><br/>

                    {/* We aspire to involve youth in international dialogue, deliberate upon the dire issues of the world, and shape them 
                    into strong individuals molding them into the leaders of tomorrow. */}
                    In the year 2012, we embarked on a remarkable journey, where we sensed and acknowledged a profound need for platforms where passionate young minds can showcase their intellect and character. 
                    Thus, with unwavering determination of making a difference, we introduced Model United Nations (MUN) to the community, and with each passing year, we have consistently elevated our standards, impacting the lives of thousands. 
                    Those who have graced our MUN with their presence can attest to the indelible mark those two days of discussion, deliberation and networking leave, shaping their perspectives and enhancing their personal growth. 
                    <br/><br/>

                    {/* We have organized 12 MUN conferences till now and have hosted approximately 2500+ delegates in total, from 20+ 
                    countries, 25+ states, and 350+ institutions. */}
                     
                     JECRC MUN is more than just a conference; it is an experience that goes beyond the committee rooms. It's a celebration of ideas, a platform for collaboration, and a journey of personal and academic growth. 
                     Join us as we create a space where students not only express their perspectives but also refine their skills to contribute to a better, more interconnected world. <br/><br/>

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
  