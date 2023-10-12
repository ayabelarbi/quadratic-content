import { Box } from "@mui/system";
import { Card, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../main.css";

function Home() {

  let history = useNavigate();

  const handleRedirectCreate = () => {
    history('/create');
  };
  

  const handleRedirectVote = () => {
    history('/vote');
  }




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
          color: "#fcd15b",
          fontSize: "5rem",
          fontWeight: "bold",

        }}
      >
        learn.earn.protect{" "}
      </h1>
      <h2> 
      </h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "50vh",
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
            background:"#0f172a",
          }}
        >
          <Button
            style={{
                        background:"#ddd7ff", 
                        color:"black",
                        }}

            onClick={handleRedirectCreate}
            >
            Create content 
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
            background:"#0f172a",

          }}
        >
          <Button 
            style={{background:"#ddd7ff", color:"black"}}

            onClick={handleRedirectVote}

            > 
            Vote for the best content
        </Button>
        </Card>
      </Box>
    </Box>
  );
}
export default Home;
