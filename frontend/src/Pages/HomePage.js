import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import React from 'react'

const Homepage = () => {
  const history = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user)

    if (user) history("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display='flex'
        justifyContent="center"
        p={3}
        color="whiteAlpha.900"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      >
        <Text fontSize="5xl" fontFamily="Work sans" align='center'>
          Chatter Box 
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme='green'>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage