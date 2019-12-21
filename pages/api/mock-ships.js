const ships = [
  {
    "name": "Hollandia Seaways",
    "mmsi": 219234000,
    "imo": 9832585,
    "position": {
      "lng": 7.163167,
      "lat": 56.06959,
      "timeRecorded": "2019-12-21T17:24:22Z"
    },
    "navigation": {
      "heading": 212,
      "course": 212,
      "speed": 20,
      "timeRecorded": "2019-12-21T17:24:22Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T06:42:24Z"
    }
  },
  {
    "name": "Fionia Seaways",
    "mmsi": 235068575,
    "imo": 9395343,
    "position": {
      "lng": 2.198483,
      "lat": 52.77361,
      "timeRecorded": "2019-12-21T20:53:53Z"
    },
    "navigation": {
      "heading": 307,
      "course": 311,
      "speed": 12,
      "timeRecorded": "2019-12-21T20:53:53Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T13:44:40Z"
    }
  },
  {
    "name": "Victoria Seaways",
    "mmsi": 277408000,
    "imo": 9350721,
    "position": {
      "lng": 20.34305,
      "lat": 55.7562,
      "timeRecorded": "2019-12-21T20:05:54Z"
    },
    "navigation": {
      "heading": 273,
      "course": 272,
      "speed": 16,
      "timeRecorded": "2019-12-21T20:05:54Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T18:02:03Z"
    }
  },
  {
    "name": "Troy Seaways",
    "mmsi": 271046601,
    "imo": 9816842,
    "position": {
      "lng": 29.26972,
      "lat": 40.85595,
      "timeRecorded": "2019-12-21T20:53:24Z"
    },
    "navigation": {
      "heading": 173,
      "course": 82,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:53:24Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-21T12:20:24Z"
    }
  },
  {
    "name": "Ark Germania",
    "mmsi": 219551000,
    "imo": 9609952,
    "position": {
      "lng": 7.884223,
      "lat": 55.40297,
      "timeRecorded": "2019-12-21T18:46:44Z"
    },
    "navigation": {
      "heading": 262,
      "course": 264,
      "speed": 16,
      "timeRecorded": "2019-12-21T18:46:44Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T16:54:30Z"
    }
  },
  {
    "name": "Begonia Seaways",
    "mmsi": 219437000,
    "imo": 9262089,
    "position": {
      "lng": -0.105385,
      "lat": 53.62078,
      "timeRecorded": "2019-12-21T20:53:27Z"
    },
    "navigation": {
      "heading": 297,
      "course": 296,
      "speed": 11,
      "timeRecorded": "2019-12-21T20:53:27Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-20T19:24:12Z"
    }
  },
  {
    "name": "Regina Seaways",
    "mmsi": 277466000,
    "imo": 9458535,
    "position": {
      "lng": 20.36619,
      "lat": 55.64641,
      "timeRecorded": "2019-12-21T20:53:36Z"
    },
    "navigation": {
      "heading": 256,
      "course": 257,
      "speed": 21,
      "timeRecorded": "2019-12-21T20:53:36Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T19:06:45Z"
    }
  },
  {
    "name": "Calais Seaways",
    "mmsi": 228006800,
    "imo": 8908466,
    "position": {
      "lng": 1.806077,
      "lat": 50.97087,
      "timeRecorded": "2019-12-21T20:53:13Z"
    },
    "navigation": {
      "heading": 261,
      "course": 261,
      "speed": 17,
      "timeRecorded": "2019-12-21T20:53:13Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-11T06:04:46Z"
    }
  },
  {
    "name": "Côte des Flandres",
    "mmsi": 228085000,
    "imo": 9305843,
    "position": {
      "lng": 1.336757,
      "lat": 51.12461,
      "timeRecorded": "2019-12-21T20:49:17Z"
    },
    "navigation": {
      "heading": 160,
      "course": 159,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:49:17Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-08T05:19:21Z"
    }
  },
  {
    "name": "Suecia Seaways",
    "mmsi": 220284000,
    "imo": 9153020,
    "position": null,
    "navigation": null,
    "navigationStatus": null
  },
  {
    "name": "Ark Dania",
    "mmsi": 219596000,
    "imo": 9609964,
    "position": {
      "lng": 0.493798,
      "lat": 53.68554,
      "timeRecorded": "2019-12-21T20:53:46Z"
    },
    "navigation": {
      "heading": 65,
      "course": 62,
      "speed": 18,
      "timeRecorded": "2019-12-21T20:53:46Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T18:54:35Z"
    }
  },
  {
    "name": "Finlandia Seaways",
    "mmsi": 277400000,
    "imo": 9198721,
    "position": {
      "lng": 4.013175,
      "lat": 51.43502,
      "timeRecorded": "2019-12-21T20:53:07Z"
    },
    "navigation": {
      "heading": 297,
      "course": 297,
      "speed": 13,
      "timeRecorded": "2019-12-21T20:53:07Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T17:50:03Z"
    }
  },
  {
    "name": "Princess Seaways",
    "mmsi": 220489000,
    "imo": 8502391,
    "position": {
      "lng": 0.293877,
      "lat": 54.3653,
      "timeRecorded": "2019-12-21T20:53:30Z"
    },
    "navigation": {
      "heading": 125,
      "course": 124,
      "speed": 18,
      "timeRecorded": "2019-12-21T20:53:30Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-20T16:43:47Z"
    }
  },
  {
    "name": "Patria Seaways",
    "mmsi": 277291000,
    "imo": 8917390,
    "position": {
      "lng": 21.15962,
      "lat": 55.64997,
      "timeRecorded": "2019-12-21T20:53:07Z"
    },
    "navigation": {
      "heading": 286,
      "course": 0,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:53:07Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-20T11:41:31Z"
    }
  },
  {
    "name": "Athena Seaways",
    "mmsi": 277504000,
    "imo": 9350680,
    "position": {
      "lng": 10.4901,
      "lat": 54.52728,
      "timeRecorded": "2019-12-21T20:53:07Z"
    },
    "navigation": {
      "heading": 72,
      "course": 69,
      "speed": 19,
      "timeRecorded": "2019-12-21T20:53:07Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T19:37:41Z"
    }
  },
  {
    "name": "Côte d'Albâtre",
    "mmsi": 228233600,
    "imo": 9320128,
    "position": {
      "lng": 0.055783,
      "lat": 50.7877,
      "timeRecorded": "2019-12-21T20:53:44Z"
    },
    "navigation": {
      "heading": 350,
      "course": 350,
      "speed": 1,
      "timeRecorded": "2019-12-21T20:53:44Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-05T10:43:14Z"
    }
  },
  {
    "name": "Gardenia Seaways",
    "mmsi": 277546000,
    "imo": 9809095,
    "position": {
      "lng": 0.7689,
      "lat": 53.40413,
      "timeRecorded": "2019-12-21T20:53:03Z"
    },
    "navigation": {
      "heading": 118,
      "course": 115,
      "speed": 13,
      "timeRecorded": "2019-12-21T20:53:03Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T20:07:27Z"
    }
  },
  {
    "name": "Seven Sisters",
    "mmsi": 228244700,
    "imo": 9320130,
    "position": null,
    "navigation": null,
    "navigationStatus": null
  },
  {
    "name": "Britannia Seaways",
    "mmsi": 219825000,
    "imo": 9153032,
    "position": {
      "lng": 4.362216,
      "lat": 51.9044,
      "timeRecorded": "2019-12-21T20:51:58Z"
    },
    "navigation": {
      "heading": 172,
      "course": 172,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:51:58Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-21T14:30:59Z"
    }
  },
  {
    "name": "Magnolia Seaways",
    "mmsi": 219455000,
    "imo": 9259496,
    "position": {
      "lng": 8.1864,
      "lat": 57.32063,
      "timeRecorded": "2019-12-21T20:53:09Z"
    },
    "navigation": {
      "heading": 31,
      "course": 30,
      "speed": 20,
      "timeRecorded": "2019-12-21T20:53:09Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T01:17:44Z"
    }
  },
  {
    "name": "Tulipa Seaways",
    "mmsi": 277548000,
    "imo": 9809100,
    "position": {
      "lng": 1.312317,
      "lat": 51.9528,
      "timeRecorded": "2019-12-21T20:52:07Z"
    },
    "navigation": {
      "heading": 307,
      "course": 223,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:52:07Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-21T07:55:07Z"
    }
  },
  {
    "name": "Petunia Seaways",
    "mmsi": 220223000,
    "imo": 9259501,
    "position": {
      "lng": -0.200217,
      "lat": 53.63002,
      "timeRecorded": "2019-12-21T20:51:14Z"
    },
    "navigation": {
      "heading": 124,
      "course": 294,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:51:14Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-21T17:00:14Z"
    }
  },
  {
    "name": "Freesia Seaways",
    "mmsi": 219435000,
    "imo": 9274848,
    "position": {
      "lng": 9.92296,
      "lat": 57.69333,
      "timeRecorded": "2019-12-21T20:53:43Z"
    },
    "navigation": {
      "heading": 240,
      "course": 242,
      "speed": 16,
      "timeRecorded": "2019-12-21T20:53:43Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T16:43:49Z"
    }
  },
  {
    "name": "King Seaways",
    "mmsi": 220449000,
    "imo": 8502406,
    "position": {
      "lng": 4.149345,
      "lat": 52.65801,
      "timeRecorded": "2019-12-21T17:53:00Z"
    },
    "navigation": {
      "heading": 308,
      "course": 302,
      "speed": 15,
      "timeRecorded": "2019-12-21T17:53:00Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T15:35:52Z"
    }
  },
  {
    "name": null,
    "mmsi": 228085000,
    "imo": 9305805,
    "position": {
      "lng": 1.853408,
      "lat": 50.96755,
      "timeRecorded": "2019-12-16T19:13:33Z"
    },
    "navigation": {
      "heading": 142,
      "course": 292,
      "speed": 1,
      "timeRecorded": "2019-12-16T19:13:33Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-14T05:31:32Z"
    }
  },
  {
    "name": "Dunkerque Seaways",
    "mmsi": 235028825,
    "imo": 9293076,
    "position": {
      "lng": 1.34793,
      "lat": 51.12052,
      "timeRecorded": "2019-12-21T20:54:02Z"
    },
    "navigation": {
      "heading": 278,
      "course": 278,
      "speed": 10,
      "timeRecorded": "2019-12-21T20:54:02Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-05T10:45:08Z"
    }
  },
  {
    "name": "Ark Futura",
    "mmsi": 219927000,
    "imo": 9129598,
    "position": {
      "lng": 15.02911,
      "lat": 54.9458,
      "timeRecorded": "2019-12-21T20:53:47Z"
    },
    "navigation": {
      "heading": 84,
      "course": 83,
      "speed": 19,
      "timeRecorded": "2019-12-21T20:53:47Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-20T23:30:37Z"
    }
  },
  {
    "name": "Primula Seaways",
    "mmsi": 220253000,
    "imo": 9259513,
    "position": {
      "lng": 3.756982,
      "lat": 51.11557,
      "timeRecorded": "2019-12-21T20:52:46Z"
    },
    "navigation": {
      "heading": 335,
      "course": 1,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:52:46Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-21T12:43:46Z"
    }
  },
  {
    "name": "Sailor",
    "mmsi": 276817000,
    "imo": 8401444,
    "position": {
      "lng": 24.0495,
      "lat": 59.34917,
      "timeRecorded": "2019-12-21T20:53:36Z"
    },
    "navigation": {
      "heading": 152,
      "course": 203,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:53:36Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-20T23:47:38Z"
    }
  },
  {
    "name": "Crown Seaways",
    "mmsi": 219592000,
    "imo": 8917613,
    "position": {
      "lng": 10.82623,
      "lat": 58.5883,
      "timeRecorded": "2019-12-21T20:53:32Z"
    },
    "navigation": {
      "heading": 163,
      "course": 161,
      "speed": 15,
      "timeRecorded": "2019-12-21T20:53:32Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-19T15:41:14Z"
    }
  },
  {
    "name": "Optima Seaways",
    "mmsi": 277339000,
    "imo": 9188427,
    "position": {
      "lng": 16.33866,
      "lat": 55.87124,
      "timeRecorded": "2019-12-21T20:54:18Z"
    },
    "navigation": {
      "heading": 90,
      "course": 90,
      "speed": 17,
      "timeRecorded": "2019-12-21T20:54:18Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T17:30:21Z"
    }
  },
  {
    "name": "Liverpool Seaways",
    "mmsi": 277449000,
    "imo": 9136034,
    "position": {
      "lng": 19.28989,
      "lat": 59.75188,
      "timeRecorded": "2019-12-21T20:53:59Z"
    },
    "navigation": {
      "heading": 73,
      "course": 70,
      "speed": 14,
      "timeRecorded": "2019-12-21T20:53:59Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T07:54:13Z"
    }
  },
  {
    "name": "Pearl Seaways",
    "mmsi": 219945000,
    "imo": 8701674,
    "position": {
      "lng": 11.75565,
      "lat": 56.9884,
      "timeRecorded": "2019-12-21T20:53:52Z"
    },
    "navigation": {
      "heading": 343,
      "course": 342,
      "speed": 15,
      "timeRecorded": "2019-12-21T20:53:52Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T15:17:36Z"
    }
  },
  {
    "name": "Dover Seaways",
    "mmsi": 235010500,
    "imo": 9318345,
    "position": {
      "lng": 2.189133,
      "lat": 51.02003,
      "timeRecorded": "2019-12-21T20:52:03Z"
    },
    "navigation": {
      "heading": 69,
      "course": 276,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:52:03Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-05T10:44:36Z"
    }
  },
  {
    "name": "Belgia Seaways",
    "mmsi": 277561000,
    "imo": 9188233,
    "position": {
      "lng": 3.900333,
      "lat": 52.88467,
      "timeRecorded": "2019-12-21T20:51:30Z"
    },
    "navigation": {
      "heading": 215,
      "course": 220,
      "speed": 14,
      "timeRecorded": "2019-12-21T20:51:30Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-20T15:06:22Z"
    }
  },
  {
    "name": "Delft Seaways",
    "mmsi": 235009590,
    "imo": 9293088,
    "position": {
      "lng": 1.67726,
      "lat": 51.04108,
      "timeRecorded": "2019-12-21T20:53:54Z"
    },
    "navigation": {
      "heading": 124,
      "course": 115,
      "speed": 18,
      "timeRecorded": "2019-12-21T20:53:54Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-05T10:42:56Z"
    }
  },
  {
    "name": "Ephesus Seaways",
    "mmsi": 271046489,
    "imo": 9816830,
    "position": {
      "lng": 13.57543,
      "lat": 45.6321,
      "timeRecorded": "2019-12-21T20:53:36Z"
    },
    "navigation": {
      "heading": 247,
      "course": 248,
      "speed": 18,
      "timeRecorded": "2019-12-21T20:53:36Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T20:18:21Z"
    }
  },
  {
    "name": "Selandia Seaways",
    "mmsi": 219458000,
    "imo": 9157284,
    "position": {
      "lng": 4.36235,
      "lat": 51.90775,
      "timeRecorded": "2019-12-21T20:50:46Z"
    },
    "navigation": {
      "heading": 155,
      "course": 65,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:50:46Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-20T19:12:19Z"
    }
  },
  {
    "name": "Côte des Dunes",
    "mmsi": 227022800,
    "imo": 9232527,
    "position": {
      "lng": 1.708875,
      "lat": 50.97207,
      "timeRecorded": "2019-12-21T20:53:20Z"
    },
    "navigation": {
      "heading": 119,
      "course": 108,
      "speed": 17,
      "timeRecorded": "2019-12-21T20:53:20Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-13T01:13:09Z"
    }
  },
  {
    "name": "Botnia Seaways",
    "mmsi": 277399000,
    "imo": 9192129,
    "position": {
      "lng": 10.27007,
      "lat": 36.8062,
      "timeRecorded": "2019-12-21T20:52:07Z"
    },
    "navigation": {
      "heading": 79,
      "course": 322,
      "speed": 0,
      "timeRecorded": "2019-12-21T20:52:07Z"
    },
    "navigationStatus": {
      "status": "Moored",
      "timeRecorded": "2019-12-21T05:46:45Z"
    }
  },
  {
    "name": "Ficaria Seaways",
    "mmsi": 220464000,
    "imo": 9320568,
    "position": {
      "lng": 2.108047,
      "lat": 54.27011,
      "timeRecorded": "2019-12-21T17:24:24Z"
    },
    "navigation": {
      "heading": 58,
      "course": 54,
      "speed": 19,
      "timeRecorded": "2019-12-21T17:24:24Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-21T11:25:30Z"
    }
  },
  {
    "name": "Gothia Seaways",
    "mmsi": 277560000,
    "imo": 9188245,
    "position": {
      "lng": 7.996538,
      "lat": 56.70986,
      "timeRecorded": "2019-12-21T20:53:48Z"
    },
    "navigation": {
      "heading": 34,
      "course": 32,
      "speed": 16,
      "timeRecorded": "2019-12-21T20:53:48Z"
    },
    "navigationStatus": {
      "status": "UnderWayUsingEngine",
      "timeRecorded": "2019-12-20T22:48:54Z"
    }
  }
]

//export default (req, res) => res.json([]); // debug

export default (req, res) => res.json(ships);
