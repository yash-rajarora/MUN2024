import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
  Link,
  Box,
  CardFooter,
  Button,
  Container,
  IconButton,
  Heading
} from '@chakra-ui/react';
import AboutBanner from '../About/AboutBanner';
import { FaLinkedin } from 'react-icons/fa';
import secgen from './Team.json';
import mentor from './mentor.json';
import tech from './tech.json';
import outreach from './outreach.json';
import gd from './gd.json';
import digital from './digital.json';
import da from './da.json';
import content from './content.json';
import cinematography from './Cinematography.json';
import sponsor from './sponsor.json';
import gcollab from './gcollab.json';

function Team() {
  return (
    <>
      <Box bg={'white'} minWidth={'100%'}>
        <AboutBanner munheading={'OUR TEAM'} />
        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            letterSpacing="4px"
          >
            Mentors
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={2}
            ml={['10%', '10%']}
          >
            {mentor &&
              mentor.map(mentor => {
                const { name, designation, image, linkedin } = mentor;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Secretary General
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {secgen &&
              secgen.map(secgen => {
                const { name, designation, image, linkedin } = secgen;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Technical Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {tech &&
              tech.map(tech => {
                const { name, designation, image, linkedin } = tech;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Sponsorship Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {sponsor &&
              sponsor.map(sponsor => {
                const { name, designation, image, linkedin } = sponsor;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>


        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Digital Marketing Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {digital &&
              digital.map(digital => {
                const { name, designation, image, linkedin } = digital;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Outreach Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {outreach &&
              outreach.map(outreach => {
                const { name, designation, image, linkedin } = outreach;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Cinematography Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {cinematography &&
              cinematography.map(cinematography => {
                const { name, designation, image, linkedin } = cinematography;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Graphic Designing Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {gd &&
              gd.map(gd => {
                const { name, designation, image, linkedin } = gd;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Content Writing Team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {content &&
              content.map(content => {
                const { name, designation, image, linkedin } = content;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
            Guest and Collaboration

          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {gcollab &&
              gcollab.map(gcollab => {
                const { name, designation, image, linkedin } = gcollab;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>

        <Box
          width={'100%'}
          backgroundColor=" #FEFCE7"
          pt={5}
          pb={'4%'}
        >
          <Heading
            textAlign={'center'}
            color="#E74E00"
            marginBottom={'50px'}
            letterSpacing="4px"
          >
             Delegate Affairs Team</Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={5}
            ml={['10%', '10%']}
          >
            {da &&
              da.map(da => {
                const { name, designation, image, linkedin } = da;
                return (
                  <Box textAlign="center" my={'10'}>
                    <Box
                      w="200px"
                      h="200px"
                      borderRadius="full"
                      overflow="hidden"
                      m={10}
                    >
                      <Image
                        src={image}
                        objectFit="cover" />
                    </Box>
                    <Heading as="h2" fontSize="xl" mt={5} mb={2} pr={'35%'} pl={['70px','0']}>
                      {name}
                    </Heading>
                    <Box pr="35%">
                      <Text fontStyle={'italic'} pl={['70px','0']}>{designation}</Text>
                    </Box>
                    <Box pt={'6px'} pr={"50%"} pl={['35px','0']}>
                    <Box as={Link} href={linkedin} borderRadius='md' bg='blue.400' color='white' px={4} h={8} w={32} ml={'35%'} display="flex" alignItems="center" justifyContent="center">
                      <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                    </Box>
                    </Box>
                  </Box>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Team;
