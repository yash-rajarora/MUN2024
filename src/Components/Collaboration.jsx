import { Box, Image,Grid,Container,Heading } from '@chakra-ui/react';

import image1 from "../Assets/Logos/unic logo.jpg";
import image2 from "../Assets/Logos/french embassy.png";

const Collaboration = () => { 
   return (
    <>
    <Box
      minwidth={'100%'}
      height="40vh"
      backgroundColor="blackAlpha.600"
      backgroundImage={'https://wallpaperaccess.com/full/1393241.jpg'}
      backgroundPosition="center"
      backgroundRepeat={'no-repeat'}
      backgroundSize="cover"
    >
        <Container background={'blackAlpha.800'} minWidth="100%" height="40vh" display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
            <Heading fontSize={['40px','50px']} letterSpacing='4px' textAlign={'center'} color={'white'}>COLLABORATION</Heading>
            <Heading fontSize={'30px'} textAlign={'center'} color={'white'}>JECRC MUN</Heading>
        </Container>

    </Box>
    <Box width={'100%'} backgroundColor={' #FEFCE7'}>
    <Box pl={['25%', '15%']} pt={'10%'} bg=" #FEFCE7" pb={'10%'}>
    <Grid
    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
    gap={['5','0']}
    >
       <Image
        src={image1} 
        alt="Random Image 1" 
        w={["200px","400px"]}
        h={["200px","400px"]}
        boxShadow="0px 0px 12px rgba(0, 0, 0, 0.6)"
        border="2px solid #E74E00"
        borderRadius="md"
        />
       <Image 
        src={image2}
        alt="Random Image 2" 
        w={["200px","400px"]}
        h={["200px","400px"]}
        boxShadow="0px 0px 12px rgba(0, 0, 0, 0.6)"        
        border="2px solid #E74E00"
        borderRadius="md"
        />
    </Grid>
        
    </Box>
    </Box>
    </>
   );
 };

export default Collaboration;
