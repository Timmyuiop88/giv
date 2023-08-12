'use client'

import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Stack,
  Text,
  Heading,
  Button,
  Flex,
  Center,
  Hide,
  chakra, shouldForwardProp
} from "@chakra-ui/react";
import Nav from "./nav";
import Image from 'next/image'


export default function Hero() {
  return (
 <Box 
 w={'100%'}
 h={'auto'}
 bg={"#fdfaf1"}
 pt={["0px", "0px", "30px", "30px"]}
 >
  
  <Nav/>

  <Stack
  direction={['column','column','row','row']}
  w={'100%'}
 maxW={'7xl'}
 h={'auto'}
 pt={'50px'}
 m={'auto'}
  >
    <Box

    w={['100%','100%','50%','50%']}
    h={'100%'}
    textAlign={['center','center','left','left']}
  pl={'15px'}
  pr={'15px'}
    >


<Text  
  >TRUSTED FUNDRAISING COMPANY</Text>
            <Heading
              color={"#232323"}
              fontSize={["32px", "32px", "40px", "50px"]}
              fontWeight={"500"}
            
              
            >
              Let’s Help And Make People Smile By{" "}
              <Text as={"span"} color={"#FFBE37"}>
                Giving
              </Text>{" "}
              Of Yours
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={"400"}
              lineHeight={"25px"}
              fontStyle={"normal"}
              color={"#696969"}
              mt={["20px", "20px", "33px", "33px"]}
             
            >
           At Givaa, we're turning compassion into action, one campaign at a time. Join us in empowering dreams and shaping a brighter future across Africa. Let's make progress together.
            </Text>
            <Stack
            direction={['column','column','row','row']}
     
              px={'20px'}
              mt={["30px", "30px", "55px", "55px"]}
             
            >
              <Button
              m={'auto'}
                h={"50px"}
                w={["250PX","200px","262px","262px"]}
                bg={"#FFBE37"}
                borderRadius={"105px"}
                color={"#fdfdfd"}
              >
                Start Fundraising
              </Button>
              <Button
              m={'auto'}
                h={"50px"}
                w={["250px","200px","262px","262px"]}
                bg={"#fdfdfd"}
                borderRadius={"105px"}
                color={"#333"}
                border={'1px solid #C8C8C8'}
              >
                View Campaigns
              </Button>
      
            </Stack>
            <Box
            w={'100%'}
            h={'auto'}
            px={'20px'}
            pt={'25px'}
            >
              <Heading
              textAlign={'left'}
              fontSize={'20px'}
              fontWeight={'500'}
              color={'#232323'}
              >
              Volunteers
              </Heading>
            <AvatarGroup py={'16px'} size='md' max={4}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
            </Box>

    </Box>

    <Box
    
    w={['100%','100%','50%','50%']}
    h={'auto'}
   pb={['14px','14px','30px','60px']}
    >
      <Image
      
     
      src="images/hero.svg"
      m={'auto'}
      width={'600'}
      height={'500'}
      alt="Picture of the author"
      />
   
  
  
  
</Box>

  </Stack>



 </Box>
  );
}
