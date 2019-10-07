const ships = [
  {
    name: 'Regina Seaways',
    mmsi: 277466000,
    imo: 9458535,
    position: {
      lng: 20.17587,
      lat: 55.61845,
      timeRecorded: '2019-09-26T20:37:20Z',
    },
    navigation: {
      heading: 256,
      course: 256,
      speed: 21,
      timeRecorded: '2019-09-26T20:37:20Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T18:39:30Z',
    },
  },
  {
    name: 'Delft Seaways',
    mmsi: 235009590,
    imo: 9293088,
    position: {
      lng: 1.338768,
      lat: 51.12555,
      timeRecorded: '2019-09-26T20:34:33Z',
    },
    navigation: {
      heading: 160,
      course: 250,
      speed: 0,
      timeRecorded: '2019-09-26T20:34:33Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:58:09Z',
    },
  },
  {
    name: 'Britannia Seaways',
    mmsi: 219825000,
    imo: 9153032,
    position: {
      lng: 1.311733,
      lat: 51.95275,
      timeRecorded: '2019-09-26T20:34:15Z',
    },
    navigation: {
      heading: 315,
      course: 341,
      speed: 0,
      timeRecorded: '2019-09-26T20:34:15Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:56:36Z',
    },
  },
  {
    name: 'Victoria Seaways',
    mmsi: 277408000,
    imo: 9350721,
    position: {
      lng: 10.61994,
      lat: 54.55799,
      timeRecorded: '2019-09-26T20:38:02Z',
    },
    navigation: {
      heading: 67,
      course: 67,
      speed: 20,
      timeRecorded: '2019-09-26T20:38:02Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T19:13:57Z',
    },
  },
  {
    name: 'Pearl Seaways',
    mmsi: 219945000,
    imo: 8701674,
    position: {
      lng: 11.92532,
      lat: 57.16167,
      timeRecorded: '2019-09-26T20:37:33Z',
    },
    navigation: {
      heading: 337,
      course: 337,
      speed: 15,
      timeRecorded: '2019-09-26T20:37:33Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T14:22:06Z',
    },
  },
  {
    name: 'King Seaways',
    mmsi: 220449000,
    imo: 8502406,
    position: {
      lng: 2.885988,
      lat: 53.31497,
      timeRecorded: '2019-09-26T20:37:01Z',
    },
    navigation: {
      heading: 307,
      course: 306,
      speed: 15,
      timeRecorded: '2019-09-26T20:37:01Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T15:00:02Z',
    },
  },
  {
    name: "Côte d'Albâtre",
    mmsi: 228233600,
    imo: 9320128,
    position: {
      lng: 0.055733,
      lat: 50.7881,
      timeRecorded: '2019-09-26T20:35:35Z',
    },
    navigation: {
      heading: 349,
      course: 336,
      speed: 0,
      timeRecorded: '2019-09-26T20:35:35Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:58:16Z',
    },
  },
  {
    name: 'Sailor',
    mmsi: 276817000,
    imo: 8401444,
    position: {
      lng: 23.20417,
      lat: 59.65767,
      timeRecorded: '2019-09-26T20:37:54Z',
    },
    navigation: {
      heading: 139,
      course: 138,
      speed: 13,
      timeRecorded: '2019-09-26T20:37:54Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T19:33:11Z',
    },
  },
  {
    name: 'Seven Sisters',
    mmsi: 228244700,
    imo: 9320130,
    position: {
      lng: 1.086667,
      lat: 49.9329,
      timeRecorded: '2019-09-26T20:36:27Z',
    },
    navigation: {
      heading: 239,
      course: 323,
      speed: 0,
      timeRecorded: '2019-09-26T20:36:27Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:57:56Z',
    },
  },
  {
    name: 'Côte des Dunes',
    mmsi: 227022800,
    imo: 9232527,
    position: {
      lng: 1.762747,
      lat: 50.96223,
      timeRecorded: '2019-09-26T20:38:02Z',
    },
    navigation: {
      heading: 90,
      course: 85,
      speed: 15,
      timeRecorded: '2019-09-26T20:38:02Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:58:16Z',
    },
  },
  {
    name: 'Ficaria Seaways',
    mmsi: 220464000,
    imo: 9320568,
    position: {
      lng: 9.953448,
      lat: 58.82554,
      timeRecorded: '2019-09-26T20:37:53Z',
    },
    navigation: {
      heading: 326,
      course: 323,
      speed: 23,
      timeRecorded: '2019-09-26T20:37:53Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T15:24:03Z',
    },
  },
  {
    name: 'Côte des Flandres',
    mmsi: 228085000,
    imo: 9305843,
    position: {
      lng: 1.33955,
      lat: 51.1256,
      timeRecorded: '2019-09-26T20:36:18Z',
    },
    navigation: {
      heading: 163,
      course: 163,
      speed: 0,
      timeRecorded: '2019-09-26T20:36:18Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:56:27Z',
    },
  },
  {
    name: 'Fionia Seaways',
    mmsi: 235068575,
    imo: 9395343,
    position: {
      lng: 3.177085,
      lat: 51.35463,
      timeRecorded: '2019-09-26T20:36:13Z',
    },
    navigation: {
      heading: 47,
      course: 236,
      speed: 0,
      timeRecorded: '2019-09-26T20:36:13Z',
    },
    navigationStatus: {
      status: 'Moored',
      timeRecorded: '2019-09-26T13:51:07Z',
    },
  },
  {
    name: 'Dunkerque Seaways',
    mmsi: 235028825,
    imo: 9293076,
    position: {
      lng: 2.017322,
      lat: 51.04618,
      timeRecorded: '2019-09-26T20:37:57Z',
    },
    navigation: {
      heading: 262,
      course: 262,
      speed: 19,
      timeRecorded: '2019-09-26T20:37:57Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:55:46Z',
    },
  },
  {
    name: 'Princess Seaways',
    mmsi: 220489000,
    imo: 8502391,
    position: {
      lng: 0.510325,
      lat: 54.27744,
      timeRecorded: '2019-09-26T20:37:39Z',
    },
    navigation: {
      heading: 128,
      course: 125,
      speed: 17,
      timeRecorded: '2019-09-26T20:37:39Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T15:38:53Z',
    },
  },
  {
    name: 'Patria Seaways',
    mmsi: 277291000,
    imo: 8917390,
    position: {
      lng: 16.64,
      lat: 55.15667,
      timeRecorded: '2019-09-26T20:19:00Z',
    },
    navigation: {
      heading: 256,
      course: 257,
      speed: 15,
      timeRecorded: '2019-09-26T20:19:00Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T10:08:10Z',
    },
  },
  {
    name: 'Liverpool Seaways',
    mmsi: 277449000,
    imo: 9136034,
    position: {
      lng: 19.64006,
      lat: 59.75254,
      timeRecorded: '2019-09-26T20:37:49Z',
    },
    navigation: {
      heading: 97,
      course: 97,
      speed: 18,
      timeRecorded: '2019-09-26T20:37:49Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T19:40:31Z',
    },
  },
  {
    name: 'Dover Seaways',
    mmsi: 235010500,
    imo: 9318345,
    position: {
      lng: 2.01826,
      lat: 51.04015,
      timeRecorded: '2019-09-26T20:38:05Z',
    },
    navigation: {
      heading: 77,
      course: 75,
      speed: 19,
      timeRecorded: '2019-09-26T20:38:05Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:58:30Z',
    },
  },
  {
    name: 'Athena Seaways',
    mmsi: 277504000,
    imo: 9350680,
    position: {
      lng: 20.04498,
      lat: 55.76185,
      timeRecorded: '2019-09-26T20:23:17Z',
    },
    navigation: {
      heading: 274,
      course: 271,
      speed: 17,
      timeRecorded: '2019-09-26T20:23:17Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T18:06:19Z',
    },
  },
  {
    name: 'Optima Seaways',
    mmsi: 277339000,
    imo: 9188427,
    position: {
      lng: 16.67285,
      lat: 55.87794,
      timeRecorded: '2019-09-26T20:34:19Z',
    },
    navigation: {
      heading: 93,
      course: 93,
      speed: 17,
      timeRecorded: '2019-09-26T20:34:19Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T16:31:03Z',
    },
  },
  {
    name: 'Calais Seaways',
    mmsi: 228006800,
    imo: 8908466,
    position: {
      lng: 1.850167,
      lat: 50.96753,
      timeRecorded: '2019-09-26T20:34:43Z',
    },
    navigation: {
      heading: 119,
      course: 169,
      speed: 0,
      timeRecorded: '2019-09-26T20:34:43Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-23T10:58:14Z',
    },
  },
  {
    name: 'Crown Seaways',
    mmsi: 219592000,
    imo: 8917613,
    position: {
      lng: 10.74877,
      lat: 58.21339,
      timeRecorded: '2019-09-26T20:37:38Z',
    },
    navigation: {
      heading: 173,
      course: 175,
      speed: 17,
      timeRecorded: '2019-09-26T20:37:38Z',
    },
    navigationStatus: {
      status: 'UnderWayUsingEngine',
      timeRecorded: '2019-09-26T15:35:51Z',
    },
  },
];

//export default (req, res) => res.json([]); // debug

export default (req, res) => res.json(ships);
