import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Grid,
  VStack,
  Image,
  FormControl,
  FormLabel,
  Textarea,
  Card,
  useToast,
  
} from '@chakra-ui/react';
import AboutBanner from '../About/AboutBanner';
import images from './Sponsers.json';
import axios from 'axios';
import React, { useState } from 'react';
import Collaborations from '../../Assets/images/Collaborations.png';


function Sponsers() {
  // const theme = useTheme();
  const [formData, setFormData] = useState({
    nameorg:"",
    name: "",
    email: "",
    mobile:"",
    altmobile:"",
    message: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://sheetdb.io/api/v1/qy7f43wju5yrp",
        { data: formData },
        { headers: { Authorization: "Bearer ufvkpsinhxhdmz0218no6swmn7xylpvn7f4lccwq" } }
      );
      console.log(res);
      toast({
        title: "Form submitted successfully.",
        description: "Thank You for your response",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error submitting form.",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <AboutBanner munheading={'OUR SPONSERS'} />
      <Box width={'100%'} backgroundColor={' #FEFCE7'}>
        <Box pl={['0', '10']} pt={'10'} bg=" #FEFCE7" pb={'10'}>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            ml={['10%', '12%']}
            mr={['10%', '12%']}
            gap={4}
          >
            {images &&
              images.map(image => {
                const { src, alt } = image;
                return (
                  <Image
                    background={'white'}
                    key={src}
                    src={src}
                    alt={alt}
                    w="100%"
                    h="250px"
                    borderRadius="md"
                    boxShadow="md"
                    objectFit={'contain'}
                    p={'10px'}
                  />
                );
              })}
          </Grid>
        </Box>
      </Box>

      <Box position={'relative'} backgroundColor={' #FEFCE7'}>
      <Container
        as={SimpleGrid}
        maxW={['7xl','7xl']}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack
            display={'flex'}
            flexDir={['column', 'row']}
            marginTop={'10'}
            alignItems={['center', 'flex-start']}
          >

        <VStack alignItems={['center', 'flex-start']} pt={'8%'} width={['100%', '100%']}>
          <Image width={['85%', '80%']} src={Collaborations} />
        </VStack>
          </Stack>
          
    <Box maxW={['xl', '4xl']} mx="auto" mt={['10', '0']} pb={20} width="100%">
      <Heading as="h1" size="xl" textAlign="center" my={6}>
          Become Our Sponsor
        </Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={4}>
          <Box maxW={['xl', '4xl']} mx="auto" mt={['10', '0']} pb={20} >
            <Card
              p={6}
              bg="white"
            >
              <form onSubmit={handleSubmit}>
              <FormControl id="nameoforganization" mb={4} isRequired>
                <FormLabel>Name of Organisation</FormLabel>
                <Input type="text" name="nameorg" value={formData.nameorg} onChange={handleChange} placeholder="Enter your name" />
              </FormControl>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </FormControl>

              <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </FormControl>

              <FormControl id="mobile" mb={4} isRequired>
                <FormLabel>Contact No</FormLabel>
                <Input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
              </FormControl>
              <FormControl id="mobile" mb={4} isRequired>
                <FormLabel>Alternate Contact No</FormLabel>
                <Input type="tel" name="altmobile" value={formData.altmobile} onChange={handleChange} placeholder="Enter your mobile number" />
              </FormControl>

              <FormControl id="message" mb={6} isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" />
              </FormControl>

              <Button
                type='submit'
                colorScheme="orange"
                size="lg"
                color={'white'}
                _hover={{ bg: '#E74E00' }}
                _active={{ border: '2px solid', borderColor: '#E74E00' }}
              >
                Send Message
              </Button>
              </form>
            </Card>
          </Box>
          </Grid>
          </Box>
      </Container>
    </Box>
    </>
    
  );
}

export default Sponsers;
