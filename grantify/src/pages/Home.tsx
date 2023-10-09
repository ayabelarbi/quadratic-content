import { Box } from "@mui/system";
import { Card, Button } from "@mui/material";

import "../main.css";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50vh",
      }}
    >
      <h1
        style={{
          color: "#ddd7ff",
          fontSize: "5rem",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          textShadow: "2px 2px 2px black",
        }}
      >
        earn.learn.create{" "}
      </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "50vh",
          border: "1px solid black",
          gap: "1rem",
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
                        background:"#ddd7ff", 
                        color:"black",
                        }}

            onClick={() => {
              window.location.href = "/create";
            }}
            >
             Create a content 
             
            </Button>
        </Card>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button 
            style={{background:"#ddd7ff", color:"black"}}

            onClick={() => {
              window.location.href = "/vote";
            }}

            > 
            Vote for the best content
        </Button>
        </Card>
      </Box>
    </Box>
  );
}
export default Home;
