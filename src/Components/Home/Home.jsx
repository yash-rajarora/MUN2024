import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Grid,
  useDisclosure,
  Tabs,
  TabList, 
  TabPanels, 
  Tab,
  TabPanel
} from '@chakra-ui/react';
import React from 'react';
import shrey from "../../Assets/testimonials/shrey.jpg";
import sarthak from "../../Assets/testimonials/sarthak.jpg";
import rishit from "../../Assets/testimonials/rishit.jpg";
import saloni from "../../Assets/testimonials/saloni.jpg";
import logo from '../../Assets/Logos/mun2023.png';
import bg from '../../Assets/Logos/bg2.webp';
import intro from '../../Assets/images/aboutIntro.jpg';
import unscpic from '../../Assets/Logos/unsc.png';
import aippm from'../../Assets/Logos/aippm.png';
import ecofin from'../../Assets/Logos/ecofin.webp';
import ip_logo from '../../Assets/Logos/ip-logo.png';
import unhrc from '../../Assets/Logos/UNHRC.png';
import unga from '../../Assets/Logos/UNGA.png';
import zhs from '../../Assets/images/Group 133.png';
import Speaker from './speaker.json'

import './Home.css';
import {
  FaAngellist,
  FaBookReader,
  FaConnectdevelop,
  FaCreativeCommonsBy,
  FaRegCalendarCheck,
  FaRegShareSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Home = () => {
  const { onClose } = useDisclosure();
  return (
    <>
      {/* HOME PAGE  */}
      <Box className="landingPage">
        <Container
          minWidth={'80%'}
          height="100%"
          display={'flex'}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image width={['190px', '200px']} alignContent="center" src={logo} />
          <Heading
            color={'green.500'}
            fontSize={['3xl', '5xl']}
            fontWeight="semibold"
            textAlign={'center'}
          >
            JECRC MUN 
          </Heading>
          <Heading
            color={'green.500'}
            fontSize={['xl', '3xl']}
            fontWeight="semibold"
            textAlign={'center'}
          >
          PRESENTS
          </Heading>
          {/* <Heading
            color={'green.500'}
            fontSize={['2xl', '4xl']}
            fontWeight="semibold"
          >
            12th Edition
          </Heading> */}
          {/* <Heading textAlign={'center'} color={'green.500'} fontSize={['3xl', '5xl']}>
            Empowering Deliberations <br /> Shaping The World <br /> 
          </Heading> */}
          
          <Heading textAlign={'center'} color={'white'} fontSize={['3xl', '5xl']} >
          ZERO HOUR SUMMIT 
          </Heading>
          <Heading textAlign={'center'} color={'white'} fontSize={['l', '2xl']} >
          3rd Edition
          </Heading>
          <Heading textAlign={'center'} color={'white'} fontSize={['l', '2xl']} >
          9th December 2023
          </Heading>
          <Link to="https://forms.gle/bZ7JR1bmB8wiTYTs5">
            <Button
              variant={'outline'}
              size="lg"
              border="2px solid white"
              fontWeight="medium"
              color="green.500"
              marginTop={'10'}
              p="7"
              background={'rgba(255, 255, 255,1)'}
              _hover={{
                background: 'green.600',
                color: 'rgba(255,255,255,1)',
                transition: 'background 0.3s ease', // Add a smooth transition
              }}
              >
              
            
            
              <Heading fontSize={['2xl', '3xl']}>Register Now !</Heading>
            </Button>
          </Link>
        </Container>
      </Box>
      {/* ABOUT SECTION  */}
      <Box minHeight={'100vh'} bgColor="green.50">
        <Container
          minWidth={'85%'}
          minHeight="100vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={['center', 'flex-start']}
        >
          <Stack
            display={'flex'}
            flexDir={['column', 'row']}
            marginTop={'10'}
            alignItems={['center', 'flex-start']}
          >
            <VStack
              alignItems={['center', 'flex-start']}
              width={['100%', '50%']}
            >
              <Heading
                fontSize={['25px', '35px']}
                fontWeight="semibold"
                color={'blackAlpha.800'}
                fontStyle="italic"
              >
                About Us
              </Heading>
              
              {/* <Image width={'30%'} src={line} /> */}
              <Text
                fontSize={['18px', '22px']}
                letterSpacing="1px"
                fontWeight={'medium'}
                textAlign={'justify'}
              >
                JECRC MUN is a community established with the aim of creating a society for youth to discuss, debate and deliberate 
                present-day crises contributing towards solutions for global imbalance.

                Focusing on the need to value ideas and approach toward solutions for the atrocities around the globe, some like-minded 
                individuals figured a need for such a platform for people to discuss and deliberate With the laying of the foundation by 
                Shri Kulbhushan Kothari, our journey began in 2012, with us being the first institution in Jaipur and second in Rajasthan 
                to introduce Model UN to the crowd.
              </Text>
              <Link onClick={onClose} to="/munconference">
              <Button 
              variant={'solid'} 
              colorScheme="green" 
              size={['md', 'lg']}
              >
                Read More
              </Button>
              </Link>
            </VStack>
            <VStack alignItems={['center', 'flex-end']} pt={'8%'} width={['100%', '50%']}>
              <Image width={['85%', '80%']} src={intro} boxShadow="0px 0px 32px rgba(0, 0, 0, 0.6)"/>
            </VStack>
          </Stack>
          <Stack width={'100%'} marginTop={['10', '20']} alignItems={'center'}>
            <Box className="aboutBoxes">
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>2500+</span> <br />
                  delegates
                </Heading>
              </Box>
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>100+</span> <br />
                  INTERNATIONAL DELEGATES
                </Heading>
              </Box>
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>350+</span> <br />
                  PARTICIPATION INSTITUTES
                </Heading>
              </Box>
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>15 Lakh+</span> <br />
                  MASSIVE OUTREACH
                </Heading>
              </Box>
            </Box>
          </Stack>
          <Stack
            display={'flex'}
            flexDir={['column', 'row-reverse']}
            marginTop="20"
            alignItems={['center', 'flex-start']}
            marginBottom="20"
          >
            <VStack alignItems={['center', 'flex-end']} width={['100%', '50%']}>
              <Heading
                color={'green.600'}
                fontSize={['25px', '40px']}
                fontStyle="italic"
              >
                ZERO HOUR SUMMIT
              </Heading>
              {/* <Image width={'30%'} src={line} /> */}
              <Text
                fontSize={['18px', '22px']}
                letterSpacing="1px"
                fontWeight={'medium'}
                textAlign={'justify'}
              >
              Someone wise once said it is better to debate a question without settling it than to settle a question without debate.

              Zero Hour Summit is a  one-day in-house debate competition that will discuss agendas in different committees ranging from 
              technology to socio-economic arenas. 200-220 students getting together and trying to make their point heard and valued is 
              an interesting day to imagine for sure. Everything and anything that can cause different people to differ in opinion will 
              be a possible agenda. 

              </Text>
              <Box display={'flex'} pb={['10','0']} pt={['5','5']}>
              <Link onClick={onClose} to="/BackgroundGuideZhs">
              <Button variant={'solid'} colorScheme="green" size={['md', 'lg']} mr={'5'}>
                BACKGROUND GUIDE 
              </Button>
              </Link>
              <Link onClick={onClose} to="/zerohoursummit">
              <Button variant={'solid'} colorScheme="green" size={['md', 'lg']}>
                Read More
              </Button>
              </Link>
              </Box>
            </VStack>
            <VStack
              alignItems={['center', 'flex-start']}
              justifyContent={['center', 'center']}
              width={['100%', '50%']}
            >
              <Image width={['85%', '80%']} src={zhs} />
            </VStack>
          </Stack>
        </Container>
      </Box>
      {/* JECRC MUN EXCELLENCIES  */}
      <Box
        backgroundAttachment={'fixed'}
        backgroundColor="blackAlpha.600"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat={'no-repeat'}
        backgroundSize="cover"
      >
        <Container background={'blackAlpha.800'} minWidth="100%">
          <Container
            minWidth={'85%'}
            minHeight="80vh"
            display="flex"
            flexDir={'column'}
            justifyContent="center"
            alignItems={'center'}
          >
            <Heading
              color={'white'}
              fontSize={['22px', '35px']}
              fontWeight="semibold"
              marginTop={'20'}
            >
              JECRC MUN EXCELLENCIES
            </Heading>
            <SimpleGrid
              marginTop={'20'}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            >
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaBookReader color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    SKILLS
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    JECRC MUN is an ideal place to hone your public speaking,
                    writing and analytical skills. All writing piece will
                    involve your research and analytical abilities. Public
                    speaking is a fundamental part of the conference and it
                    requires you to adapt to several situations to have a strong
                    and effective debate.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaConnectdevelop color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    NETWORKING
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    JECRC MUN will provide you with an opportunity to meet many
                    talented people throughout the country, discover new
                    cultures and their different perspective. You can grow your
                    network for the future by making new contacts. You also
                    build precious memories and friendships that will last
                    forever.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaRegShareSquare color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    LEARN FROM OTHERS
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    Model UN is a great educational tool that provides extremely
                    valuable benefits to students. At JECRC MUN, students learn
                    from each other. MUN conferences are fun and during the
                    conference, you will meet other delegates and senior
                    delegates who can help you in learning new things.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Container>
        </Container>
      </Box>
      {/* CAMPUS AMBASSADOR  */}
      <Box
        backgroundAttachment={'fixed'}
        backgroundColor="blackAlpha.600"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat={'no-repeat'}
        backgroundSize="cover"
      >
        <Container background={'blackAlpha.800'} minWidth="100%">
          <Container
            minWidth={'85%'}
            minHeight="80vh"
            display="flex"
            flexDir={'column'}
            justifyContent="center"
            alignItems={'center'}
          >
            <Heading
              color={'white'}
              fontWeight="semibold"
              fontSize={['22px', '35px']}
              marginTop={'20'}
            >
              Become Campus Ambassador
            </Heading>
            <SimpleGrid
              marginTop={'20'}
              marginBottom={'20'}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            >
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaRegCalendarCheck color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    Perks and Entitlements
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    Campus Ambassadors of JECRC MUN are entitled to additional
                    benefits in form of concessions and discounts. This is an
                    opportunity to make your conference experience more
                    fulfilling, by paying the fee simply with your networking
                    skills.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaCreativeCommonsBy color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    Networking Skills
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    As a campus ambassador you get to enhance your network
                    within your campus with the prestigious tag of JECRC MUN.
                    Get an edge at being heard by your peers and connect with
                    them at a greater level, honing your interpersonal skills.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaAngellist color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    Recognition
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    The merits of being a Campus Ambassador don't end with the
                    conference, but stay with you thereafter. A certificate
                    recognizing your milestones will be conferred upon you,
                    investing the repute and excellence of JECRC MUN on you as
                    well.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Container>
        </Container>
      </Box>
      {/* COMMITIES  */}
      <Box width={'100%'} backgroundColor="green.50" minHeight={'100vh'} pb={'20'}>
          <Container
            minWidth={'85%'}
            minHeight="80vh"
            display="flex"
            flexDir={'column'}
            justifyContent="center"
            alignItems={'center'}
          >
            <Heading color={'green.500'} letterSpacing="2px" marginTop={'20'}>
              {' '}
              COMMITTEES AND AGENDAS FOR THIS EDITION
            </Heading>
            <Card
              width={['100%', '80%']}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="filled"
              colorScheme={'green'}
              marginTop={'10'}
            >
             <Image
                objectFit="contain"
                maxW={{ base: '100%', sm: '300px' }}
                src={unscpic}
                alt="Caffe Latte"
              /> 

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body" textAlign="start">
                  United Nations Security Council (UNSC)
                  </Heading>

                  <Text py="2" fontSize={['15px', '20px']} textAlign={'justify'}>
                    Urgent discussions on gun control, and enforcement of measures intended to restrict the possession and the use of 
                    firearms.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              width={['100%', '80%']}
              direction={{ base: 'column', sm: 'row-reverse' }}
              overflow="hidden"
              variant="filled"
              marginTop={'10'}
            >
             <Image
                objectFit="contain"
                maxW={{ base: '100%', sm: '300px' }}
                src={aippm}
                alt="Caffe Latte"
              /> 
              

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body">
                  All India Political Parties Meet (AIPPM)
                  </Heading>
                  

                  <Text py="2" fontSize={['15px', '20px']}>
                  Deliberation on Union Budget, 2023 with special emphasis on unemployment and agriculture.

                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              width={['100%', '80%']}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="filled"
              marginTop={'10'}
            >
              <Image
                objectFit="contain"
                maxW={{ base: '100%', sm: '300px' }}
                src={unhrc}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body" textAlign="start">
                  United Nations Human Rights Council (UNHRC):
                  </Heading>
                  

                  <Text py="2" fontSize={['15px', '20px']} textAlign={'justify'}>
                  Protecting victims of human trafficking in conflict and post-conflict situations. (Special emphasis on women and children)
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              width={['100%', '80%']}
              direction={{ base: 'column', sm: 'row-reverse' }}
              overflow="hidden"
              variant="filled"
              marginTop={'10'}
            >
              <Image
                objectFit="contain"
                maxW={{ base: '100%', sm: '300px' }}
                src={ecofin}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body" textAlign="start">
                  Economic and Financial Affairs Council (ECOFIN)
                  </Heading>
                  

                  <Text py="2" fontSize={['15px', '20px']} textAlign="justify">
                  Discussion on the international banking crisis and its impact.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              width={['100%', '80%']}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="filled"
              marginTop={'10'}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '300px' }}
                src={unga}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body" textAlign="start">
                  Social, Humanitarian, and Cultural Committee (UNGA-SOCHUM)
                  </Heading>
                  

                  <Text py="2" fontSize={['15px', '20px']} textAlign="justify">
                  Addressing all forms of discrimination against people belonging to marginalized sexual orientations & gender identities.


                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              width={['100%', '80%']}
              direction={{ base: 'column', sm: 'row-reverse' }}
              overflow="hidden"
              variant="filled"
              marginTop={'10'}
            >
              <Image
                objectFit="contain"
                maxW={{ base: '100%', sm: '300px' }}
                src={ip_logo}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body" textAlign="left">
                  International Press (IP): 

                  </Heading>
                  

                  <Text py="2" fontSize={['15px', '20px']} textAlign="justify">
                  Reporter | Photographer | Caricaturist

                  </Text>
                </CardBody>
              </Stack>
            </Card>
            </Container>
        
      </Box>
      {/* TESTIMONIALS  */}
      <Box 
        backgroundAttachment={'fixed'}
        backgroundColor="blackAlpha.600"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat={'no-repeat'}
        backgroundSize="cover"
        
      >
      <Container background={'blackAlpha.800'} minWidth="100%">
        <Container
          maxWidth={['100%','85%']}
          minHeight="100vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
          pb={'5%'}
          pt={'5%'}
        >
          <Heading color={'white'} letterSpacing="2px" marginTop={'0'} marginBottom={'10'}>
              {' '}
              TESTIMONIALS
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(100%, 1fr))"
            
          >
            <Card size={"md"} width={['100%','90%']} justifySelf={'center'}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src={shrey}
                      size={'2xl'}
                    />
                    <Box>
                      <Heading size="lg" fontWeight={'semibold'}>SHREY BHARGAVA</Heading>
                    </Box>
                  </Flex>
                  
                </Flex>
              </CardHeader>
              <CardBody>
                <Text textAlign="justify" fontSize="17px">
                The JECRC Model United Nations Conference 2022 was a unique and impactful event that left a lasting impression on me.
                The emphasis on inclusivity and diversity created an atmosphere of respect and mutual understanding, while the engaging 
                agendas challenged me to think beyond traditional solutions. The conference provided me with practical skills such as 
                public speaking, negotiation, and critical thinking, which I believe will be invaluable in my future endeavors. The 
                opportunity to collaborate with like-minded individuals from around the world was also a highlight of the conference. 
                Overall, I would highly recommend the JECRC MUN to anyone looking to expand their horizons, develop practical skills, 
                and make a positive impact on the world
                </Text>
              </CardBody>
              
            </Card>
            <Card size="md" width={['100%','90%']} justifySelf={'center'}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src={sarthak}
                      size={'2xl'}
                    />
                    <Box>
                      <Heading size="lg" fontWeight={'semibold'} textTransform={'uppercase'}>Sarthak Agrawal</Heading>
                    </Box>
                  </Flex>

                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontSize="17px">
                The JECRC Model United Nations Conference was an unforgettable experience. The conference provided me with a platform to 
                discuss and debate complex global issues with a diverse group of individuals. The opportunity to interact with people from 
                different backgrounds and cultures allowed me to broaden my perspective and gain a deeper understanding of the world 
                around me. The event was expertly organized, with engaging agendas and thought-provoking discussions. I was impressed 
                by the professionalism and dedication of the organizers, who worked tirelessly to ensure that every participant had a 
                rewarding experience. Overall, the JECRC MUN Conference was a highly valuable and enriching experience that I would 
                highly recommend to anyone interested in global affairs and diplomacy
                </Text>
              </CardBody>
            </Card>
            <Card size="md" width={['100%','90%']} justifySelf={'center'}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src={saloni}
                      size={'2xl'}
                    />
                    <Box>
                      <Heading size="lg" fontWeight={'semibold'} textTransform={'uppercase'}>Saloni Vyas</Heading>
                    </Box>
                  </Flex>
                  
                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontSize={'17px'}>
                The JECRC MUN Conference 2022 was a conference unlike any other I have ever attended. The organizers did an outstanding 
                job of creating an environment that fostered intellectual curiosity, collaboration, and diplomacy. The agendas were 
                thought-provoking, and the discussions were engaging, challenging me to think critically about global issues.

                What made the conference truly unique, however, was the networking opportunities it provided. I was able to meet and 
                network with fellow delegates from all over the country, and the conversations we had were insightful and inspiring. 
                I learned so much from the diverse range of perspectives and experiences shared by my fellow delegates, and the 
                connections I made will undoubtedly last a lifetime.

                The organization of the conference was also impressive, and the organizers went out of their way to ensure that every 
                delegate had a positive and rewarding experience. Overall, I would highly recommend the JECRC Model UN Conference to 
                anyone looking to expand their knowledge, network with like-minded individuals, and gain valuable skills for the future.
                </Text>
              </CardBody>
              
            </Card>
            <Card size="md" width={['100%','90%']} justifySelf={'center'}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src={rishit}
                      size={'2xl'}
                    />
                    <Box>
                      <Heading size="lg" textTransform={'uppercase'} fontWeight={'semibold'}>Rishit Mangal</Heading>
                    </Box>
                  </Flex>
                  
                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontSize={'17px'}>
                JECRC MUN is an excellent opportunity for students who want to enhance their knowledge of international relations, 
                diplomacy, and public speaking. The conference provides a stimulating and challenging environment that encourages 
                delegates to reach their full potential, and I would highly recommend it to anyone looking for an enriching MUN experience.
                </Text>
              </CardBody>
              
            </Card>
          </SimpleGrid>
        </Container>
        </Container>
      </Box>
      
      {/* EB SECTION */}

      <Box width={'100%'} backgroundColor="green.50" minHeight={'100vh'} pb={10}>
        <Container
          minWidth={'85%'}
          minHeight="80vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
        >
          <Heading color={'green.500'} letterSpacing="2px" marginTop={'20'} pb={10}>
            {' '}
            EXECUTIVE BOARD FOR MUN 2023
          </Heading>
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
            <Grid
              templateColumns={['repeat(2, 1fr)', 'repeat(6, 1fr)']}
              gap={5}
              ml={['10%','10%']}
            >
              <Tab>UNSC</Tab>
              <Tab>UNGA SOCHUM</Tab>
              <Tab>AIPPM</Tab>
              <Tab>UNHRC</Tab>
              <Tab>ECOFIN</Tab>
              <Tab>IP</Tab>
            </Grid>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={5}
                ml={['0','10%']}
              >
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxPNnt.md.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      SHIVANSH AHUJA
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    President
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxLH6F.md.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      MUSKAN PRAJAPAT
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    Vice President
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Grid>
        
                </TabPanel>
                <TabPanel>
                  <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={5}
                ml={['0','10%']}
              >
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxtDUF.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      GOVIND GOYAL
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    CHAIRPERSON
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxtpRa.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      JYESHTA SINGH
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    Vice CHAIRPERSON
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={5}
                ml={['0','10%']}
              >
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxD9Dv.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      RAHUL MENON
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    MODERATOR
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxD2iN.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      LOVISHA JINDAL
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    DEPUTY M0DERATOR
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={5}
                ml={['0','10%']}
              >
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxDFfI.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      ARYAN SINGH
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    CHAIRPERSON
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxDJxR.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      BHAVYA PAREEK
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    Vice CHAIRPERSON
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={5}
                ml={['0','10%']}
              >
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxtyOJ.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      RISHABH MITTAL
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    CHAIRPERSON
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxtmHg.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      PEHAL
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    Vice CHAIRPERSON
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={5}
                ml={['0','10%']}
              >
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUxDdVp.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      RIYA CHOITHANI
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    IP HEAD
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image src="https://iili.io/HUzAzIs.md.jpg" alt="Picture" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      fontSize={'28'}
                      lineHeight="tight"
                      isTruncated
                    >
                      DIVYESH GUPTA
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      
                      textTransform="uppercase"
                    >
                    head of photography
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Box>

      {/* CHIEF GUESTS  */}
      <Box
        backgroundAttachment={'fixed'}
        backgroundColor="blackAlpha.600"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat={'no-repeat'}
        backgroundSize="cover"
      >
        <Container background={'blackAlpha.800'} minWidth="100%">
          <Container
            minWidth={'85%'}
            minHeight="100vh"
            display="flex"
            flexDir={'column'}
            justifyContent="center"
            alignItems={'center'}
          >
            <Heading color={'white'} letterSpacing="2px" marginTop={'0'} marginBottom={'10'}>
              {' '}
              CHIEF GUEST
            </Heading>
            <Heading color={'white'} letterSpacing="2px" marginTop={'20'}>
              {' '}
              To be Announced Soon ....
            </Heading>
            {/* <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: '100%', md: '85%' }}
              height={{ sm: '70%', md: '70%' }}
              direction={{ base: 'column', md: 'row' }}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              padding={4}
              marginBottom={10}
              >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={
                    'https://attend.ieee.org/r10htc-2021/wp-content/uploads/sites/322/image0-1536x1536.jpeg'
                  }
                />
                
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  Ramanan Ramanathan
                </Heading>
                
                <Text
                  color={useColorModeValue('gray.700', 'gray.400')}
                  textAlign={["left","justify"]}
                  px={3}>
                  
                  Ramanan Ramanathan is a highly esteemed figure in the field of innovation and technology in India. He is a former 
                  (First) Mission Director of Atal Innovation Mission, a flagship program of the Indian Government that aims to promote
                  innovation and entrepreneurship in the country. Ramanan also served as an Additional Secretary at NITI Aayog, a policy
                  think-tank that works towards sustainable development goals in India. With over two decades of experience in
                  innovation and entrepreneurship, Ramanan has made significant contributions to the growth of the startup ecosystem
                  in India. He has been instrumental in shaping several initiatives aimed at nurturing the next generation of 
                  innovators and entrepreneurs in the country. Ramanan is a highly sought-after speaker and has delivered talks on 
                  innovation and entrepreneurship at various national and international conferences. His vast experience and 
                  insightful perspectives on the subject make him an invaluable addition to any forum that focuses on innovation,
                  technology, and entrepreneurship.
                  
                </Text>
                

                <Stack
                  width={'100%'}
                  mt={'2rem'}
                  direction={'row'}
                  padding={2}
                  justifyContent={'space-between'}
                  alignItems={'center'}>
                  <Button
                    flex={1}
                    width={'100%'}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'green.500'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'green.500',
                    }}
                    _focus={{
                      bg: 'green.500',
                    }}>
                    <Link onClick={onClose} to="/Ramanan">
                    Read More
                    </Link>
                  </Button>
                  <Button
                    flex={1}
                    width={'100%'}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _focus={{
                      bg: 'blue.500',
                    }}>
                    <Link onClick={onClose} to="https://www.linkedin.com/in/rramanan27">
                    LinkedIn
                    </Link>
                  </Button> 

                
                </Stack>
              </Stack>
            </Stack> */}
            {/* <Card
              width={['100%', '90%']}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="filled"
              colorScheme={'green'}
              marginTop={'10'}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '300px' }}
                src={saloni}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body">
                    Satish C. Mehta
                  </Heading>
                  <Text size="md" fontStyle={'italic'}>
                    Former Indian Ambassador to Kuwait
                  </Text>

                  <Text py="2" fontSize={['15px', '18px']}>
                    Ambassador Satish C. Mehta joined the Indian Foreign Service
                    in 1983 and retired as Director General, Indian Council for
                    Cultural Relations (ICCR) in September, 2015. Earlier, after
                    serving in France, Ivory Coast and Italy, he was Political
                    Advisor to UN Head of Mission in Haiti during UN Peace
                    Keeping Operations in 1995-96. He served as Director in the
                    Indian Prime Minister's Office from 1997 to 1999 dealing
                    with the strategic sector- External Affairs, Defence, Atomic
                    Energy, Space and S&T. During July 1999 to July 2002 he was
                    Political Counsellor in the Indian Mission to the United
                    Nations in New York, from where he went as Deputy Chief of
                    Mission in Tel Aviv from 2002-2005. He served as India's
                    Consul General in Toronto from 2005-2008 and as Joint
                    Secretary of Nepal and Bhutan Division in the Ministry of
                    External Affairs from October 2008 until July, 2011. He was
                    Indian Ambassador in Kuwait from July 2011 until November,
                    2013.
                  </Text>
                </CardBody>
              </Stack>
            </Card> */}
            {/* <Button
              variant={'solid'}
              colorScheme="green"
              size={'lg'}
              color="white"
              marginTop={'20'}
              marginBottom={'20'}
            >
              View More
            </Button> */}
          </Container>
        </Container>
      </Box>

      {/* PREVIOUS SPEAKER */}

      <Box width={'100%'} backgroundColor="green.50" minHeight={'100vh'} pt={5} pb={"4%"}>
          <Heading
            textAlign={'center'}
            color="black"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            OUR PREVIOUS SPEAKER
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['0','10%']}
          >
          {Speaker &&
              Speaker.map(Speakers => {
                const { name, src, desc, } = Speakers;
                return (
                <Box textAlign="center">
                  <Box
                    w="200px"
                    h="200px"
                    borderRadius="full"
                    overflow="hidden"
                    mx="auto"
                  >
                    <Image src={src} objectFit="cover"/>
                  </Box>
                  <Heading as="h2" fontSize="xl" mt={5} mb={2}>
                    {name}
                  </Heading>
                  <Box>{desc}</Box>
                </Box>
                );
              })}          
          </Grid>
      </Box>
    </>
  );
};

export default Home;
