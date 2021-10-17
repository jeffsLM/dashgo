import { Flex, Text, Box,Avatar } from "@chakra-ui/react";
export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text >
                Jefferson Matos
            </Text>
            <Text  color="gray.500" fontSize="smalgot">
                jefferson8841@gmail.com
            </Text>
        </Box>
        <Avatar size="md" name="Jefferson Lima" src="https://github.com/jeffsLM.png"/>
    </Flex>
    )
}