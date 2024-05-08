import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';



function Menuitems({ pressHeaderIcon, setMenuOpen, label, icon, badge, path, title }) {
  return (
    
    <div>
      <MenuItem onClick={() => { pressHeaderIcon(); setMenuOpen(path) }}>
        <Tooltip title={title} placement="bottom">
          <IconButton size="large" aria-label={icon} color="inherit">
            <Badge badgeContent={4} color="error">
              {badge}
            </Badge>
          </IconButton>
        </Tooltip>
        <p>{label}</p>
      </MenuItem>
    </div>
  );
}

export default Menuitems;
