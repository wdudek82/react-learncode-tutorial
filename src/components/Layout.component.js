import React from 'react';

import Main from './Main.component';
import Navbar from './Navbar.component';


class Layout extends React.Component {
   render(){
      const { location } = this.props;

      console.log(this.props);
      return (
         <div>
            <Navbar location={location} />
            <Main />
         </div>
      );
   }
}

export default Layout;