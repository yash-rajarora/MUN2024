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

const MunConference = () => {
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
                  <Heading
                    className="about_heading"
                    color={'green.500'}
                    fontSize={['25px', '40px']}
                    marginTop={'10'}
                    marginBottom={'10'}
                    textAlign="center"
                    fontWeight={'semibold'}
                  >
                    MUN CONFERENCE
                  </Heading>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                  >
                    JECRC Model United Nations (MUN) is a dynamic platform where intellect meets diplomacy, and leaders of tomorrow are 
                    nurtured. Our MUN Conference, a flagship event, stands as a testament to our commitment to fostering critical thinking,
                    global awareness, and leadership skills among students.

                  </Text>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    marginTop={'10'}
                  >
                    {/* Each year, our MUN Conference transforms the JECRC campus into a vibrant hub of diverse perspectives and meaningful 
                    discussions. Drawing students from across the nation, this two-day event immerses participants in the intricate world 
                    of national and international committees, offering a unique opportunity to engage in serious, impactful dialogue. */}
                    JECRC MUN is a community established with the aim of creating a society for youth to discuss, debate and deliberate 
                    present-day crises contributing towards solutions for global imbalance. 
                  </Text>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    marginTop={'10'}
                  >
                    {/* JECRC MUN is more than just a conference, it is an experience that goes beyond the committee rooms. It's a celebration 
                    of ideas, a platform for collaboration, and a journey towards personal and academic growth. Join us as we create a 
                    space where students not only articulate their views but also develop the skills to shape a better, more interconnected
                    world. */}
                    Focusing on the need to value ideas and approach toward solutions for the atrocities around the globe, some like-minded
                    individuals figured a need for such a platform for people to discuss and deliberate With the laying of the foundation 
                    by Shri Kulbhushan Kothari, our journey began in 2012, with us being the first institution in Jaipur and second in 
                    Rajasthan to introduce Model UN to the crowd. Commemorating the 12 years of legacy, we stand firm as the host of 
                    exceptional MUN conferences in the state. With the collective efforts of our enthusiastic and extensive organizing 
                    committees over the years, we have arisen as one of the best and most promising Model UN societies in India. 

                  </Text>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    marginTop={'10'}
                  >
                    {/* Explore the JECRC MUN Conference – where ideas converge, leaders emerge, and global perspectives take center stage. */}
                    We aspire to involve youth in international dialogue, deliberate upon the dire issues of the world, and shape them 
                    into strong individuals molding them into the leaders of tomorrow. 

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

export default MunConference;
