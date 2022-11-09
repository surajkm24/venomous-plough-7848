import { Box, Checkbox, Grid, GridItem, Stack, Text } from "@chakra-ui/react"

export const Sidebar=()=>{
    return (
        <>
        
            
                <Box  padding="10px">
                    <Text textAlign="left" fontSize="2xl" fontWeight="bold">Filter by</Text>
                    <Text textAlign="left" fontSize="xl">Popular filters</Text>
                    
                    <Stack spacing={[1, 1]} direction={['column', 'column']}>
                       
                        <Checkbox size='md' colorScheme='green' >
                            Hot tub
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Times Square
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Free airport shuttle
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Bed & breakfast
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            All inclusive
                        </Checkbox>

                    </Stack>

                    <Text  textAlign='left' marginTop="20px" fontSize="xl">Guest rating</Text>
                    <Stack spacing={[1, 1]} direction={['column', 'column']}>
                    <Checkbox size='md' colorScheme='green' >
                            Any
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Wonderful 4.5+
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Very good 4+
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Good 3.5+
                        </Checkbox>
                    </Stack>
                    <Text textAlign='left' marginTop="20px" fontSize="xl">Star rating</Text>
                    <Grid templateAreas={`"one two three"
                                          "four five none"
                    `}
                    // gridTemplateRows={'1fr 1fr '}
                    // gridTemplateColumns={'1fr 1fr'}
            
                    gap='1'
                    color='blackAlpha.700'
                    fontWeight='bold'
                    >
                     <GridItem bg="white" border="1px solid" borderRadius="5px"  area={'one'}>1 star</GridItem>
                     <GridItem bg="white"  border="1px solid"  borderRadius="5px"     area={'two'}>2 star</GridItem>
                     <GridItem bg="white"  border="1px solid"   borderRadius="5px"     area={'three'}>3 star</GridItem>
                     <GridItem bg="white"  border="1px solid"  borderRadius="5px"     area={'four'}>4 star</GridItem>
                     <GridItem bg="white"  border="1px solid"   borderRadius="5px"     area={'five'}>5 star</GridItem>
                     <GridItem  area={'none'}></GridItem>
                    </Grid>
                    <Text textAlign='left' marginTop="20px" fontSize="xl">Payment type</Text>
                    <Stack spacing={[1, 1]} direction={['column', 'column']}>
                    <Checkbox size='md' colorScheme='green' >
                            Fully refunded
                        </Checkbox>
                        <Checkbox w='200px' size='md' colorScheme='green' >
                            Reverse now, pay later
                        </Checkbox>
                      
                    </Stack>
                    <Text textAlign='left' marginTop="20px" fontSize="xl">Property type</Text>
                    <Stack spacing={[1, 1]} direction={['column', 'column']}>
                    <Checkbox size='md' colorScheme='green' >
                            Bed & breakfast
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Hotel resort
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Hotel 
                        </Checkbox>
                      
                    </Stack>
                </Box>
               
       
        </>
    )
}