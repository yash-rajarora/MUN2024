import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Card,
  CardBody,
} from '@chakra-ui/react';
import AboutBanner from './AboutBanner';

const MunConference = () => {
  return (
    <>
    <AboutBanner munheading={"ABOUT US"}/>
      <Box
        bg={' #FEFCE7'}
      >
        <Container  minWidth="100%">
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
                <CardBody paddingLeft={['5','20']} paddingRight={['5','20']}>
                  <Heading
                    className="about_heading"
                    color={'#E74E00'}
                    fontSize={['25px', '40px']}
                    marginTop={'10'}
                    marginBottom={'10'}
                    textAlign="center"
                    fontWeight={'semibold'}
                  >
                    Zero Hour Summit
                  </Heading>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                  >
                  {/* Someone wise once said it is better to debate a question without settling it than to settle a question without debate.*/}
                  Zero Hour Summit (ZHS) is a debating competition exclusively tailored for JECRC Foundation students and organized by the esteemed JECRC Model United Nations (MUN) Society. 
                  It is a platform meticulously crafted to kindle an interest in debating and cultivate an understanding of contemporary issues vital for navigating today's complex world. <br></br>
                 
                 
                  {/* Zero Hour Summit is a  one-day in-house debate competition that will discuss agendas in different committees ranging 
                  from technology to socio-economic arenas. 200-220 students getting together and trying to make their point heard and 
                  valued is an interesting day to imagine for sure. Everything and anything that can cause different people to differ in 
                  opinion will be a possible agenda.  */}
                  The event unfolds with four distinct committees deliberating on equally diverse agendas, each designed to stimulate intellectual discourse and ignite a passion for global affairs among participants. 
                  Moreover, ZHS serves as a precursor to the grand JECRC MUN conference held in the subsequent semesters, offering participants a glimpse into the world of diplomacy and fostering holistic personality development. As renowned philosopher and statesman Edmund Burke once said, "All that is necessary for the triumph of evil is for good men to do nothing." At ZHS, we believe in the power of healthy debate as a cornerstone of progress and enlightenment. 
                  Through respectful discourse and the exchange of diverse perspectives, we not only challenge our own beliefs but also foster understanding and empathy. 
                  <br/><br/><br/>

                  Students get a chance to take on their peers in debates and grow together into better orators, thinkers, and 
                  expressionists. Zero Hour Summit brings about a positive wave of discussions on the campus leading to a healthier 
                  overall learning environment.<br/><br/><br/>
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

export default MunConference;
