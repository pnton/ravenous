import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

// Simulates what a returned list of businesses would look like in Ravenous
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;