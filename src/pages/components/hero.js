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
import Image from 'next/image';
import {BsArrowUpRight} from "react-icons/bs";
import {RiExchangeFundsLine} from 'react-icons/ri'


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
fontSize={["10px","10px","15px","15px"]}
fontWeight={"400"}
lineHeight={["25px","25px","30px","30px"]}
fontStyle={"normal"}
color={"#696969"}
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
            
              fontSize={["15px","15px","20px","20px"]}
              fontWeight={"400"}
              lineHeight={["25px","25px","30px","30px"]}
              fontStyle={"normal"}
              color={"#696969"}
              mt={["20px", "20px", "33px", "33px"]}
             
            >
        Givaa is a digital platform for collecting donations to be distributed to people in need
            </Text>
            <Stack
            direction={['column','column','row','row']}
     
              px={'0px'}
              mt={["30px", "30px", "55px", "55px"]}
             
            >
              <Button
              m={['auto','auto','0','0']}
                h={"50px"}
                w={["250PX","200px","262px","262px"]}
                bg={"#FFBE37"}
                borderRadius={"105px"}
                color={"#fdfdfd"}
                fontWeight={'500'}
                rightIcon={<RiExchangeFundsLine/>}
              >
                Start Fundraising
              </Button>
              <Button
     m={['auto','auto','0','0']}
                h={"50px"}
                w={["250px","200px","262px","262px"]}
                bg={"#fdfdfd"}
                borderRadius={"105px"}
                color={"#333"}
                border={'1px solid #C8C8C8'}
                rightIcon={<BsArrowUpRight/>}
                fontWeight={'500'}
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
      width={'500'}
      height={'400'}
      alt="Hero image"
      />
   
  
  
  
</Box>

  </Stack>



 </Box>
  );
}
