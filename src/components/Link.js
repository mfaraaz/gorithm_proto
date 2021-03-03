import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './styles.css'

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return ;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <div onClick={onClick} className={className} href={href}>
            {children}
        </div>
    );
};

export default Link;