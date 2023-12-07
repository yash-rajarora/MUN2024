import {
    Box,
    Heading,
    Text,
    VStack,
    Container,
    Card,
    CardBody,
    Link,
    Button,
    useDisclosure,
    Stack
  } from '@chakra-ui/react';
  import AboutBanner from '../About/AboutBanner';
  
  const BackgroundGuideZhs = () => {
    const { onClose } = useDisclosure();
    return (
      <>
        <AboutBanner munheading={'BACKGROUND GUIDE'} />
        <Box>
          <Container background={'green.50'} minWidth="100%">
            <Container
              minWidth={['100%','85%']}
              minHeight="80vh"
              display="flex"
              flexDir={'column'}
              justifyContent="center"
              alignItems={'center'}
            >
              <VStack
                alignItems={['center', 'flex-start']}
                width={['100%', '90%']}
              >
                <Card size={'lg'} marginTop="20" marginBottom={'20'}>
                  <CardBody paddingLeft={['5','20']} paddingRight={['5','20']} >
                    <Heading
                      className="about_heading"
                      color={'green.500'}
                      fontSize={['20px', '30px']}
                      marginTop={'10'}
                      marginBottom={'10'}
                      textAlign="center"
                      fontWeight={'semibold'}
                    >
                     Tackling socio-political and insurgency issues in Manipur
                    </Heading>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={['normal','medium']}
                      fontSize={['15px',"17px"]}
                    >
                    In addressing socio-political and insurgency issues in Manipur, tensions surface as the Kukis express concern about 
                    the Meiteis' plea for official tribal status. From the Kukis' perspective, granting tribal status to the Meiteis might 
                    amplify their influence on government and society, impacting land ownership and settlement dynamics in predominantly 
                    Kuki areas. The Meiteis, mainly Hindus residing in the Imphal valley, seek tribal recognition, while the predominantly 
                    Christian Nagas and Kukis inhabit the hills. The historical backdrop of ethnic conflicts traces back to British 
                    colonial policies of "divide and rule," which laid the foundation for present discord.<br/><br/>
                    Finding a balanced solution in the Manipur debate involves understanding the valid concerns of both the Kuki and 
                    Meitei communities
  
                    </Text>
                    <Heading
                      className="about_heading"
                      color={'green.500'}
                      fontSize={['20px', '30px']}
                      marginTop={'10'}
                      marginBottom={'10'}
                      textAlign="center"
                      fontWeight={'semibold'}
                    >
                     Israel-Palestine Conflict: Two-State vs. Alternatives
                    </Heading>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={['normal','medium']}
                      fontSize={['15px',"17px"]}
                    >
                    The Israel-Palestine conflict evokes diverse views on resolving it, with the 2-state solution and alternative 
                    approaches in consideration. Advocates of the 2-state solution argue it could establish separate, independent states 
                    for Israelis and Palestinians, fostering peace. They believe it addresses historical grievances and provides a path to 
                    coexistence. However, critics express concerns about the feasibility of dividing the land and potential security 
                    issues.<br/><br/>

                    Alternative approaches emphasize shared governance or a single, inclusive state where both communities coexist. 
                    Supporters argue this could promote unity and reduce tensions, fostering a more integrated society. However, skeptics 
                    worry about preserving cultural identities and potential power struggles. Navigating these perspectives requires 
                    careful consideration of historical context, regional dynamics, and the aspirations of both Israelis and Palestinians 
                    for a lasting and just resolution.<br/><br/>
  
                    </Text>
                    <Heading
                      className="about_heading"
                      color={'green.500'}
                      fontSize={['20px', '30px']}
                      marginTop={'10'}
                      marginBottom={'10'}
                      textAlign="center"
                      fontWeight={'semibold'}
                    >
                     Should Sex Education be Taught in India
                    </Heading>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={['normal','medium']}
                      fontSize={['15px',"17px"]}
                    >
                    Sex education in schools is a topic that elicits a range of opinions. Advocates argue that it imparts crucial 
                    knowledge about bodies, relationships, and contraception, promoting responsible behavior and reducing the risk of 
                    unplanned pregnancies and sexually transmitted infections. On the contrary, some contend that such discussions are 
                    better suited for families, expressing concerns about potential clashes with cultural or religious values. 
                    Additionally, there is apprehension that providing explicit information may inadvertently encourage early 
                    experimentation.<br/><br/>

                    The debate necessitates a balanced approach to crafting comprehensive educational programs. This involves respecting 
                    diverse beliefs while prioritizing students' well-being and informed decision-making. Striking a balance that ensures 
                    students receive accurate information while respecting the values of their communities is at the core of this ongoing 
                    discussion.<br/><br/>
  
                    </Text>
                    <Heading
                      className="about_heading"
                      color={'green.500'}
                      fontSize={['20px', '30px']}
                      marginTop={'10'}
                      marginBottom={'10'}
                      textAlign="center"
                      fontWeight={'semibold'}
                    >
                     Tackling socio-political and insurgency issues in Manipur
                    </Heading>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={['normal','medium']}
                      fontSize={['15px',"17px"]}
                    >
                    In addressing socio-political and insurgency issues in Manipur, tensions surface as the Kukis express concern about 
                    the Meiteis' plea for official tribal status. From the Kukis' perspective, granting tribal status to the Meiteis might 
                    amplify their influence on government and society, impacting land ownership and settlement dynamics in predominantly 
                    Kuki areas. The Meiteis, mainly Hindus residing in the Imphal valley, seek tribal recognition, while the predominantly 
                    Christian Nagas and Kukis inhabit the hills. The historical backdrop of ethnic conflicts traces back to British 
                    colonial policies of "divide and rule," which laid the foundation for present discord.<br/><br/>
                    Finding a balanced solution in the Manipur debate involves understanding the valid concerns of both the Kuki and 
                    Meitei communities
  
                    </Text>
                    <Stack align="center" pt="10">
                  <Link onClick={onClose} to="/register">
                  {/* <Button 
                  variant={'solid'} 
                  colorScheme="green" 
                  size={['md', 'lg']}
                  >
                    Register Now
                  </Button> */}
                  </Link>
                  </Stack>
                  </CardBody>
                  
                </Card>
              </VStack>
            </Container>
          </Container>
        </Box>
      </>
    );
  };
  
  export default BackgroundGuideZhs;
  