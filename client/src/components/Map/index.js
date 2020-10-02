import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
//<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 42.0883603,
			lng: -87.9806265,
		},
		zoom: 11,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '50vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyB7g0BRhwkQNuX4n71BSe4005WEed1znE0' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				></GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
