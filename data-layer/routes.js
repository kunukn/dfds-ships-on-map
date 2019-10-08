// https://www.dfds.com/da-dk/shipping/ruter-og-afgange

import terminals from './terminals';
import arrayToObject from '~/utils/arrayToObject';

const lookup = arrayToObject(terminals, 'id');

let data = [
  {
    id: 1,
    name: 'Copenhagen - Oslo',
    latlngs: [
      [lookup['copenhagen'].position.lat, lookup['copenhagen'].position.lng],
      [lookup['oslo'].position.lat, lookup['oslo'].position.lng],
    ],
  },
  {
    id: 2,
    name: 'Newcastle - Amsterdam',
    latlngs: [
      [lookup['newcastle'].position.lat, lookup['newcastle'].position.lng],
      [lookup['amsterdam'].position.lat, lookup['amsterdam'].position.lng],
    ],
  },
  {
    id: 3,
    name: 'Dover - Dunkirk',
    latlngs: [
      [lookup['dover'].position.lat, lookup['dover'].position.lng],
      [lookup['dunkirk'].position.lat, lookup['dunkirk'].position.lng],
    ],
  },
  {
    id: 4,
    name: 'Dover - Calais',
    latlngs: [
      [lookup['dover'].position.lat, lookup['dover'].position.lng],
      [lookup['calais'].position.lat, lookup['calais'].position.lng],
    ],
  },
  {
    id: 5,
    name: 'Newhaven - Dieppe',
    latlngs: [
      [lookup['newhaven'].position.lat, lookup['newhaven'].position.lng],
      [lookup['dieppe'].position.lat, lookup['dieppe'].position.lng],
    ],
  },
  {
    id: 6,
    name: 'Kiel - Klaipeda',
    latlngs: [
      [lookup['kiel'].position.lat, lookup['kiel'].position.lng],
      [lookup['klaipeda'].position.lat, lookup['klaipeda'].position.lng],
    ],
  },
  {
    id: 7,
    name: 'Karlshamn - Klaipeda',
    latlngs: [
      [lookup['karlshamn'].position.lat, lookup['karlshamn'].position.lng],
      [lookup['klaipeda'].position.lat, lookup['klaipeda'].position.lng],
    ],
  },
  {
    id: 8,
    name: 'Kapellskär - Paldiski',
    latlngs: [
      [lookup['kapellskar'].position.lat, lookup['kapellskar'].position.lng],
      [lookup['paldiski'].position.lat, lookup['paldiski'].position.lng],
    ],
  },
  {
    id: 9,
    name: 'Hanko - Paldiski',
    latlngs: [
      [lookup['hanko'].position.lat, lookup['hanko'].position.lng],
      [lookup['paldiski'].position.lat, lookup['paldiski'].position.lng],
    ],
  },
  {
    id: 10,
    name: 'Göteborg - Immingham',
    latlngs: [
      [lookup['goteborg'].position.lat, lookup['goteborg'].position.lng],
      [lookup['immingham'].position.lat, lookup['immingham'].position.lng],
    ],
  },
  {
    id: 10,
    name: 'Esbjerg - Immingham',
    latlngs: [
      [lookup['esbjerg'].position.lat, lookup['esbjerg'].position.lng],
      [lookup['immingham'].position.lat, lookup['immingham'].position.lng],
    ],
  },
  {
    id: 11,
    name: 'Rotterdam - Immingham',
    latlngs: [
      [lookup['rotterdam'].position.lat, lookup['rotterdam'].position.lng],
      [lookup['immingham'].position.lat, lookup['immingham'].position.lng],
    ],
  },
  {
    id: 12,
    name: 'Cuxhaven - Immingham',
    latlngs: [
      [lookup['cuxhaven'].position.lat, lookup['cuxhaven'].position.lng],
      [lookup['immingham'].position.lat, lookup['immingham'].position.lng],
    ],
  },
  {
    id: 13,
    name: 'Brevik - Immingham',
    latlngs: [
      [lookup['brevik'].position.lat, lookup['brevik'].position.lng],
      [lookup['immingham'].position.lat, lookup['immingham'].position.lng],
    ],
  },
];

export default data;
