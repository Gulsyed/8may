import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Setting = () => {
  // Dummy notification messages
  const notificationMessages = [
    "Notification message 1",
    "Notification message 2",
    "Notification message 3"
  ];

  return (
    <div>
      <div>Setting</div>
      <List>
        {notificationMessages.map((message, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Setting;
