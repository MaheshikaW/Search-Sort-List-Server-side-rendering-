import React, { component } from 'react';

export class Pageheader extends React.Component {

    render() {
        const stylea = {
            padding: 8,
            cursor: 'pointer'
        }
        const styleHead = {
            color: 'blue',
            padding: 10,
            fontWeight: 'bold'
        }
        return (

            <div className="row">
          
                <div className="col-md-4" style={styleHead} >&nbsp;&nbsp;<a onClick={this.props.sortBySchool} style={stylea}>School Name</a></div>
                <div className="col-md-1" style={styleHead}><a onClick={this.props.sortByYear} style={stylea}>School Year</a></div>
                <div className="col-md-3" style={styleHead}><a onClick={this.props.sortByDistrict} style={stylea}>District</a></div>
                <div className="col-md-2" style={styleHead}><a onClick={this.props.sortByDemographic} style={stylea}>Demographic</a></div>
                <div className="col-md-1" style={styleHead}><a onClick={this.props.sortByClassSize} style={stylea}>class Size</a></div>
            </div>

        );
    }

}
export default Pageheader;