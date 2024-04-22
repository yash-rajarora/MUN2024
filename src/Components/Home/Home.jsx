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
  Badge,
  Center,
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
  TabPanel,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import test1 from '../../Assets/testimonials/testimonial1.jpg'
import pratham from '../../Assets/testimonials/pratham.jpeg'
import shyam from '../../Assets/testimonials/shyam.jpeg'
import logo from '../../Assets/Logos/mun24.png';
import bg from '../../Assets/Logos/bg2.webp';
import intro from '../../Assets/images/aboutIntro.jpg';
import imf from '../../Assets/Logos/IMF.png';
import log_sabha from'../../Assets/Logos/LogSabha.png';
import HCC from'../../Assets/Logos/HCC.png';
import ip_logo from '../../Assets/Logos/ip-logo.png';
import unhrc from '../../Assets/Logos/UNHRC.png';
import unsc from '../../Assets/Logos/unsc.png'
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
            color={'#E74E00'}
            fontSize={['3xl', '80px']}
            fontWeight="bold"
            textAlign={'center'}
          >
            JECRC MUN 
          </Heading>
          {/* <Heading
            color={'green.500'}
            fontSize={['xl', '3xl']}
            fontWeight="semibold"
            textAlign={'center'}
          >
          PRESENTS
          </Heading> */}
          <Heading
            color={'#E74E00'}
            fontSize={['xl', '4xl']}
            fontWeight="semibold"
            pb={'5'}
          >
            13th Edition
          </Heading>
          {<Heading textAlign={'center'} color={'white'} fontSize={['3xl', '4xl']} fontWeight={'semibold'} pb={'5'}>
            Empowering Deliberations <br /> Shaping The World <br /> 
          </Heading>}
          
          {/* <Heading textAlign={'center'} color={'white'} fontSize={['3xl', '5xl']} >
          ZERO HOUR SUMMIT 
          </Heading> */}
          {/* <Heading textAlign={'center'} color={'white'} fontSize={['l', '2xl']} >
          13th Edition
        </Heading> */}
          <Heading textAlign={'center'} color={'#E74E00'} fontSize={['xl', '4xl']} >
          11th - 12th May
          </Heading>
          <Link to="https://forms.gle/8tCQpT9fqF7tLTc98">
            <Button
              variant={'outline'}
              size="lg"
              border="2px solid white"
              fontWeight="medium"
              color="#E74E00"
              marginTop={'5'}
              p="7"
              background={'#FEFCE7'}
              _hover={{
                background: '#E74E00',
                color: '#FEFCE7',
                transition: 'background 0.3s ease', // Add a smooth transition
              }}
              >
              
            
            
              <Heading fontSize={['2xl', '3xl']}>Register Now !</Heading>
            </Button>
          </Link>
        </Container>
      </Box>
      {/* ABOUT SECTION  */}
      <Box minHeight={'100vh'} bgColor="#FEFCE7">
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
              <Link onClick={onClose} to="/Aboutus">
              <Button
              colorScheme='orange' 
              variant={'solid'} 
              bgColor="#E74E00" 
              color={'white'}
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
          <Stack width={'100%'} marginTop={['10', '20']} marginBottom={['10', '20']} alignItems={'center'}>
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
              <Card size={'lg'} background={'#FEFCE7'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaBookReader fa-regular color="#E74E00" />
                  </Heading>
                 
                </CardHeader>
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
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    {/* JECRC MUN is an ideal place to hone your public speaking,
                    writing and analytical skills. All writing piece will
                    involve your research and analytical abilities. Public
                    speaking is a fundamental part of the conference and it
                    requires you to adapt to several situations to have a strong
                    and effective debate. */}
                    JECRC MUN is an ideal place to hone your public speaking, writing, and analytical skills. All writing pieces will involve your research and analytical abilities. 
                    Public speaking is a fundamental part of the conference, requiring you to adapt to several situations to engage in strong and effective debates. 
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#FEFCE7'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaConnectdevelop color="#E74E00" />
                  </Heading>
                  
                </CardHeader>
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
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    {/* JECRC MUN will provide you with an opportunity to meet many
                    talented people throughout the country, discover new
                    cultures and their different perspective. You can grow your
                    network for the future by making new contacts. You also
                    build precious memories and friendships that will last
                    forever. */}
                    JECRC MUN will provide you with an opportunity to meet many talented people from across the country, discover new cultures, and gain different perspectives. 
                    You can expand your network for the future by establishing new contacts. 
                    Additionally, you will create cherished memories and forge friendships that will last a lifetime. 
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#FEFCE7'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaRegShareSquare color="#E74E00" />
                  </Heading>
                  
                </CardHeader>
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
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    {/* Model UN is a great educational tool that provides extremely
                    {/* valuable benefits to students. At JECRC MUN, students learn
                    from each other. MUN conferences are fun and during the
                    conference, you will meet other delegates and senior
                    delegates who can help you in learning new things. */}
                    Model UN is a great educational tool that offers extremely valuable benefits to students. At JECRC MUN, students learn from each other. 
                    MUN conferences are enjoyable, and during the conference, you will meet other delegates and senior delegates who can help you learn new things. 
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
              BECOME CAMPUS AMBASSADOR
            </Heading>
            <SimpleGrid
              marginTop={'20'}
              marginBottom={'20'}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            >
              <Card size={'lg'} background={'#FEFCE7'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaRegCalendarCheck color="#E74E00" />
                  </Heading>
                  
                </CardHeader>
                <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    PERKS AND ENTITLEMENTS
                  </Heading>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    Campus Ambassadors of JECRC MUN are entitled to additional benefits in the form of concessions and discounts. 
                    This is an opportunity to make your conference experience more fulfilling, by paying the fee simply with your networking skills. 
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#FEFCE7'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaCreativeCommonsBy color="#E74E00" />
                  </Heading>
                  
                </CardHeader>
                <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    NETWORKING SKILLS
                  </Heading>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    {/* As a campus ambassador you get to enhance your network
                    within your campus with the prestigious tag of JECRC MUN.
                    Get an edge at being heard by your peers and connect with
                    them at a greater level, honing your interpersonal skills. */}
                    As a campus ambassador, you get to enhance your network within your campus with the prestigious tag of JECRC MUN. 
                    Gain an edge in being heard by your peers and connect with them at a deeper level, honing your interpersonal skills. 
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#FEFCE7'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaAngellist color="#E74E00" />
                  </Heading>
                 
                </CardHeader>
                <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    RECOGNITION
                  </Heading>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    {/* The merits of being a Campus Ambassador don't end with the
                    conference, but stay with you thereafter. A certificate
                    recognizing your milestones will be conferred upon you,
                    investing the repute and excellence of JECRC MUN on you as
                    well. */}
                    The merits of being a Campus Ambassador don't end with the conference, but stay with you thereafter. 
                    A certificate recognizing your milestones will be conferred upon you, investing the reputation and excellence of JECRC MUN in you as well. 
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Container>
        </Container>
      </Box>
      
      {/* COMMITIES  */}

      <Box width={'100%'} backgroundColor=" #FEFCE7" minHeight={'100vh'} pb={'20'}>
        <Container
          minWidth={['100%','85%']}
          minHeight="80vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
        >
          <Heading color={'#E74E00'} letterSpacing="2px" marginTop={'20'} alignContent={'center'}>
            
            COMMITTEES AND AGENDAS FOR THIS EDITION
          </Heading>
          <SimpleGrid
            marginTop={'5'}
            marginBottom={['5','20']}
            mx={['10','0']}
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
          >
            <Card size={'lg'} background={'#ffd9b3'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                  <Image src={unhrc} alt="unhrc" height={'200px'}/>
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'18px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    United Nations High Commissioner for Refugees(UNHCR)
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    Addressing Discrimination Against Refugees and Ensuring the Protection of Their Rights, with Special Emphasis on the Syrian Refugee Crisis
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#ffffff'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                  <Image src={log_sabha} alt="Log Sabha" height={['100px','200px']}/>
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'18px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                    pb={['0','5']}
                  >
                    {' '}
                    Lok Sabha 
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    Enhancing Governance and Environmental Conservation in Ladakh (demands for statehood, tribal status under the Sixth Schedule of the Indian Constitution, and the protection of the region's fragile ecology)
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#ffd9b3'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                  <Image src={imf} alt="IMF" height={'200px'}/>
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'18px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                    pb={['0','5']}
                  >
                    {' '}
                    International Monetary Fund(IMF) 
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    De-dollarization and its implications for the international monetary system (Discussing the trend of countries reducing their reliance on the US dollar and the potential impact on global financial stability)
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#ffffff'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                  <Image src={unsc} alt="UNSC" height={'200px'}/>
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'18px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    United Nations Security Council(UNSC) 
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    Ensuring a Permanent Ceasefire in Gaza and Rafah, and Addressing the Issue of Hostages Held by Israel and Hamas 
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#ffd9b3'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                  <Image src={HCC} alt="HCC" height={'200px'}/>
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'18px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                    pb={['0','5']}
                  >
                    {' '}
                    Historical Crisis Committee(HCC)
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    The Suez Canal Crisis (1956)
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'} background={'#ffffff'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                  <Image src={ip_logo} alt="International Press" height={'200px'}/>
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'18px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                    pb={['0','5']}
                  >
                    {' '}
                    International Press (IP)
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                    textAlign={'justify'}
                  >
                    Reporter | Photographer | Caricaturist
                  </Text>
                </CardBody>
              </Card>


          </SimpleGrid>
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
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >

    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={pratham}
          mb={4}
          pos={'relative'}
          
        />
        <Text fontSize={'2xl'} fontFamily={'body'}>
        Pratham Kabra
        </Text>
        <Text
          textAlign={'justify'}
          color={useColorModeValue('gray.600', 'gray.400')}
          px={3}>
JECRC MUN 2023 triumphed with enthusiastic delegates crowding the event. Testimonials from the 12th Edition's esteemed delegates reaffirmed its resounding success and significance. Their words echoed the event's vibrancy and impact, emphasizing its pivotal role as a valuable platform for learning, networking, and personal development.        </Text>
      </Box>
    </Center>
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={shyam}
          mb={4}
          pos={'relative'}
          
        />
        <Text fontSize={'2xl'} fontFamily={'body'}>
        Shyam Garg
        </Text>
        <Text
          textAlign={'justify'}
          color={useColorModeValue('gray.600', 'gray.400')}
          px={3}>
          The JECRC MUN 2023 was a blockbuster, with excited and enthusiastic delegates filling the event. Eager and smiling faces were ubiquitous, reflecting the anticipation and enjoyment. Testimonials from esteemed delegates of the 12th Edition highlighted the event's success, showcasing the impact it had on participants.
        </Text>
      </Box>
    </Center>
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={test1}
          mb={4}
          pos={'relative'}
          
        />
        <Text fontSize={'2xl'} fontFamily={'body'}>
        Tanishka sethia
        </Text>
        <Text
          textAlign={'justify'}
          color={useColorModeValue('gray.600', 'gray.400')}
          px={3}>
           JECRC's two-day MUN Conference offered a dynamic platform for persuasive discourse and networking. Delegates showcased confidence and finesse in presenting diverse perspectives. Engaging agendas revitalized knowledge and diplomatic skills. Organizers ensured seamless execution, making the event truly remarkable.
        </Text>
      </Box>
    </Center>
    
    </Stack>

    

          {/* <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Box>
              <Stack
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                p={8}
                rounded={'xl'}
                align={'center'}
                pos={'relative'}
                _after={{
                  content: `""`,
                  w: 0,
                  h: 0,
                  borderLeft: 'solid transparent',
                  borderLeftWidth: 16,
                  borderRight: 'solid transparent',
                  borderRightWidth: 16,
                  borderTop: 'solid',
                  borderTopWidth: 16,
                  borderTopColor: useColorModeValue('white', 'gray.800'),
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
              }}>
                <Box maxWidth={'2xl'}>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize={'sm'}>
                    
                    JECRC MUN 2023 triumphed with enthusiastic delegates crowding the event. Testimonials from the 12th Edition's esteemed delegates reaffirmed its success and significance. Their words echoed the event's vibrancy and impact, emphasizing its role as a valuable platform for learning, networking, and personal development.
                  </Text>
                </Box>
              </Stack>
              <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={pratham} mb={2} size={'xl'} />
                <Stack spacing={-1} align={'center'}>
                  <Text fontWeight={600} color={'white'}>{'Pratham Kabra'}</Text>
                  
                  
                </Stack>
              </Flex>
              
            </Box>
            <Box>
              <Stack
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                p={8}
                rounded={'xl'}
                align={'center'}
                pos={'relative'}
                _after={{
                  content: `""`,
                  w: 0,
                  h: 0,
                  borderLeft: 'solid transparent',
                  borderLeftWidth: 16,
                  borderRight: 'solid transparent',
                  borderRightWidth: 16,
                  borderTop: 'solid',
                  borderTopWidth: 16,
                  borderTopColor: useColorModeValue('white', 'gray.800'),
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
              }}>
                <Box maxWidth={'2xl'}>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize={'sm'}>
                    The JECRC MUN 2023 was a blockbuster, with excited and enthusiastic delegates filling the event. Eager and smiling faces were ubiquitous, reflecting the anticipation and enjoyment. Testimonials from esteemed delegates of the 12th Edition highlighted the event's success, showcasing the impact it had on participants.
                  </Text>
                  </Box>
              </Stack>
              <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={shyam} mb={2} size={'xl'}/>
                <Stack spacing={-1} align={'center'}>
                  <Text fontWeight={600} color={'white'}>{'Shyam Garg'}</Text>
                </Stack>
              </Flex>
              
              
            </Box>
            <Box>
              <Stack
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                p={8}
                rounded={'xl'}
                align={'center'}
                pos={'relative'}
                _after={{
                  content: `""`,
                  w: 0,
                  h: 0,
                  borderLeft: 'solid transparent',
                  borderLeftWidth: 16,
                  borderRight: 'solid transparent',
                  borderRightWidth: 16,
                  borderTop: 'solid',
                  borderTopWidth: 16,
                  borderTopColor: useColorModeValue('white', 'gray.800'),
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
              }}>
                  <Box maxWidth={'2xl'}>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize={'sm'}>
                    JECRC's two-day MUN Conference offered a dynamic platform for persuasive discourse and networking. Delegates showcased confidence and finesse in presenting diverse perspectives. Engaging agendas revitalized knowledge and diplomatic skills. Organizers ensured seamless execution, making the event truly remarkable.
                  </Text>
                  </Box>
              </Stack>
              <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={test1} mb={2} size={'xl'}/>
                <Stack spacing={-1} align={'center'}>
                  <Text fontWeight={600} color={'white'}>{'Tanishka sethia'}</Text> 
                </Stack>
              </Flex>
            </Box>
          </Stack> */}
          
          {/* <SimpleGrid
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
          </SimpleGrid> */}
        </Container>
        </Container>
      </Box>
      
      {/* EB SECTION */}

      <Box width={'100%'} backgroundColor="#FEFCE7" minHeight={'100vh'} pb={10}>
        <Container
          minWidth={'85%'}
          minHeight="80vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
        >
          <Heading color={' #E74E00'} letterSpacing="2px" marginTop={'20'} pb={10}>
            {' '}
            EXECUTIVE BOARD FOR MUN 2023
          </Heading>
          <Tabs variant='soft-rounded' colorScheme='orange'>
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

      <Box width={'100%'} backgroundColor="#FEFCE7" minHeight={'100vh'} pt={5} pb={"4%"}>
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            OUR PREVIOUS SPEAKERS
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['0','1%']}
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
