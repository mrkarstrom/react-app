import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        
        // backgroundColor: '#272932',
        // color: '#35495E'
    }

  return (
    <header style={{ headerStyles }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Using defaultProps when no props (text) is sent
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
    text: PropTypes.string,
}

export default Header;
