import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Icon,
  Collapse
} from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { ActivityPercentage, BarGraph,ComponentType,Estimation,Header } from '../Routes';
import "../styles/MenuBar.css"

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleDropdownToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleItemClick = (component) => {
    setSelectedComponent(component);
  };
  const navItems = [
    { label: 'Dashboard', component: <BarGraph /> },
    { label: 'Generate Estimation', component: <Estimation /> },
    { label: 'Estimation List', component: "" },
    {
      label: 'Masters',
      category: [
        { label: 'Component Type', component: <ComponentType/> },
        { label: 'Complexity', component: "" },
        { label: 'Activity Percentage Split', component: <ActivityPercentage/> },
      ],
    },
  ];

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <div key={index}>
        <ListItem
          button
          onClick={() => {
            if (Array.isArray(item.category)) {
              handleDropdownToggle();
            }
            handleItemClick(item.component);
          }}
        >
          <ListItemText primary={item.label} />
          {Array.isArray(item.category) && (open ? (
            <Icon>
              <ExpandMore />
            </Icon>
          ) : (
            <Icon>
              <ChevronRight />
            </Icon>
          ))}
        </ListItem>
        {Array.isArray(item.category) && (
          <Collapse in={open}>
            <List component="div" disablePadding>
              {item.category.map((categoryItem, categoryIndex) => (
                <ListItem
                  button
                  key={categoryIndex}
                  sx={{ pl: 4 }}
                  onClick={() => handleItemClick(categoryItem.component)}
                >
                  <ListItemText primary={categoryItem.label} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <div>
      <Header/>
      <Box sx={{ display: 'flex' }}>
        <Box className="menu" sx={{ maxWidth: 350 }}>
          <List component="nav">{renderNavItems(navItems)}</List>
        </Box>
        <Box>{selectedComponent}</Box>
      </Box>
    </div>
  );
};


export default Homepage;







