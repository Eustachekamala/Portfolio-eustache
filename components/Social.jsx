import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const socials = [
  {icon : <FaGithub/>, path: "https://github.com/Eustachekamala"},
  {icon : <FaLinkedinIn/>, path: "https://www.linkedin.com/in/eustache-kamala-katembo"},
  {icon : <FaFacebook/>, path: "https://facebook.com/Eustachekamala"},
  {icon : <FaTwitter/>, path: "https://x.com/Eustachejared"},
  {icon : <FaInstagram/>, path: "https://www.instagram.com/eustachekams"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
