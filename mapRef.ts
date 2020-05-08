let map = null;

const mapRef = {
  init() {
    mapRef.set(
      L.map('mapid', {
        zoomControl: false,
        attributionControl: false,
      })
    );
  },
  get: () => map,
  set(newmap) {
    map = newmap;
  },
};
export default mapRef;
