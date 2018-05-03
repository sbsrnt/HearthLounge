import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import {supported_domains} from "../containers/pages/reddit/utils/posts";

const selectType = (
    iconName,
    title = null,
    className = '',
    type = null,
    tooltip = false,
    tooltipPlacement = "bottom",
    domain = null,
    linkFlairText = null,
    handleClick = null,
    id = null
    ) => {

  const validateSet = () =>{
    switch(iconName){
      case "classic": return "hs-logo";
      case "curse-of-naxxramas": return "naxxramas";
      case "one-night-in-karazhan": return "karazhan";
      case "journey-to-un-goro": return "journey-to-ungoro";
      default: return _.toLower(_.kebabCase(iconName));
    }
  };
  const validateMode = iconName === "standard" ? "mammoth" : iconName;

  const iconWrapper = (icon) => {
    let iconTitle = title ? title : iconName;
    return (
        <Tooltip title={_.capitalize(iconTitle)}
                 placement={tooltipPlacement}
                 arrowPointAtCenter={true}>
          {icon}
        </Tooltip>
    )
  };

  const redditDomainIcons = (domain) => {
    if(linkFlairText !== null){
      let flair_text = linkFlairText.toLowerCase();
      let self = domain.includes(supported_domains[2]);

      if (domain.includes(supported_domains[0])) return icon("battlenet");
      else if (domain.includes(supported_domains[1]) || domain.includes(supported_domains[4])) return icon("youtube");
      else if (self && flair_text !== "tournament") return icon("bubbles2");
      else if (self && flair_text === "tournament") return icon("trophy");
      else if(domain.includes(supported_domains[5])) return icon("twitch");
      else return icon("redirect");
    }
    return icon("redirect")
  };


  let icon = (name) => {
    let icon = <span id={id} onClick={handleClick} className={`hs-icon icon-${_.toLower(name)} ${className}`}/>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  let manaIcon = (name) => {
    let icon = <span id={id} onClick={handleClick} className={`hs-icon icon-mana-${_.toLower(name)} ${className}`}/>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  let rarityIcon = () => {
    let icon = <span id={id} onClick={handleClick} className={`hs-icon icon-rarity active-without-background ${_.toLower(className)}`}/>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  switch(type){
    case 'set': return icon(validateSet(iconName));
    case 'mode': return icon(validateMode);
    case 'mana': return manaIcon(iconName);
    case 'rarity': return rarityIcon(iconName);
    case 'reddit': return redditDomainIcons(domain);
    default: return icon(iconName);
  }
};

const Icon = ({name, title, className, type, tooltip, tooltipPlacement, domain, linkFlairText, handleClick, id}) => selectType(name, title, className, type, tooltip, tooltipPlacement, domain, linkFlairText, handleClick, id);

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  tooltip: PropTypes.bool,
  tooltipPlacement: PropTypes.string,
  domain: PropTypes.string,
  linkFlairText: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string
};