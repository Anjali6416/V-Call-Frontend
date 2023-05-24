import {
  Box,
  VStack,
  Button,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MeetingCard({
  elem: { topic, meetingLink, hostEmail, participants, dateandtime, duration },
}) {
  return (
    <Box as={Container} maxW="7xl" mt={1} p={0}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem
          bg={"#fff"}
          colSpan={1}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          p={8}
        >
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              {topic}
            </chakra.h2>
            <Button
              colorScheme="green"
              size="md"
              onClick={() => {
                window.location.href = meetingLink;
              }}
            >
              Join Now
            </Button>
          </VStack>
        </GridItem>
        <GridItem
         bg={"#fff"}
          alignItems={"left"}
          p={5}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        >
          {/* <Flex> */}
          <Box textAlign={"left"}>
            <chakra.p style={{ color: "teal", fontWeight: "600" }}>
              <span style={{ fontWeight: "600", color: "black" }}>Host: </span>{" "}
              {hostEmail}
            </chakra.p>
            <chakra.p style={{ color: "teal", fontWeight: "600" }}>
              <span style={{ fontWeight: "600", color: "black" }}>
                Participants:{" "}
              </span>{" "}
              {participants.join(", ")}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Date and Time: </span>{" "}
              {dateandtime}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Duration: </span> {duration}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Link : </span>{" "}
              <Link to={meetingLink} style={{ color: "#5DADE2" }}>
                {meetingLink}
              </Link>
            </chakra.p>
          </Box>

          {/* </Flex> */}
        </GridItem>
      </Grid>
      <Divider my={5}  />
    </Box>
  );
}
export default MeetingCard;
