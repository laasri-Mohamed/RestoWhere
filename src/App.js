import './App.css'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import Sidebar from './components/Sidebar';
import LeafletGeoCoder from './LeafletGeoCoder';
import LeafletRoutingMachine from './LeafletRoutingMachine';
import Fetch from './Fetch';
import {MediaCard} from './Fetch';
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet";
function App() {
  
  const position = [	33.233334, -8.500000]
  return (
    <div className="App">
      <div className="AppGlass" style={{ display: 'flex', flexDirection: 'row'}}>
        <Sidebar/>
        <div style={{  flexDirection: 'column' , overflow: 'scroll', maxHeight:"1200px"}}>
        <MediaCard/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletGeoCoder/>
          <LeafletRoutingMachine/>
        </MapContainer>
        </div>
      </div>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl : "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
