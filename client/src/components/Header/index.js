import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
	return (
		<Nav defaultActiveKey="/" className="flex-column">
			<Nav.Link as={Link} to="/">
				About
			</Nav.Link>
			<Nav.Link as={Link} to="/portfolio">
				Portfolio
			</Nav.Link>
			<Nav.Link as={Link} to="/blog">
				Blog
			</Nav.Link>
			<Nav.Link as={Link} to="/contact">
				Contact
			</Nav.Link>
		</Nav>
	);
};

export default Header;
