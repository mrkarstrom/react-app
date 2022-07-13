import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
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

export default Header;
