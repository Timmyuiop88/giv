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
Wrap, WrapItem,
Progress,
Card, CardHeader, CardBody, CardFooter,
Divider,ButtonGroup,OrderedList,ListItem
} from "@chakra-ui/react";
import Image from 'next/image'
export default function Fund(props){
    
    return(

      <Card minW={props.w} maxW={props.w} m={'auto'} bg={'none'} border={'none'} boxShadow={'none'}>
      <CardBody >
     
        <Image
        width={'348'}
        height={'232'}
          src='/images/donate.png'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='10px'>
          <Heading 
          
          fontSize={'15px'}
          
         fontWeight={'700'}
         lineHeight={'24px'}
          
          
          >Raising Money for Burnt Property</Heading>
          <Text
          
           color={'#767676'}
           fontSize={'14px'}
           fontStyle={'italic'}
           fontWeight={'300'}
           lineHeight={'21px'}
           >
          Hi, I’m Debbie Lynn! I’m raising funds for my friend, Lorna Van Pelt, who has been suffering with severe…
          </Text>
          <Progress borderRadius={'6px'} size='sm' value={45} />
         
        </Stack>
      </CardBody>
      <OrderedList 
            
            display={'flex'}
            justifyContent={'space-between'}
               
                  color={"#434A5B"}
                  textAlign={"left"}
              w={'90%'}
    listStyleType={'none'}
              fontSize={['16px']}

      
      pr={2}
              
              >
<ListItem>$244 raised</ListItem>
<ListItem>$500 target</ListItem>
<ListItem>24 donations</ListItem>

</OrderedList>
      <CardFooter>
 
 
      </CardFooter>
    </Card>
    
    )
}