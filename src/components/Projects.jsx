import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import PropTypes from "prop-types";
import hrPreview from "../assets/hrapp-preview.png";
import abcsMediaPreview from "../assets/abcs-media-preview.png";
import frontendPreview1 from "../assets/frontend-mentor-order.png";

export default function Projects() {
  const [value, setValue] = useState(0);

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
      <Typography id="projects" variant="h5" gutterBottom mt={4}>
        Projects
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the project section of my portfolio. It was made with React and
        Material UI, and is designed to be responsive and visually appealing.
        The project section includes tabs for different categories of projects,
        and each tab contains a description of the project and a preview image.
        The project section is also designed to be accessible, with proper ARIA
        attributes and keyboard navigation support.
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs for projects"
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="React/Javascript" {...a11yProps(0)} />
            <Tab label="Wordpress/PHP" {...a11yProps(1)} />
            <Tab label="CSS Showcases" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div
            className="bg-black/20 p-6 r            
            backdrop-blur-xl      
            rounded-xl           
            border border-white/5
            shadow-2xl"
          >
            <Typography variant="body2" gutterBottom>
              Simple React project. Pulls data from a database, allows the user
              to add an employee to the database, and also to edit some of the
              submitted data on the fronted too. Backend may be slow to load the
              first time, as it's using a free tier from Render.com, so give it
              up to a minute to spin up, please. Feel free to add an employee,
              edit the employee's name, and then refresh the page to see the
              changes persist. Changes will not be saved between spin ups of the
              free service, but it should work as expected while the service is
              running.
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
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div
            className="bg-black/20 p-6 r            
            backdrop-blur-xl      
            rounded-xl           
            border border-white/5
            shadow-2xl"
          >
            <Typography variant="body2" gutterBottom>
              Practice project for recreating a WordPress site with a custom
              theme. All credit to the original creators of the site, Alfons Oy,
              whose designed I aimed to recreate. The project includes a custom
              theme built with PHP and styled with CSS. Here is a link to the
              original site that I recreated:{" "}
              <a
                href="https://www.abcsmedia.com/"
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
                  className="h-full w-full rounded-lg object-cover p-4"
                />
              </a>{" "}
            </Typography>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div
            className="bg-black/20 p-6 r            
            backdrop-blur-xl      
            rounded-xl           
            border border-white/5
            shadow-2xl"
          >
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
                className="mx-auto block h-140 w-120 rounded-lg object-cover p-4"
              />
            </Typography>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
