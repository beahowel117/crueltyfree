import { Flex, Heading } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";

export default function Home(){
    return (
        <Flex justifyContent="center" alignItems="center" direction="column">
            <Heading>Cruety Free</Heading>
            <NavBar />
        </Flex>
        
    )
}