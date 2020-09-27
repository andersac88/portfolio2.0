import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';

const MapWithAMarker = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 42.0883603, lng: -87.9806265 }}
		>
			<Marker position={{ lat: 42.0883603, lng: -87.9806265 }} />
		</GoogleMap>
	))
);

const Contact = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Contact</h1>

			<MapWithAMarker
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7g0BRhwkQNuX4n71BSe4005WEed1znE0"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={
					<div
						style={{
							height: `400px`,
							width: '400px',
							marginRight: 'auto',
							marginLeft: 'auto',
						}}
					/>
				}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default Contact;
