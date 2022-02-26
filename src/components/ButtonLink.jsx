import Link from "next/link"
import PropTypes from 'prop-types';

export const ButtonLink = ({ href, label}) => {
  return (
    <Link href={href}>
      <a>
        {label}
      </a>
    </Link>
  )
}

ButtonLink.PropTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string
}

ButtonLink.defaultProps = {
  href: "#",
  label: "Fale com a gente"
}