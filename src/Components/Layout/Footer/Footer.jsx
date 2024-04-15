import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import image from '../../../Assets/Logos/mun24.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box backgroundColor={'black'} maxW="100vw" minH={'40vh'}>
      <Container
        maxW={['90%','80%']}
        size={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems="center"
      >
        <VStack width={'100%'}>
          <HStack marginTop={'3'}>
            <Image src={image} width="50px" />
            <Heading color={'white'} fontSize="18px">
              JECRC MUN 2023
            </Heading>
          </HStack>
          <HStack
            width={'100%'}
            display="flex"
            justifyContent={'space-between'}
            alignItems="flex-start"
          >
            <VStack
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              textAlign={'center'}
            >
              <Heading
                fontWeight={'semibold'}
                color="#E74E00"
                fontSize={['13px','20px']}
              >
                Address
              </Heading>
              <Text color={'white'} fontSize={['8px','15px']}>
                JECRC College, <br /> Shri Ram Ki Nangal, <br /> via Sitapura
                RIICO, Tonk Road, Jaipur<br />Pincode - 302 022
              </Text>
            </VStack>
            <VStack
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              textAlign={'center'}
            >
              <Heading
                fontWeight={'semibold'}
                color="#E74E00"
                fontSize={['13px','20px']}
              >
                Email
              </Heading>
              <Text color={'white'} fontSize={['8px','15px']}>
                <Link href="mailto:mun@jecrc.ac.in">mun@jecrc.ac.in</Link>
              </Text>
            </VStack>
            <VStack
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              textAlign={'center'}
            >
              <Heading
                fontWeight={'semibold'}
                color="#E74E00"
                fontSize={['13px','20px']}
              >
                Contacts
              </Heading>
              <Text  color={'white'} fontSize={['8px','15px']}>
                Sapan Mittal - 8764364947 <br /> Manshi Singh - 8005538934
              </Text>
            </VStack>
          </HStack>
          <Text textAlign={'center'} width={'100%'} color="#E74E00">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{' '}
          </Text>
          <Box display={'flex'} flexDirection={['column','row']} justifyContent="center" alignItems={'center'}>
            <Text color={'white'} fontSize={['13px','20px']}>
              This site is maintained and developed by  {' '} 
            </Text>
            <Text color={'#E74E00'} fontSize={['13px','18px']}>
              <Link to="/technicalteam"> - JECRC Technical Team</Link>
            </Text>
          </Box>
          <Box pb={'3%'}>
          <Wrap >
            <Link to='https://www.facebook.com/jecrcmun/' target="_blank" rel="noopener noreferrer">
            <Button size={'md'}  colorScheme="facebook" ><FaFacebook />
            </Button></Link>
            <Link to='https://x.com/JECRC_MUN?t=qN1KJtP4_r9a1RPt1pHvHQ&s=08' target="_blank" rel="noopener noreferrer">
            <Button size={'md'} colorScheme="twitter" ><FaTwitter />
            </Button></Link>
            <Link to='https://www.instagram.com/jecrcmun/' target="_blank" rel="noopener noreferrer">
            <Button size={'md'} colorScheme="pink" ><FaInstagram />
            </Button></Link>
            <Link to='https://www.linkedin.com/company/jecrc-mun/' target="_blank" rel="noopener noreferrer">
            <Button size={'md'} colorScheme="linkedin"><FaLinkedin />
            </Button></Link>
          </Wrap>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
