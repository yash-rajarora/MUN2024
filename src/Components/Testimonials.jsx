import { Box, Image,Grid,Container,Heading,Stack,useColorModeValue,Text,Flex,Avatar } from '@chakra-ui/react';
import test1 from '../../src/Assets/testimonials/testimonial1.jpg'
import pratham from '../../src/Assets/testimonials/pratham.jpeg'
import shyam from '../../src/Assets/testimonials/shyam.jpeg'
const Testimonials = () => { 
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
             <Heading fontSize={['40px','50px']} letterSpacing='4px' textAlign={'center'} color={'white'}>TESTIMONIALS</Heading>
             <Heading fontSize={'30px'} textAlign={'center'} color={'white'}>JECRC MUN</Heading>
         </Container>
 
     </Box>
     <Box width={'100%'} backgroundColor={' #FEFCE7'}>
     <Box pl={['15%', '5%']} pt={'10%'} bg=" #FEFCE7" pb={'10%'} pr={['15%', '5%']}>
     <Grid
     templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
     gap={['5','0']}
     >
          </Grid>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Box>
              <Stack
                bg={useColorModeValue('#E74E00', 'gray.800')}
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
                  borderTopColor: useColorModeValue('#E74E00', 'gray.800'),
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
              }}>
                <Box maxWidth={'2xl'}>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('white', 'gray.400')}
                    fontSize={'sm'}>
                    
                    JECRC MUN 2023 triumphed with enthusiastic delegates crowding the event. Testimonials from the 12th Edition's esteemed delegates reaffirmed its success and significance. Their words echoed the event's vibrancy and impact, emphasizing its role as a valuable platform for learning, networking, and personal development.
                  </Text>
                </Box>
              </Stack>
              <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={pratham} mb={2} size={'xl'} />
                <Stack spacing={-1} align={'center'}>
                  <Text fontWeight={600} color={'black'}>{'Pratham Kabra'}</Text>
                  
                  
                </Stack>
              </Flex>
              
            </Box>
            <Box>
              <Stack
                bg={useColorModeValue('#E74E00', 'gray.800')}
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
                  borderTopColor: useColorModeValue('#E74E00', 'gray.800'),
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
              }}>
                <Box maxWidth={'2xl'}>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('white', 'gray.400')}
                    fontSize={'sm'}>
                    The JECRC MUN 2023 was a blockbuster, with excited and enthusiastic delegates filling the event. Eager and smiling faces were ubiquitous, reflecting the anticipation and enjoyment. Testimonials from esteemed delegates of the 12th Edition highlighted the event's success, showcasing the impact it had on participants.
                  </Text>
                  </Box>
              </Stack>
              <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={shyam} mb={2} size={'xl'}/>
                <Stack spacing={-1} align={'center'}>
                  <Text fontWeight={600} color={'black'}>{'Shyam Garg'}</Text>
                </Stack>
              </Flex>
              
              
            </Box>
            <Box>
              <Stack
                bg={useColorModeValue('#E74E00', 'gray.800')}
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
                  borderTopColor: useColorModeValue('#E74E00', 'gray.800'),
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
              }}>
                  <Box maxWidth={'2xl'}>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('white', 'gray.400')}
                    fontSize={'sm'}>
                    JECRC's two-day MUN Conference offered a dynamic platform for persuasive discourse and networking. Delegates showcased confidence and finesse in presenting diverse perspectives. Engaging agendas revitalized knowledge and diplomatic skills. Organizers ensured seamless execution, making the event truly remarkable.
                  </Text>
                  </Box>
              </Stack>
              <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={test1} mb={2} size={'xl'}/>
                <Stack spacing={-1} align={'center'}>
                  <Text fontWeight={600} color={'black'}>{'Tanishka sethia'}</Text> 
                </Stack>
              </Flex>
            </Box>
          </Stack>
        </Box>
        </Box>
        </>
       );
     };
    
    export default Testimonials;