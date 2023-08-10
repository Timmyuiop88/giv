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
import { Image } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
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
    <ChakraBox
    initial={{ opacity: 0, x: 15}}
    animate={{ opacity: 1, x: 0}}
    exit={{ opacity: 0, x: 15}}
    transition={{delay: 0.25}}
    w={['100%','100%','50%','50%']}
    h={'100%'}
    textAlign={['center','center','left','left']}
  pl={'15px'}
  pr={'15px'}
    >


<Text fontSize={[]}>TRUSTED FUNDRAISING COMPANY</Text>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              pellentesque cras interdum ornare feugiat eget feugiat. Nunc, urna
              vitae pellentesque risus, ut volutpat eget libero vel.
            </Text>
            <Box
         
              px={'20px'}
              mt={["30px", "30px", "55px", "55px"]}
              display={"flex"}
              justifyContent={'space-between'}
            >
              <Button
                h={"60px"}
                w={["full","full","262px","262px"]}
                bg={"#FFBE37"}
                borderRadius={"105px"}
                color={"white"}
              >
                Start Fundraising
              </Button>
      
            </Box>
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
            <AvatarGroup py={'15px'} size='md' max={4}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
            </Box>

    </ChakraBox>

    <ChakraBox
     initial={{ opacity: 0, y: 15}}
     animate={{ opacity: 1, y: 0}}
     exit={{ opacity: 0, y: 15}}
     transition={{delay: 0.25}}
    w={['100%','100%','50%','50%']}
    h={'auto'}
   pb={['14px','14px','30px','60px']}
    >
      <Image src="images/hero.svg"
      m={'auto'}
      w={['300px','300px','500px','600px']}/>

</ChakraBox>

  </Stack>



 </Box>
  );
}
