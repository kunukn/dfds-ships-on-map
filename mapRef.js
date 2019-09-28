let map = null;

const mapRef = {
  get: () => map,
  set: newmap => {
    map = newmap;
  },
};
export default mapRef;
