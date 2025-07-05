import { Stack, Typography } from "@mui/material";
// import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h6" component="h2" sx={{ color: "white", fontWeight: "bold", ml: 1.5 }}>
        <span style={{ color: "white" ,fontSize:"3vh"}}>Lame</span>
        <span style={{ color: "red",fontSize:"3.2vh" }}>Tube</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
