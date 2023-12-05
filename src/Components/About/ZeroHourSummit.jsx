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
                  Someone wise once said it is better to debate a question without settling it than to settle a question without debate.<br /><br />
                  JECRC MUN is immensely scornful to announce another triumphant event that once again raised their benchmark across the 
                  state, Zero Hour Submit 2. The event was organized in JECRC College on the 3rd of December 2022 by JECRC Model UN; a 
                  student-driven debating event that is a "360-minute battle of opinion" for campus students, who aspired to overcome 
                  their dread of public speaking.<br /><br />
                  ZHS was planned and organized in such a way as to furnish students from 1st to 4th year with a platform to voice up their
                  discussion about national and international issues and environmental justice. The competition saw the participation of 
                  250+ debaters from campus, and the Executive Board included esteemed final-year students of Laws background. The 
                  atmosphere was electric as the participants eagerly awaited the start of the competition. The entire debate session was 
                  divided into committees to discuss the following agendas:<br /><br />

                  1. The reservation system in India<br /><br />
                  2. Privacy right<br /><br />
                  3. A world with A.I.<br /><br />
                  4. Millennials vs Gen Z.<br /><br />
                  The debate topics in Zero Hour Submit were current and relevant issues, ranging from politics to social. Every team 
                  comprised 3 participants, who had to deliver their arguments in front of a panel of judges. A fair chance to present 
                  their viewpoints and rebut opposing arguments. <br /><br />
                  Criteria of Judgement: Teams were evaluated based on their content, delivery, and overall performance. Judges were 
                  looking for a well-constructed argument, supported by relevant evidence delivered with conviction. To begin with, every 
                  participant spoke their mind on their cases.The session was a kaleidoscope of opinions, thoughts, and perspectives that 
                  enhanced the knowledge and understanding of the topics. The talent we saw in ZHS'22 makes us believe in the bright future
                  of JECRC in the coming years.
                  The debaters displayed confidence in presenting their arguments and with so much of hot discussions and debating, 2 teams
                  from each agenda were chosen as the winner and runner-up. The students at Zero Hour Summit 2.0, experienced exhilarating 
                  sessions of debate and discussion on burning topics.
                  Learning: The day-long sessions taught students the art of political analysis and problem-solving. The students learned 
                  the finer nuances of conducting meaningful research and oratory skills. The event marked an end with the prize 
                  distribution ceremony for the award winners.
                  With that JECRC MUN, aspire to organize more such events to build the leaders for tomorrow. Because here at JECRC MUN we 
                  believe, words are sharper than the sword<br /><br />
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
