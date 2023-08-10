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
  import Fund from "./fund";
  import { useRef, useEffect, useState } from "react";

  import { FaChevronRight,FaChevronLeft } from "react-icons/fa6";

  const ref = { current: {} }
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  import { motion, isValidMotionProp,Variants,useAnimation, useScroll } from 'framer-motion';
  import { useInView } from "react-intersection-observer";
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 }
  };
export default function Featured(){
useScroll({
  target:'',
  offset:["0 1", "1.33 1"] 
})

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
    return(

        <Box
        w={'100%'}
        h={'auto'}
      
        pb={10}
        >
            <ChakraBox

ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
                 
            direction={'column'}
            w={'100%'}
            maxW={'6xl'}
            h={'auto'}
            m={'auto'}
            
            pt={20}
            >
      
                <Box
          p={5}
                w={'100%'}
                h={'auto'}
              textAlign={['left','left','center','center']}
                >
                    <Heading
                    fontSize={'54px'}
                    color={'#4D4D4D'}
                    fontWeight={600}
                    lineHeight={'75px'}
                    letterSpacing={'0.54px'}
                    >
                    Featured Projects
                    </Heading>

                </Box>
                <Box
               px={'5'}
                w={'100%'}
                h={'auto'}
                maxW={'3xl'}
                m={'auto'}
                
              textAlign={'center'}
                >
                    <Text
                    fontSize={'16px'}
                    fontWeight={'400px'}
                    lineHeight={'normal'}
                    letterSpacing={'0.16px'}
                    color={'#1D2C29'}
                    textAlign={['left','left','center','center']}
                    >
                    Lorem ipsum dolor sit amet consectetur. Porttitor diam mauris tincidunt ipsum ut nulla auctor at. Massa pellentesque.
                    </Text>

                </Box>
<Box w={'100%'}
pl={['5px','5px',10,10]}
h={'auto'}
m={'auto'}
pb={20}
display={'flex'}
justifyContent={'space-between'}

alignItems={'center'}
pr={['5','5',10,10]}
>
  <Stack
 direction={'row'}
 alignItems={'center'}
 spacing={10}
  overflowX={"scroll"}
  sx={{
    "::-webkit-scrollbar": {
      display: "none",
    },
  }}
  scrollSnapType={'x mandatory'}
 h={'auto'}
  justifyContent={"left"}
  m={"auto"}
  w={"100%"}
  >

<Hide below="md">

  <Button
  h={'50px'}
  w={'50px'}
  borderRadius={'100%'}
  bg={'#FFBE37'}
  color={'white'}
  onClick={() => scroll(-200)}
  >
    <FaChevronLeft

className="left-arrow"


/>

  </Button>

</Hide>
 
<Stack 
ref={ref}
  direction={["row", "row", "row", "row"]}
  overflowX={"scroll"}
  overflowY={'none'}
  sx={{
    "::-webkit-scrollbar": {
      display: "none",
    },
  }}
  scrollBehavior={'smooth'}
  scrollSnapType={'x mandatory'}
 h={'auto'}
  justifyContent={"left"}
  m={"auto"}
  w={"100%"}
  pt={10}
  spacing={0}
>
  

   <Fund
       w={['320px','320px','350px','350px']}

    fundraiserName="Organization "
    Description="Discover the inspiring stories of individuals and organizations who have used....."
    CreatedBy="4 Breath 4 Life"
    Amount="10000"
    Percent="37"
    TimeRemaining="250"
  />
   <Fund
    w={['320px','320px','350px','350px']}

    fundraiserName="Organization "
    Description="Discover the inspiring stories of individuals and organizations who have used....."
    CreatedBy="4 Breath 4 Life"
    Amount="10000"
    Percent="37"
    TimeRemaining="250"
  />
  <Fund
  w={['320px','320px','350px','350px']}

    fundraiserName="Organization "
    Description="Discover the inspiring stories of individuals and organizations who have used....."
    CreatedBy="4 Breath 4 Life"
    Amount="10000"
    Percent="37"
    TimeRemaining="250"
  />
  <Fund
      w={['320px','320px','350px','350px']}

    fundraiserName="Organization "
    Description="Discover the inspiring stories of individuals and organizations who have used....."
    CreatedBy="4 Breath 4 Life"
    Amount="10000"
    Percent="37"
    TimeRemaining="250"
  />
  <Fund
       w={['320px','320px','350px','350px']}

    fundraiserName="Organization "
    Description="Discover the inspiring stories of individuals and organizations who have used....."
    CreatedBy="4 Breath 4 Life"
    Amount="10000"
    Percent="37"
    TimeRemaining="250"
  />
  
</Stack>
<Hide below="md">

<Button
  h={'50px'}
  w={'50px'}
  borderRadius={'100%'}
  bg={'#FFBE37'}
  color={'white'}
  onClick={() => scroll(200)}
  >
<FaChevronRight
className="right-arrow"

/>
</Button>

</Hide>


  </Stack>


</Box>
                


            </ChakraBox>

        </Box>
    )
}