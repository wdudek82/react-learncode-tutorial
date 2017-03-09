import React from 'react';
import { IndexLink, Link } from 'react-router';


class Navbar extends React.Component {
   constructor(){
      super();
      this.state = {
         collapsed: false
      }
   }

   render(){
      const { location } = this.props;
      // const { collapsed } = this.state;
      const featuredClass = location.pathname === '/' ? 'active' : '';
      const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
      const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
      // const navClass = collapsed ? 'collapse' : '';

      return (
         <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
               <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">LearnCode - ReactJS</a>
               </div>

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                     <li class={featuredClass}>
                        <IndexLink to="/" >Featured</IndexLink>
                     </li>
                     <li class={archivesClass}>
                        <Link to="archives">Archives</Link>
                     </li>
                     <li class={settingsClass}>
                        <Link to="settings">Settings</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}

export default Navbar;