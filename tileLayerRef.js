let tileLayer = null;

const tileLayerRef = {
  get: () => tileLayer,
  set(newtile) {
    tileLayer = newtile;
  },
};
export default tileLayerRef;
