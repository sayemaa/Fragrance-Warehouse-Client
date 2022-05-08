import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link
                style={{ color: match ? '#FC6D38' : 'black', borderBottom: match ? "3px solid #FC6D38" : "none", fontWeight: match ? "500" : "normal" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;