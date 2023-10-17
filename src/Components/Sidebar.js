import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TopCard from "./TopCard/TopCard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Grid } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PieChart from "./PieChart/PieChart";
import PieChartCus from "./PieChart/PieChart";
import BarChartInReactJs from "./BarChartInReactJs";

const drawerWidth = 210;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedNav, setSelectedNav] = React.useState("Dashboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: "#F5F6F8" }}>
          <IconButton
            style={{ color: "black" }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 0, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            Hello Sharook 🤚,,
          </Typography>
          <input
            placeholder="Serach here"
            style={{
              position: "absolute",
              top: "10px",
              right: "0",
              width: "250px",
              height:"30px",


            }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#040440",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        style={{ paddingTop: 12 }}
      >
        <DrawerHeader>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // marginBottom: 18
              // justifyContent: 'center'
            }}
          >
            <WidgetsIcon fontSize="large" style={{ color: "white" }} />
            <p
              style={{
                marginBottom: 0,
                color: "white",
                fontSize: 18,
                textTransform: "capitalize",
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              Dashboard
            </p>
          </div>

          <IconButton style={{ color: "white" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider style={{ height: 30 }} />
        <List
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {[
            "Dashboard",
            "Product",
            "Customers",
            "Income",
            "Promote",
            "Help",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              style={{
                backgroundColor: selectedNav === text ? "#2D2D68" : null,
                marginBottom: 12,
                width: "90%",
                borderRadius: 8,
                fontSize: 13,
              }}
            >
              <ListItemButton
                onClick={() => {
                  setSelectedNav(text);
                }}
              >
                <ListItemIcon style={{ color: "white" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <p style={{ color: "white", marginBottom: 0, flex: 1 }}>
                  {text}
                </p>
                {/* <ListItemText style={{ color: "white" }} secondary={text} /> */}
                {selectedNav !== text ? (
                  <ArrowForwardIosIcon
                    fontSize="small"
                    style={{ color: "white", height: 10 }}
                  />
                ) : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main style={{ window: window.innerWidth * 1 }} open={open}>
        <DrawerHeader />
        <Grid
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            // backgroundColor: "red",
            paddingTop: 3,
          }}
          container
          spacing={2}
        >
          <TopCard
            imageColor={"#37BA6A"}
            title={"Earning"}
            amount={"$198k"}
            cirleColor={"#DDFFEC"}
          />
          <TopCard
            Icon={FactCheckIcon}
            title={"Orders"}
            amount={"$2.4k"}
            cirleColor={"#E7DAFF"}
            imageColor={"#A405FE"}
          />
          <TopCard
            Icon={AccountBalanceWalletIcon}
            title={"Balance"}
            amount={"$2.4k"}
            cirleColor={"#CBF2FE"}
            imageColor={"#0A5BC0"}
          />
          <TopCard
            Icon={ContentPasteIcon}
            title={"Total Sales"}
            amount={"$89k"}
            cirleColor={"#FEAFD8"}
            imageColor={"#DD1831"}
          />
        </Grid>
        <Grid
          style={{
            display: "flex",
          }}
        >
          <BarChartInReactJs />
          <PieChartCus />
        </Grid>
      </Main>
    </Box>
  );
}
