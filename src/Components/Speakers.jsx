import {
  Box,
  Heading,
  Grid,
  Image,
} from '@chakra-ui/react';
import AboutBanner from './About/AboutBanner';
import Speaker from './Home/speaker.json'

const PreviousSpeaker = () => {
  return (
    <>
    <AboutBanner munheading={"Previous Speakers"}/>
    <Box width={'100%'} backgroundColor="#FEFCE7" minHeight={'100vh'} pt={[5,10]} pb={"4%"}>
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

export default PreviousSpeaker;