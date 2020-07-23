import React from 'react';
import {ReactComponent as ArrowIcon} from "assets/icons/arrow.svg";

export default ({ text, href }) => (
  <a href={href} className="btn__default">
    {text}
    <ArrowIcon />
  </a>
)
