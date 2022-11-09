import { Box, Checkbox, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { Ads } from "../Components/Ads"
import { Sidebar } from "../Components/Sidebar"

export const Hotels = () => {
    return (
        <>
        {/* <Box w='100%' bg="rgb(245,245,245)" border='1px solid'> */}
        <Flex w='100%'  gap='30px' bg="rgb(245,245,245)">
            <Box>
            <Sidebar/>
            </Box>
            <Spacer/>
            <Box marginTop='20px'>
                <Flex >
                    <Box border='1px solid' w="40%" >
                        <Image  src="https://images.trvl-media.com/hotels/3000000/2370000/2369900/2369850/1ecc54fd.jpg?impolicy=resizecrop&rw=455&ra=fit" alt="1"/>

                    </Box>
                    <Box w='60%' bg='white' padding="10px">
                        <Text textAlign="left" fontSize="20px" fontWeight="bold">Knights Inn Brooklyn Sunset Park</Text>
                        <Text textAlign="left" >1.5-star Property</Text>
                        <Text textAlign="left" >11.24 mi from john f intl</Text>
                        <Flex marginTop="20px">
                            <Box>
                                <Text textAlign="left">Fully refundable</Text>
                                <Text textAlign="left">Reserve now, pay later</Text>
                                <Text textAlign="left">3.1/5 (583 reviews)</Text>
                            </Box>
                            <Spacer/>
                            <Box>
                                <Text textAlign="left">$161</Text>
                                <Text textAlign="left">$191 total</Text>
                            </Box>
                        </Flex>
                        
                    </Box>
                </Flex>
                <Flex marginTop='20px'  >
                    <Box w='40%'>
                        <Image src="https://images.trvl-media.com/hotels/3000000/2370000/2369900/2369850/1ecc54fd.jpg?impolicy=resizecrop&rw=455&ra=fit" alt="1"/>

                    </Box>
                    <Box w='60%' bg='white' padding="10px">
                        <Text textAlign="left" fontSize="20px" fontWeight="bold">Knights Inn Brooklyn Sunset Park</Text>
                        <Text textAlign="left" >1.5-star Property</Text>
                        <Text textAlign="left" >11.24 mi from john f intl</Text>
                        <Flex marginTop="20px">
                            <Box>
                                <Text textAlign="left">Fully refundable</Text>
                                <Text textAlign="left">Reserve now, pay later</Text>
                                <Text textAlign="left">3.1/5 (583 reviews)</Text>
                            </Box>
                            <Spacer/>
                            <Box>
                                <Text textAlign="left">$161</Text>
                                <Text textAlign="left">$191 total</Text>
                            </Box>
                        </Flex>
                        
                    </Box>
                </Flex>
            </Box>
            <Spacer/>
            <Box>
            <Ads/>
            </Box>
          
        </Flex>
           
        {/* </Box> */}
        </>
    )
}