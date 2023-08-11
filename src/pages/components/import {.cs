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
    Wrap,
    WrapItem,
    Image
    , List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Divider
  } from "@chakra-ui/react";

  import { BsFacebook,BsTwitter,BsYoutube,BsInstagram } from "react-icons/bs";
export default function Footer(){
    return(

            <Box 
            w={'100%'}
            h={'auto'}
            bg={'#222'}
            pt={'50px'}
            >

                <Stack
                m={'auto'}
                direction={['column','column','row','row']}
                maxW={'8xl'}
                w={'100%'}
                h={'auto'}
           
                >
             <Box
             m={['20px','20px','auto','auto']}
             w={['100%','100%','350px','350px']}
             h={'auto'}
         
        
             >
                <Heading
                fontSize={'36px'}
                fontWeight={'500'}
                color={'#FFBE37'}
                >
                Givaa
                </Heading>
                <Text
                mt={'40px'}
                fontSize={'14px'}
                w={'50%'}
                h={'auto'}
                color={'#FDFDFD'}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesquefffff cras interdum ornare feugiat eget feugiat. Nunc, urna vitae pellentesque risus, ut volutpat eget libero vel.  
                </Text>
                </Box>    
                <Box
                       m={['20px','20px','auto','auto']}
                       w={['100%','100%','350px','350px']}
             h={'auto'}
    
          
             >
                <Heading
                fontSize={['25px','30px','30px','36px']}
                fontWeight={'500'}
                color={'#FDFDFD'}
                lineHeight={'normal'}
                >
                Company  
                </Heading>
                
                <OrderedList styleType={'none'}
                fontSize={['15px','17px','20px','24px']}
                fontWeight={'500'}
                color={'#FDFDFD'}
                lineHeight={'normal'}
                spacing={'25px'}
             ml={'0'}
             mt={'40px'}
                
                >
  <ListItem>About Us</ListItem>
  <ListItem>Service</ListItem>
  <ListItem>Program</ListItem>
  <ListItem>Blog</ListItem>
</OrderedList>
                </Box>       

                     <Box
                             m={['20px','20px','auto','auto']}
                             w={['100%','100%','350px','350px']}
             h={'auto'}
     
             >
                 <Heading
               fontSize={['25px','30px','30px','36px']}
                fontWeight={'500'}
                color={'#FDFDFD'}
                lineHeight={'normal'}
                >
                Our Contact
                </Heading>
                
                <OrderedList styleType={'none'}
            fontSize={['15px','17px','20px','24px']}
                fontWeight={'500'}
                color={'#FDFDFD'}
                lineHeight={'normal'}
                spacing={'25px'}
             ml={'0'}
             mt={'40px'}
                
                >
  <ListItem>(229) 555-0109</ListItem>
  <ListItem>Givaa@email.com</ListItem>
  <ListItem>Thornridge Cir. Shiloh, Hawaii 81063</ListItem>

</OrderedList>
                
                
                </Box>       

                     <Box
                           m={['20px','20px','auto','auto']}
             w={'350px'}
             h={'auto'}
           
             >
                  <Heading
               fontSize={['25px','30px','30px','36px']}
                fontWeight={'500'}
                color={'#FDFDFD'}
                lineHeight={'normal'}
                >
               Publication
                </Heading>
                
                <OrderedList styleType={'none'}
       fontSize={['15px','17px','20px','24px']}
                fontWeight={'500'}
                color={'#FDFDFD'}
                lineHeight={'normal'}
                spacing={'25px'}
             ml={'0'}
             mt={'40px'}
                
                >
  <ListItem>
  <ListIcon as={BsFacebook}/>
    Facebook</ListItem>
  <ListItem>
  <ListIcon as={BsTwitter}/>
    Twitter</ListItem>
  <ListItem>
  <ListIcon as={BsInstagram}/>
    Instagram</ListItem>
  <ListItem>
  <ListIcon as={BsYoutube}/>
    Youtube</ListItem>
</OrderedList>
                
                </Box>       
                       
                    


                </Stack>
               </Box>

    )
}