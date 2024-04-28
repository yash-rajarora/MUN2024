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
} from '@chakra-ui/react';
import AboutBanner from '../About/AboutBanner';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TechTeam from './TechnicalTeam.json';
function TechnicalTeam() {
  return (
    <>
      <Box bg={'#FEFCE7'} minWidth={'100%'}>
        <AboutBanner munheading={'TECHNICAL TEAM'} />
        <Container minWidth={'80%'}>
          <Grid
            templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]}
            gap={6}
            marginTop={'20'}
            paddingBottom={'20'}
          >
            {TechTeam &&
              TechTeam.map(TechTeam => {
                const { name, designation, image, github, linkedin } =TechTeam;
                return (
                  <GridItem key={image}>
                    <Card maxW="lg" boxShadow={'xl'}>
                      <CardBody>
                        <Image
                          src={image}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width={'100%'}
                          objectFit={'contain'}
                          height={'300px'}
                        />
                        <Stack mt="6" spacing="3">
                          <Text
                            textAlign={'center'}
                            size="md"
                            fontSize={'30px'}
                            fontWeight={'semibold'}
                            textTransform={'uppercase'}
                          >
                            {name}
                          </Text>
                          <Text textAlign={'center'} fontStyle={'italic'}>
                            {designation}
                          </Text>
                        </Stack>
                      </CardBody>
                      <CardFooter
                        justify="space-evenly"
                        flexWrap="wrap"
                        sx={{
                          '& > button': {
                            minW: '136px',
                          },
                        }}
                      >
                        
                          <Link href={github}>
                            <Button
                              size={'md'}
                              colorScheme="blackAlpha"
                              leftIcon={<FaGithub fontSize={'29'} />}
                            >
                              Github
                            </Button>
                          </Link>
                          <Link href={linkedin}>
                            <Button
                              size={'md'}
                              colorScheme="linkedin"
                              leftIcon={<FaLinkedin fontSize={'29'} />}
                            >
                              Linkedin
                            </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </GridItem>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default TechnicalTeam;
