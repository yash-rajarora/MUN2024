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
        bg={'green.50'}
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
                    color={'green.500'}
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
                  Someone wise once said it is better to debate a question without settling it than to settle a question without debate.<br/><br/><br/>

                  Zero Hour Summit is a  one-day in-house debate competition that will discuss agendas in different committees ranging 
                  from technology to socio-economic arenas. 200-220 students getting together and trying to make their point heard and 
                  valued is an interesting day to imagine for sure. Everything and anything that can cause different people to differ in 
                  opinion will be a possible agenda. <br/><br/><br/>

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
