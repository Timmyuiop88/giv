import {
  Box,
  Stack,
  Button,
  Link,
  Hide,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Show,
  chakra,
  
  
  useColorModeValue,
  VisuallyHidden,
  HStack,

  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
  AiOutlineClose
} from "react-icons/ai";
export default function Nav() {
  const mobileNav = useDisclosure();

  

  const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text fontSize={"19px"} display="block" {...rest}>
          {children}
        </Text>
      </Link>
    );
  };
  return (
    <>
    
    <Stack

 pl={['0px','0px','10px','10px']}
 
pr={['0px','0px','10px','10px']}
      maxW={"5xl"}
      display={"flex"}
      justifyContent={"center"}
      margin={"auto"}
    >
      <Box
        w={"100%"}
        h={["80px", "80px", "95px", "95px"]}
        bg={"#313131"}
        borderRadius={["0", "0", "1118px", "1118px"]}
        display={"flex"}
        pl={'10px'}
        pr={'10px'}
        justifyContent={["space-between","space-betweeen","space-evenly","space-evenly"]}
        color={"white"}
        alignItems={"center"}
      >



<Show below="md">
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
<path d="M26.6958 25.7272C27.1014 26.1328 27.1014 26.7903 26.6958 27.1958C26.2903 27.6014 25.6328 27.6014 25.2272 27.1958L20.2426 22.2112C19.8371 21.8057 19.8371 21.1482 20.2426 20.7426C20.6482 20.3371 21.3057 20.3371 21.7112 20.7426L26.6958 25.7272ZM11.0077 22.5154C4.92831 22.5154 0 17.5871 0 11.5077C0 5.42831 4.92831 0.5 11.0077 0.5C17.0871 0.5 22.0154 5.42831 22.0154 11.5077C22.0154 17.5871 17.0871 22.5154 11.0077 22.5154ZM11.0077 20.4385C15.94 20.4385 19.9385 16.44 19.9385 11.5077C19.9385 6.57536 15.94 2.57692 11.0077 2.57692C6.07536 2.57692 2.07692 6.57536 2.07692 11.5077C2.07692 16.44 6.07536 20.4385 11.0077 20.4385ZM5.88462 10.6769C5.88462 11.0593 5.57466 11.3692 5.19231 11.3692C4.80996 11.3692 4.5 11.0593 4.5 10.6769C4.5 7.54165 7.04165 5 10.1769 5C10.5593 5 10.8692 5.30996 10.8692 5.69231C10.8692 6.07466 10.5593 6.38462 10.1769 6.38462C7.80635 6.38462 5.88462 8.30635 5.88462 10.6769Z" fill="white"/>
</svg>
</Show>
        
        <Show above="md">

     
        <MenuItem to="/explore">Explore</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/donation">Donation</MenuItem>
        </Show>
        <MenuItem to="/"
      color={"#FFBE37"} fontSize={"37px"} fontWeight={"500"}>
          GIVAA

        </MenuItem>
        <Show below="md">

        <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
              bg={'none'}
              
                _hover={{ bg: "#FFBE37" }}
                icon={mobileNav.isOpen ?
                  <AiOutlineClose
                  color="#ffffff"
                  fontSize={'30px'}
                  />
                  : 
                   <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                  <path d="M3.375 8.375H23.625" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M3.375 14H23.625" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M3.375 19.625H23.625" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>}
               
               
                onClick={mobileNav.isOpen ? mobileNav.onClose: mobileNav.onOpen}
              />
              
            </Box>


</Show>
        <Show above="md">

        
        <MenuItem to="/">Blog</MenuItem>
        <MenuItem to="/hello">
          <Button
            border={"1px solid white"}
            h={"60px"}
            w={"120px"}
            borderRadius={"11811px"}
            colorScheme=""
          >
            Sign in
          </Button>
        </MenuItem>
        <MenuItem to="/how">
          <Button
            border={"1px solid #FFBE37"}
            h={"60px"}
            w={"120px"}
            borderRadius={"11811px"}
            color={"#1B1B18"}
            bg={"#FFBE37"}
          >
            Sign up
          </Button>
        </MenuItem>
        </Show>
      </Box>
    </Stack>
    <VStack
             
               
                zIndex={'300'}
               color={'#FFFFFF'}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
            pt={'20px'}
                pb={4}
                pl={'20px'}
                pr={'20px'}
            w={'100%'}
            m={'auto'}
                bg={'#313131'}
                spacing={3}
             
                justifyContent={'right'}
                align='start'
                
              >
                
               
                 <MenuItem to="/explore">Explore</MenuItem>
                 <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/donate">Donation</MenuItem>

        
        <MenuItem to="/">Blog</MenuItem>
       
          <Button
            border={"1px solid white"}
            h={"60px"}
            w={"100%"}
            borderRadius={"11811px"}
            colorScheme=""
          >
            Sign in
          </Button>
      
       
          <Button
            border={"1px solid #FFBE37"}
            h={"60px"}
            w={"100%"}
            borderRadius={"11811px"}
            color={"#1B1B18"}
            bg={"#FFBE37"}
          >
            Sign up
          </Button>
       
              </VStack>
    </>
  );
}
