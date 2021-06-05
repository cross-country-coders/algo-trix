import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer>
        <div className="red">
          <div style={divStyle} className="ui center aligned container">
            <hr />
            The following site is made by <a href="#">Cross Country Coders</a> for ICS 427. The following material
            are taken from prior semesters; you may encounter new and different material if you are taking these courses now or in the future.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
