import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link"

export const ButtonLink = ({label, href}) => {

  return (    
    <Link href={href}>
      <a>
      {label}
      </a>
    </Link>
  );
};

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

ButtonLink.defaultProps = {
  label: "Clique",
  href: "#"
}