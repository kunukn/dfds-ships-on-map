let map = null;

const mapRef = {
  init: () => {
    mapRef.set(
      L.map('mapid', {
        zoomControl: false,
      })
    );
  },
  get: () => map,
  set: newmap => {
    map = newmap;
  },
};
export default mapRef;
