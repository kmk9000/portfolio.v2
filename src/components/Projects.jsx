import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import PropTypes from "prop-types";

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
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    <>
      <Typography variant="h5" gutterBottom>
        <a id="projects">Projects</a>
      </Typography>
      <p>This is the project section of my portfolio.</p>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs for projects"
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="Project One" {...a11yProps(0)} />
            <Tab label="Project Two" {...a11yProps(1)} />
            <Tab label="Project Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="bg-black/20 p-6 rounded-xl shadow-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum libero nec metus mollis mattis. Integer ultricies felis a
              condimentum malesuada. Praesent nunc dolor, dictum quis fringilla
              vitae, semper tempor risus. Maecenas ut porta orci, vitae luctus
              dolor. Maecenas suscipit hendrerit rhoncus. Vestibulum sed sapien
              feugiat mauris dignissim semper sit amet id tortor. Vivamus quis
              pellentesque purus. Donec porttitor, eros sed fringilla vulputate,
              augue orci tincidunt magna, ut lacinia augue lorem ut quam. Proin
              sed fringilla nisi, vel ullamcorper erat. Nulla vehicula ante sit
              amet lectus mollis, tincidunt viverra justo porta. Duis leo est,
              viverra malesuada lobortis eget, bibendum ut magna. Sed non
              lobortis arcu, in dictum neque. Nullam tempus lorem quis orci
              faucibus accumsan. Maecenas dictum ultricies tincidunt.
              Suspendisse a nisi vitae leo dignissim elementum. Vivamus
              malesuada libero vitae odio convallis tincidunt.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla vitae consectetur nisi,
              quis tempor orci. Pellentesque ante est, posuere vitae iaculis sit
              amet, consectetur at mi. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Quisque id aliquam
              neque. Nullam rhoncus libero id sollicitudin scelerisque. Fusce
              nec cursus nunc.
            </p>
            <p>
              Quisque porttitor semper finibus. Aliquam a lectus a tellus
              finibus efficitur. Cras ultricies dolor vitae diam ullamcorper
              sollicitudin. Integer at convallis sapien. Nam ut tortor a nunc
              scelerisque tempor maximus vel massa. Integer accumsan tristique
              turpis et congue. Morbi viverra sollicitudin turpis, non auctor
              magna elementum suscipit. Pellentesque tempus sem vel lectus
              lobortis, sit amet tempor mauris cursus. Curabitur et facilisis
              magna. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris lacinia enim sed nisl
              eleifend, eu finibus nisl condimentum. Etiam aliquet massa vel
              sapien feugiat sagittis.
            </p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="bg-black/20 p-6 rounded-xl shadow-lg">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla vitae consectetur nisi,
              quis tempor orci. Pellentesque ante est, posuere vitae iaculis sit
              amet, consectetur at mi. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Quisque id aliquam
              neque. Nullam rhoncus libero id sollicitudin scelerisque. Fusce
              nec cursus nunc.
            </p>
            <p>
              Quisque porttitor semper finibus. Aliquam a lectus a tellus
              finibus efficitur. Cras ultricies dolor vitae diam ullamcorper
              sollicitudin. Integer at convallis sapien. Nam ut tortor a nunc
              scelerisque tempor maximus vel massa. Integer accumsan tristique
              turpis et congue. Morbi viverra sollicitudin turpis, non auctor
              magna elementum suscipit. Pellentesque tempus sem vel lectus
              lobortis, sit amet tempor mauris cursus. Curabitur et facilisis
              magna. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris lacinia enim sed nisl
              eleifend, eu finibus nisl condimentum. Etiam aliquet massa vel
              sapien feugiat sagittis.
            </p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="bg-black/20 p-6 rounded-xl shadow-lg">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla vitae consectetur nisi,
              quis tempor orci. Pellentesque ante est, posuere vitae iaculis sit
              amet, consectetur at mi. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Quisque id aliquam
              neque. Nullam rhoncus libero id sollicitudin scelerisque. Fusce
              nec cursus nunc.
            </p>
            <p>
              Quisque porttitor semper finibus. Aliquam a lectus a tellus
              finibus efficitur. Cras ultricies dolor vitae diam ullamcorper
              sollicitudin. Integer at convallis sapien. Nam ut tortor a nunc
              scelerisque tempor maximus vel massa. Integer accumsan tristique
              turpis et congue. Morbi viverra sollicitudin turpis, non auctor
              magna elementum suscipit. Pellentesque tempus sem vel lectus
              lobortis, sit amet tempor mauris cursus. Curabitur et facilisis
              magna. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris lacinia enim sed nisl
              eleifend, eu finibus nisl condimentum. Etiam aliquet massa vel
              sapien feugiat sagittis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum libero nec metus mollis mattis. Integer ultricies felis a
              condimentum malesuada. Praesent nunc dolor, dictum quis fringilla
              vitae, semper tempor risus. Maecenas ut porta orci, vitae luctus
              dolor. Maecenas suscipit hendrerit rhoncus. Vestibulum sed sapien
              feugiat mauris dignissim semper sit amet id tortor. Vivamus quis
              pellentesque purus. Donec porttitor, eros sed fringilla vulputate,
              augue orci tincidunt magna, ut lacinia augue lorem ut quam. Proin
              sed fringilla nisi, vel ullamcorper erat. Nulla vehicula ante sit
              amet lectus mollis, tincidunt viverra justo porta. Duis leo est,
              viverra malesuada lobortis eget, bibendum ut magna. Sed non
              lobortis arcu, in dictum neque. Nullam tempus lorem quis orci
              faucibus accumsan. Maecenas dictum ultricies tincidunt.
              Suspendisse a nisi vitae leo dignissim elementum. Vivamus
              malesuada libero vitae odio convallis tincidunt.
            </p>
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
}
