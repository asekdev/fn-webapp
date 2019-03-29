import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";

const Footer = () => {
  return (
    <Menu className="footer" borderless color="grey" inverted widths={1}>
      <Menu.Item>
        <Button
          inverted
          content='Donate'
          icon='paypal'
        />
      </Menu.Item>
    </Menu>
  );
};

export { Footer };
