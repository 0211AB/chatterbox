import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
// import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ other_user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "whatsapp.200",
        color: "Black",
      }}
      w="100%"
      display='flex'
      alignItems="center"
      color="black"
      background="whatsapp.50"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={other_user.name}
        src={other_user.pic}
      />
      <Box>
        <Text>{other_user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {other_user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
