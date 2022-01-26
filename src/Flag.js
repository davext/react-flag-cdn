import React from "react";
import PropTypes from 'react-proptypes';
import {countryISOs} from "./countryISOs";

/**
 * Renders a <Flag /> component
 * @param  props
 * @param  props.width - The size of the flag
 * @param  props.textColor - the color of the text in the button
 * @param  props.bgColor - the background color of the button
 * @param  props.overrideStyles - used to set the CSS of the button
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
}


export default Flag;
