let map = null;

const mapRef = {
  init: () => {
    mapRef.set(L.map('mapid'));
  },
  get: () => map,
  set: newmap => {
    map = newmap;
  },
};
export default mapRef;
