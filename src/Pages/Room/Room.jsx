import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Box, Text } from "@chakra-ui/react";

function Room() {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appID = 1122952862;
    const serverSecret = "32d880d8525a32d028d450a118323b70";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Anjali"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url:
           window.location.protocol + '//' +
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <Box bg={"gray.50"} h={"100vh"}>
        <Box padding={"10"} >
            <Text fontSize={"2xl"} fontWeight={"semibold"}>Room ID : {roomID}</Text>
        </Box>
        <Box ref={myMeeting}/>
    </Box>
    // <div>
    //   <h1>Room</h1>
    //   <h2>Room Id : {roomID}</h2>
    //   {/* <div ref={myMeeting}/> */}
    // </div>
  );
}
export default Room;
