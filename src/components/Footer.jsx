

function Footer() {
    const currentYear = new Date(). getFullYear();
    return(
        <footer>
            <p> &copy; Joel Chondo  {currentYear}</p>
        </footer>
    );
}

export default Footer;