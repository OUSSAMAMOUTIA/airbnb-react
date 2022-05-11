import "./Footer.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
  return (
    <div className="footer">
        <p>© 2022 Airbnb clone! No rights reserved - this is a demo!</p>
            <p> Follow me on : <a href="https://www.linkedin.com/in/oussama-moutia/" target="_blank"> <LinkedInIcon /></a>  <a href="https://github.com/OUSSAMAMOUTIA" target="_blank"><GitHubIcon/> </a></p>
            <p>Made with <FavoriteIcon className="hart"/> by OUSSAMA MOUTIA</p>
    </div>
  )
}
export default Footer