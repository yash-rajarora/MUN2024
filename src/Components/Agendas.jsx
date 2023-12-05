import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import AboutBanner from './About/AboutBanner';

const Agendas = () => {
  return (
    <>
      <AboutBanner munheading="AGENDAS" />
      <Box display="flex" flexDir={'column'} justifyContent='center' alignItems="center" background={'green.50'}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          width={['85%','60%']}
          marginBottom="20"
          marginTop="20"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '300px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">RESERVATION SYSTEM IN INDIA</Heading>

              <Text py="2">
              Since its establishment, Reservation System in the country has played a major role in every field, from education to jobs. While playing a beneficial role in equalling the field for all the communities and providing opportunities to the underprivileged, the system has also become a curse for the rest of the community and the nation itself. This agenda deals with the two faces of our reservation system- deciding whether it’s a gift that should be savored or a bane that should be abolished for the future of our citizens and the country.
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row-reverse' }}
          overflow="hidden"
          variant="outline"
          width={['85%','60%']}
          marginBottom="20"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '300px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">INTERNET PRIVACY RIGHTS</Heading>

              <Text py="2">With the Internet now available in every nook and corner of the world, it raises a vital question for everyone- the privacy of data. Although sharing of data to websites and their parent companies makes it easier to get recommendations and gives it a more personalized look, leaks of personal information can cause both physical and mental anguish to the users. This agenda is a take on both the positive and negative aspects of how the privatization of data to the users themselves would affect them for better or for worse.
              </Text>
            </CardBody>

          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          width={['85%','60%']}
          marginBottom="20"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '300px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">MILLENNIALS VS GEN Z</Heading>

              <Text py="2">The tech-savvy, the hard worker, the smart worker, the multi-tasker, the innovator, the financially stable, the flexible, etc. Two generations separated from each other by the many aspects of life. Millennials (born between 1982 and 2000) and Gen Z (born between 2001 and 2019), have different opinions and places in their lives due to technology, education, self-identity, society, upbringing, communication, and emotions. The agenda raises a series of queries and aspects to marvel on- which side are you on?
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row-reverse' }}
          overflow="hidden"
          variant="outline"
          width={['85%','60%']}
          marginBottom="20"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '300px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">A WORLD WITH AI </Heading>

              <Text py="2">Artificial intelligence is a new and up-and-coming technology capable of changing the world as we know it. It is the simulation of human intelligence processed by machines that can be the cause of mass destruction, a robot uprising, or the settlement of a new and improved civilization. This revolution in technology would impact us all, for good or bad. This agenda gives the participants an opportunity to debate on topics such as human error, new inventions, the high cost of creation, unemployment, technology improvement, human activity, and so on.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Agendas;
