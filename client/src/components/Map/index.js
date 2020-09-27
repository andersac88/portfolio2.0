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

export default MapWithAMarker;
