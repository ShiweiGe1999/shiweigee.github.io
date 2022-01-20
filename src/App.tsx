import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  Avatar,
  CardActionArea,
  CssBaseline,
  Divider,
  Grid,
  ThemeOptions,
  useMediaQuery,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';

const projects = [
  {
    title: 'Social Networking (mock facebook)',
    content:
      'Huge MERN Stack production application completed by Complete software engineering cycle. Support Group chat, private chat, networking, post, sending friend request, socket real time media message and so on',
    media: 'socialnetworking.png',
    url: 'https://fall-2021-social-network.herokuapp.com/',
  },
  {
    title: 'Car Trader (Mock Car max)',
    content:
      'Next.js application, programmed in Typescript. User can upload their car information like Craiglist to sell their cars on website.  ',
    media: 'cartrader.png',
    url: 'https://github.com/ShiweiGe1999/cartrader',
  },
  {
    title:
      'Predictive Analysis of Cryptocurrency Trading with Crypto History Data',
    content:
      'Collecting 32 GB of Cryptocurrency Data from Kaggle doing predictive analysis on the profit in next five minutes utilizing various Machine Learning models such as Random Forest, Linear Regress, Artificial Neural Networks and finally using XGBosst model on big data with Apache Spark. Wrangled and cleaned the data on cloud with Apache Spark and uploaded the cleaned and joined data to Amazon S3. Trained the data with kinds of machine learning model to predict the profit. Data visualization on the prediction. Achieved 90% of accuracy by XGboost model finally!',
    media: 'crypto.jpeg',
    url: 'https://github.com/ShiweiGe1999/Exploration-and-Predictive-Analysis-of-Cryptocurrency-Trading-with-Binance-History-Data',
  },
  {
    title: 'Programmable Environmental Chamber',
    content:
      'A hybrid project among Computer science, Electrical Engineering and Mechanical Engineering finished by a team of 8. Making a real huge environmental chamber from scratch and connect electrical power, then created a website with a back-end connecting to Arduino to control the Humidity, fan speed, light intensity, light color and temperature in the chamber. It takes a year to finish the project.',
    media: 'chamber.jpg',
    url: 'https://www.floridatechvirtualshowroom.com/environment-chamber',
  },
  {
    title: 'Yelp Camp',
    content:
      'EJS, Mongo DB, Express.js multipage full-stack application with passport, session, cookie. Implemented Helmet, input validation, sanitize on back-end to prevent malicious attack.',
    media: 'yelp.png',
    url: 'https://github.com/ShiweiGe1999/YelpCamp',
  },
  {
    title: 'Discord Bot (music bot)',
    content:
      'A scalable music bot that could serve multiple users with different roles in the same time, provide high-quality music to discord users',
    media: 'discordbot.png',
    url: 'https://github.com/ShiweiGe1999/Discordbot',
  },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

ScrollTop.defaultProps = {
  window: () => window,
  children: null,
};

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const onOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.5,
  });
  const [projectRef, projectInView] = useInView({
    threshold: 0.2,
  });
  const toggleMode = React.useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);
  const themeOptions: ThemeOptions = React.useMemo(
    () => ({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#6695b7',
        },
        secondary: {
          main: '#f50057',
        },
      },
      typography: {
        fontFamily: 'Open Sans, sans-serif',
      },
    }),
    [darkMode],
  );
  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(themeOptions)),
    [darkMode],
  );
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      <List>
        {['about', 'experience', 'project'].map((text) => (
          <a
            href={`#${text}`}
            style={{ textDecoration: 'inherit', color: 'inherit' }}
            key={text}
          >
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isMobile && (
        <AppBar position="fixed">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              id="basic-button"
              onClick={onOpenDrawer}
            >
              <MenuIcon />
            </IconButton>
            <IconButton size="large" onClick={toggleMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Drawer anchor="right" open={openDrawer} onClose={onCloseDrawer}>
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
      )}
      {!isMobile && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            bgcolor: !darkMode ? 'primary.main' : 'rgba(255,255,255,0.09)',
            minWidth: '17rem',
            color: 'inherit',
            position: 'fixed',
            top: 0,
            left: 0,
            pt: 10,
            pb: 10,
          }}
        >
          <Avatar
            src="./avatarme.JPEG"
            sx={{ width: '160px', height: '150px', mb: 2 }}
          />
          <Typography
            variant="h6"
            sx={[
              {
                fontWeight: (theme) => theme.typography.fontWeightBold,
                color: 'white',
                letterSpacing: '0.05rem',
                mb: 1.5,
                opacity: aboutInView ? 1 : 0.7,
              },
              {
                '&:hover': {
                  opacity: 1,
                },
              },
            ]}
          >
            <a
              href="#about"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              ABOUT
            </a>
          </Typography>
          <Typography
            sx={{
              fontWeight: (theme) => theme.typography.fontWeightBold,
              color: 'white',
              letterSpacing: '0.05rem',
              mb: 1.5,
              opacity: experienceInView ? 1 : 0.7,
              '&:hover': {
                opacity: 1,
              },
            }}
            variant="h6"
          >
            <a
              href="#experience"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              EXPERIENCE
            </a>
          </Typography>
          <Typography
            sx={{
              fontWeight: (theme) => theme.typography.fontWeightBold,
              color: 'white',
              letterSpacing: '0.05rem',
              mb: 1.5,
              opacity: projectInView ? 1 : 0.7,
              '&:hover': {
                opacity: 1,
              },
            }}
            variant="h6"
          >
            <a
              href="#project"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              PROJECT
            </a>
          </Typography>
          <IconButton size="large" onClick={toggleMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      )}
      <Box sx={{ ml: !isMobile ? '17rem' : 'unset' }}>
        <Box
          id="about"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            px: isMobile ? '1rem' : '3rem',
            pt: 10,
            pb: 10,
          }}
          ref={aboutRef}
        >
          <Box>
            <Grow in={!isMobile ? aboutInView : true}>
              <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
                <span style={{ color: theme.palette.info.light }}>Shiwei</span>
                {' '}
                <span style={{ color: theme.palette.primary.main }}>Ge</span>
              </Typography>
            </Grow>
            <Grow
              in={!isMobile ? aboutInView : true}
              style={{ transformOrigin: '0 0 0' }}
              {...(aboutInView ? { timeout: 700 } : {})}
            >
              <Typography
                variant="h6"
                sx={{
                  textTransform: 'uppercase',
                  mb: 5,
                  fontWeight: theme.typography.fontWeightBold,
                  color: 'text.secondary',
                }}
              >
                4815 PAGOSA SPRING CIR | FLORIDA, FL 32901·
                <a
                  href="mailto:ajie4095@gmail.com"
                  style={{ color: theme.palette.primary.main }}
                >
                  geshiwei@seas.upenn.edu
                </a>
              </Typography>
            </Grow>
            <Grow
              in={!isMobile ? aboutInView : true}
              style={{ transformOrigin: '0 0 0' }}
              {...(aboutInView ? { timeout: 1400 } : {})}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: 'text.secondary', mb: 3 }}
              >
                Master Student Major in Scientific Computing (Computational Science), University of
                Pennsylvania
              </Typography>
            </Grow>
            <Grow
              in={!isMobile ? aboutInView : true}
              style={{ transformOrigin: '0 0 0' }}
              {...(aboutInView ? { timeout: 2000 } : {})}
            >
              <Typography
                color="primary.light"
                variant="h6"
                sx={{ width: isMobile ? '100%' : '70%', mb: 2 }}
              >
                Hi, My name is Shiwei Ge, I am enthusiastic about Typescript and
                Javascript development and curious about learning the newest
                technology &#9997;. My favorite and most proficient frameworks
                are React, Material UI, TailwindCSS, Redux, Express.js, Next.js.
                In my spare time, I&apos;d like to chill out alone playing some
                videos games and be an Eboy &#127749;. I am currently trying my
                best to connect people! Come on and follow me on GitHub or
                Linkindin. Thanks &#10084;!
              </Typography>
            </Grow>
            <Grow
              in={!isMobile ? aboutInView : true}
              style={{ transformOrigin: '0 0 0' }}
              {...(aboutInView ? { timeout: 2000 } : {})}
            >
              <Box>
                <IconButton>
                  <a href="https://www.linkedin.com/in/shiwei-ge-3b0260203/">
                    <LinkedInIcon
                      sx={{
                        width: '56px',
                        height: '56px',
                        color: theme.palette.primary.main,
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://github.com/ShiweiGe1999">
                    <GitHubIcon
                      sx={{
                        width: '56px',
                        height: '56px',
                        color: theme.palette.primary.main,
                      }}
                    />
                  </a>
                </IconButton>
              </Box>
            </Grow>
          </Box>
        </Box>
        <Divider />
        <Box
          id="experience"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            px: isMobile ? '1rem' : '3rem',
          }}
          ref={experienceRef}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ color: 'primary.main', mb: 2 }} variant="h5">
                Experience
              </Typography>
              <Timeline position="alternate" sx={{ width: '100%' }}>
                <Grow
                  in={!isMobile ? experienceInView : true}
                  style={{ transformOrigin: '0 0 0' }}
                >
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      2021 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <img
                        alt="fl"
                        src="penn.jpg"
                        style={{ marginTop: '1rem', marginBottom: '1rem' }}
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        University of Pennsylvania
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Master of Science in Scientific Computing (Computational Science)
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Grow>
                <Grow
                  in={!isMobile ? experienceInView : true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(experienceInView ? { timeout: 700 } : {})}
                >
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      variant="body2"
                      color="text.secondary"
                    >
                      2022/01 - 2022/05
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <img
                        alt="fl"
                        src="penn.jpg"
                        style={{ marginTop: '1rem', marginBottom: '1rem' }}
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Teaching Assistant
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        CIS350 Software Engineering
                        {' '}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Grow>
                <Grow
                  in={!isMobile ? experienceInView : true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(experienceInView ? { timeout: 1400 } : {})}
                >
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      color="text.secondary"
                    >
                      2019 - 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{}} />
                      <img
                        alt="fl"
                        src="Florida.jpg"
                        style={{ marginTop: '1rem', marginBottom: '1rem' }}
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Florida Institute of Technology
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Bachelor of Science in Mechanical Engineering
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Grow>
                <Grow
                  in={!isMobile ? experienceInView : true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(experienceInView ? { timeout: 2000 } : {})}
                >
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      2017 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <img
                        alt="fl"
                        src="wit.jpg"
                        style={{ marginTop: '1rem', marginBottom: '1rem' }}
                      />
                      <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Wuhan Institute of Technology
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Bachelor of Science in Energy and Power
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Grow>
              </Timeline>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          id="project"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            pt: 10,
            pb: 10,
            px: isMobile ? '1rem' : '3rem',
          }}
          ref={projectRef}
        >
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ color: 'primary.main', mb: 2 }} variant="h5">
              Project
            </Typography>
            <Grid container spacing={2}>
              {projects.map((v, i) => (
                <Grid item xs={12} md={6} xl={5} key={v.title}>
                  <Grow
                    in={!isMobile ? projectInView : true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(projectInView ? { timeout: i * 700 } : {})}
                  >
                    <Card sx={{ height: '100%' }}>
                      <a
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        href={v.url}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={v.media}
                            alt={v.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {v.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {v.content}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </a>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Divider />
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </ThemeProvider>
  );
}

export default App;
