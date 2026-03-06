import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import hrPreview from "../assets/hrapp-preview.png";
import abcsMediaPreview from "../assets/abcs-media-preview.png";
import frontendPreview1 from "../assets/frontend-mentor-order.png";
import PortfolioCard from "./PortfolioCard";

export default function Projects() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleExternalTabChange = (event) => {
      const tabIndex = event.detail?.tabIndex;
      if (typeof tabIndex === "number") {
        setValue(tabIndex);
      }
    };

    window.addEventListener("projects:tabchange", handleExternalTabChange);
    return () => {
      window.removeEventListener("projects:tabchange", handleExternalTabChange);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ px: 0, py: 3 }}>{children}</Box>}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div className="z-0">
      <div id="projects-react" />
      <div id="projects-wordpress" />
      <div id="projects-css" />
      <Typography
        id="projects"
        variant="h5"
        gutterBottom
        mt={3}
        mb={1}
        sx={{ scrollMarginTop: "96px" }}
      >
        Projects
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the project section of my portfolio, showcasing my work in
        React, WordPress, and CSS.
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs for projects"
            textColor="inherit"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab label="React/Javascript" disableRipple {...a11yProps(0)} />
            <Tab label="Wordpress/PHP" disableRipple {...a11yProps(1)} />
            <Tab label="CSS Showcases" disableRipple {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PortfolioCard>
            <Typography variant="body2" gutterBottom>
              Simple React project made with MUI. Pulls data from a database,
              allows the user to add an employee to the database, and also to
              edit some of the submitted data on the fronted too. Backend may be
              slow to load the first time, as it's using a free tier from
              Render.com, so give it up to a minute to spin up, please. Feel
              free to add an employee, edit the employee's name, and then
              refresh the page to see the changes persist. Changes will not be
              saved between spin ups of the free service, but it should work as
              expected while the service is running.
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a
                href="https://kmk9000.github.io/hrApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={hrPreview}
                  alt="HR App preview"
                  width={1600}
                  height={900}
                  className="h-full w-full rounded-lg p-4 object-cover"
                />
              </a>{" "}
            </Typography>
            <Typography variant="body2">
              <a
                href="https://github.com/kmk9000/hrApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline"
              >
                Here is the GitHub repository for this project.
              </a>{" "}
              There you can see aspects of the code that might not be visible at
              all times, such as the conditional rendering for scheduled
              meetings, and the use of React hooks for state management and side
              effects. The project also demonstrates the use of Material UI
              components for styling and layout, as well as best practices for
              organizing a React application.
            </Typography>
          </PortfolioCard>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PortfolioCard>
            <Typography variant="body2" gutterBottom>
              Practice project for recreating a WordPress site with a custom
              theme. All credit to the original creators of the site, Alfons Oy,
              whose designed I aimed to recreate. The project includes a custom
              theme built with PHP and styled with CSS. Here is a link to the
              original site that I recreated:{" "}
              <a
                href="https://www.abcsofmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE ABC BOOK OF MEDIA LITERACY
              </a>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a
                href="https://inspiring-tarsier-f66f11.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={abcsMediaPreview}
                  alt="WordPress project preview"
                  width={1600}
                  height={900}
                  className="h-full w-full rounded-lg object-cover p-4"
                />
              </a>{" "}
            </Typography>
          </PortfolioCard>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PortfolioCard>
            <Typography variant="body2" gutterBottom>
              CSS showcase work focused on layout, typography, and spacing.
            </Typography>
            <Typography variant="body2" gutterBottom>
              This is just a screenshot of a Frontend Mentor challenge I
              completed early on in my development journey. It was a great
              learning experience for me, as it helped me to understand how to
              approach a design and break it down into components, as well as
              how to use CSS to achieve the desired layout and styling. Even
              though it is very basic, it was a valuable project for me as I was
              learning the basics of front-end development at the very
              beginning.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="flex justify-center"
            >
              <img
                src={frontendPreview1}
                alt="CSS project preview"
                width={1600}
                height={1000}
                className="mx-auto block h-auto w-full max-w-xl rounded-lg object-cover p-4"
              />
            </Typography>
          </PortfolioCard>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
