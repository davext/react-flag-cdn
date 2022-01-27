import React from "react";
import PropTypes from 'prop-types';
import {countryISOs} from "./countryISOs";

/**
 * Renders a <Flag /> component
 * @param  props
 * @param  {number} props.width - The size of the flag
 * @param  {string} props.country - the color of the text in the button
 * @param  {string} props.type - type of the image returned. ['svg', 'jpg', 'png'] defaults to svg.
 */
const Flag = (props) =>{
    return (
        <img
            {...props}
            width={props.width??"100"}
            src={`https://flagcdn.com/${props.country?.toLowerCase()}.${props.type ?? "svg"}`}
            alt={countryISOs[props.country?.toUpperCase()]}/>
    )
}
Flag.propTypes = {
  /**
   * Country code in ISO 3166 format. See https://www.iso.org/iso-3166-country-codes.html
   */
  country: PropTypes.oneOf(Object.keys(countryISOs)),
  width: PropTypes.number,
  type: PropTypes.oneOf(["svg","png","jpg"])
}


export default Flag;
