import { FC } from "react";

import { SvgIconComponent } from "@mui/icons-material";
import { Typography } from "@mui/material";

type IconCardProps = {
  text?: string;
  title: string;
  Icon: SvgIconComponent;
};

const IconCard: FC<IconCardProps> = ({ text, Icon, title }) => {
  return (
    <>
      <Icon
        sx={{
          fontSize: 100,
        }}
        color="primary"
      ></Icon>
      <Typography variant="h5" color="secondary">
        {title}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </>
  );
};

export default IconCard;
