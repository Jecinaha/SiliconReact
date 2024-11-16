import React from "react";
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className="page-title">
            <div className="container">
                
                <ul className="Breadcrumb">

                    <li>
                        <i className="fa-light fa-house"></i>
                        <Link className="nav-link" to="/">Home</Link>
                        <i className=" fa-light fa-chevrons-right"></i>
                    </li>
                    {
                        pathnames.map((value, index) => {
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                            return (
                                <li key={to}>
                                    { index === pathnames.length - 1
                                       ? (<span>{value.replace(/-/g, ' ')}</span>)
                                       : (<link to={to}>{value.replace(/-/g, ' ')}</link>)}
                                </li>
                            );
                        })
                    }
                </ul>
         
            </div>
        </section>
    );
};

export default BreadCrumb