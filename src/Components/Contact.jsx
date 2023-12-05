import {
  Box,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
  Input,
  Textarea,
  Card,
  useTheme,
  useToast
} from '@chakra-ui/react';
import AboutBanner from './About/AboutBanner';
import axios from 'axios';
import React, { useState } from 'react';



function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile:"",
    institution:"",
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
        "https://sheetdb.io/api/v1/dn0y95uxqe0qs",
        { data: formData },
        { headers: { Authorization: "Bearer wi42j4v5uoma4bu4683ru5ckpx6j8fcs84wcynwz" } }
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
      
      <AboutBanner munheading={'CONTACT US'} />
      <Box bg={"green.50"} pb={['0','10']} pt={10}>
      <SimpleGrid
        minChildWidth="320px"
        spacing={['40px', '0']}
      >
        <Box>
          <Box maxW={['lg', 'md']} mx="auto" mt={['10', '0']}>
            <Card
              p={6}
              bg="white"
              boxShadow="0px 0px 12px rgba(0, 0, 0, 0.6)"
              borderRadius="md"
            >
              <form onSubmit={handleSubmit}>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </FormControl>

              <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </FormControl>

              <FormControl id="mobile" mb={4} isRequired>
                <FormLabel>Mobile No</FormLabel>
                <Input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
              </FormControl>

              <FormControl id="institution" mb={4} isRequired>
                <FormLabel>Institution</FormLabel>
                <Input type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="Enter your institution name" />
              </FormControl>

              <FormControl id="message" mb={6} isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" />
              </FormControl>

              <Button
                type="submit"
                colorScheme="green"
                size="lg"
                color={theme.colors.white}
                _hover={{ bg: 'green.600' }}
                _active={{ border: '2px solid', borderColor: 'green.500' }}
              >
                Send Message
              </Button>
              </form>
            </Card>
          </Box>
        </Box>
        <Box
          ml={['5%', '0%']}
          mr={['0%', '5%']}
          marginTop={['0', '20']}
          height={['400px', '80%']}
          className="map"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.825855186854!2d75.81833451496024!3d26.7818204831841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc977c6898ab9%3A0x8010b7bf0b1f29c9!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1579948771763!5m2!1sen!2sin"
            allowFullScreen=""
            title="JECRC Foundation"
            className="Map"
            height={['90%', '85%']}
            width={['95%', '80%']}
          ></iframe>
        </Box>
      </SimpleGrid>
      </Box>
    </>
  );
}

export default Contact;
