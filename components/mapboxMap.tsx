'use client'

import { useEffect, useRef } from 'react';
import { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { FeatureCollection, LineString } from 'geojson';

const MapboxMap = () => {
  const [routeStart, setRouteStart] = useState<[number, number]>([0, 0]);
  const [routeEnd, setRouteEnd] = useState<[number, number]>([0, 0]);
  
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const routeResponse: FeatureCollection<LineString> = {
    type: "FeatureCollection",
    features: [{
      type: "Feature",
      properties: {}, // Add any properties relevant to the route here
      geometry: {
        type: "LineString",
        "coordinates":[[-0.127963,51.507479],[-0.127722,51.507566],[-0.127289,51.507712],[-0.142341,51.538616],[-0.152867,51.543916],[-0.174865,51.541701],[-0.175038,51.542892],[-0.196823,51.55914],[-0.215055,51.575242],[-0.216924,51.576],[-0.222083,51.573784],[-0.226623,51.572648],[-0.550681,52.008643],[-1.140918,52.324766],[-1.292461,52.695963],[-1.278478,53.380855],[-1.156659,53.475679],[-1.152086,53.478015],[-1.262446,53.680712],[-1.430337,54.14286],[-1.652068,54.379968],[-1.6308,54.494796],[-1.596798,54.553522],[-1.595192,54.556408],[-1.602421,54.566322],[-1.613096,54.576526],[-1.711715,54.625833],[-1.719796,54.631536],[-1.745769,54.648183],[-1.795506,54.713567],[-1.813949,54.742173],[-1.956204,54.948504],[-1.964412,54.96685],[-2.015236,54.983423],[-2.023195,54.981907],[-2.021188,55.01283],[-2.220814,55.251246],[-2.497887,55.362106],[-2.598761,55.531002],[-2.671278,55.595584],[-2.787531,55.770711],[-3.064336,55.913527],[-3.066072,55.913817],[-3.060632,55.924237],[-3.102431,55.94001],[-3.122957,55.957059],[-3.123637,55.95749],[-3.169479,55.957354],[-3.188516,55.953455],[-3.188535,55.953377],[-3.189063,55.953276],[-3.161221,55.89066],[-3.162839,55.888346],[-3.163255,55.888352],[-3.162676,55.889169],[-3.195838,55.893635],[-3.201705,55.89484],[-3.230512,55.849699],[-3.350622,55.756869],[-3.685276,55.51897],[-3.693355,55.504782],[-3.3502,55.104785],[-2.889926,54.905932],[-2.595872,54.444393],[-2.782925,54.022758],[-2.649888,53.737839],[-2.695577,53.519563],[-2.40307,53.303174],[-2.082255,52.674156],[-1.81645,52.641321],[-1.721604,52.50312],[-1.808145,52.355912],[-1.453365,52.189161],[-1.200623,51.873561],[-1.198088,51.869608],[-1.282373,51.798131],[-1.284792,51.794829],[-1.280627,51.788368],[-1.263012,51.75493],[-1.263545,51.753628],[-1.267708,51.752865],[-1.267372,51.752688],[-1.256498,51.74708],[-1.257607,51.751978],[-1.257723,51.751997],[-1.257723,51.751997],[-1.25981,51.751572],[-1.257723,51.751997],[-1.257607,51.751978],[-1.256564,51.748528],[-1.25981,51.748313],[-1.260033,51.748059],[-1.267372,51.752688],[-1.267708,51.752865],[-1.267445,51.753084],[-1.263012,51.75493],[-1.259444,51.755214],[-1.259991,51.757362],[-1.280593,51.787856],[-1.368032,51.788085],[-1.524158,51.779046],[-1.582728,51.788849],[-1.637192,51.802834],[-1.835819,51.837902],[-1.958459,51.86408],[-2.047136,51.852565],[-2.047428,51.851924],[-2.09534,51.843686],[-2.184195,51.861062],[-2.196154,51.86526],[-2.212404,51.864214],[-2.220173,51.857678],[-2.238073,51.864209],[-2.237769,51.863517],[-2.238278,51.864166],[-2.238267,51.864207],[-2.221178,51.858286],[-2.213532,51.86406],[-2.197138,51.86622],[-2.200544,51.878309],[-2.201112,51.878806],[-2.20066,51.879315],[-2.15888,51.888004],[-2.153367,51.889944],[-2.200986,52.129872],[-2.078227,52.345834],[-1.823356,52.347463],[-1.810047,52.350997],[-1.729643,52.529124],[-1.730251,52.533329],[-1.30988,52.813268],[-1.278478,53.380855],[-1.156659,53.475679],[-1.152086,53.478015],[-1.262446,53.680712],[-1.430337,54.14286],[-1.652068,54.379968],[-1.6308,54.494796],[-1.530629,54.790138],[-1.52971,54.793324],[-1.564174,54.778896],[-1.572255,54.777147],[-1.579201,54.778029],[-1.582562,54.777991],[-1.584925,54.775274],[-1.584161,54.77501],[-1.594507,54.771945],[-1.597721,54.789072],[-1.597686,54.79219],[-1.589687,54.805973],[-1.593459,54.823838],[-1.590956,54.834451],[-1.574624,54.845502],[-1.565202,54.851672],[-1.568615,54.86182],[-1.565811,54.865498],[-1.559596,54.899244],[-1.698194,54.965991],[-1.695566,55.397876],[-1.693366,55.400026],[-1.694039,55.408521],[-1.703554,55.412552],[-1.706902,55.411635],[-1.707098,55.412478],[-1.706263,55.412624],[-1.706044,55.412045],[-1.707098,55.412478],[-1.706902,55.411635],[-1.706084,55.411622],[-1.703554,55.412552],[-1.69414,55.408638],[-1.692929,55.400157],[-1.691977,55.3995],[-1.697943,54.965784],[-1.559882,54.902383],[-1.498376,54.69641],[-1.662291,54.399201],[-1.414957,54.126727],[-1.338989,53.814393],[-1.152674,53.483955],[-1.1481,53.480453],[-1.263905,53.401816],[-1.303031,52.823631],[-1.54683,52.693472],[-1.726373,52.519715],[-1.721604,52.50312],[-1.808145,52.355912],[-1.820319,52.347253],[-2.058712,52.355303],[-2.070698,52.351963],[-2.200547,52.131068],[-2.166085,51.862367],[-2.095908,51.843822],[-2.076211,51.819617],[-1.950186,51.725795],[-1.947442,51.72412],[-1.948243,51.723205],[-1.959075,51.717549],[-1.953274,51.708725],[-1.959554,51.707891],[-1.973103,51.713077],[-1.982761,51.709999],[-2.00048,51.701132],[-2.088758,51.594552],[-2.088927,51.591148],[-2.093137,51.579298],[-2.131184,51.535826],[-2.121161,51.515952],[-2.128251,51.478449],[-2.132243,51.477366],[-2.141493,51.471004],[-2.14295,51.46879],[-2.151338,51.450419],[-2.149751,51.447869],[-2.137144,51.438033],[-2.132546,51.434735],[-2.126617,51.420027],[-2.126085,51.420006],[-2.123147,51.414759],[-2.120174,51.414387],[-2.119451,51.41467]],
      }
    }]
  };
  const calculateCenter = (coordinates: number[][]) => {
    const length = coordinates.length;
    const total = coordinates.reduce((acc, [lng, lat]) => {
      acc.lng += lng;
      acc.lat += lat;
      return acc;
    }, { lng: 0, lat: 0 });

    return [total.lng / length, total.lat / length] as [number, number];
  };

  useEffect(() => {
    console.log('env: ', process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuZGVyd2F5IiwiYSI6ImNsdnJka29tNDBwNmkycnJyZ2l2OG1lNm4ifQ.9vwmKwk8iDwP0L85zOW-cw';
    const centerCoordinates = calculateCenter(routeResponse.features[0].geometry.coordinates);

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/wanderway/clvrfh4a500ct01pf1h4u6yny',
      center: centerCoordinates, // Center of the US for demo purposes
      zoom: 4,
    });

    map.on('load', () => {
      // Add route as a source
      map.addSource('route', {
        type: 'geojson',
        data: routeResponse
      });

      // Add route as a layer
      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#0000FF',
          'line-width': 6
        }
      });
    });

    return () => map.remove(); // Clean up the map instance
  });

  return <div style={{ width: '100%', height: '800px' }} ref={mapContainerRef} />;
};

export default MapboxMap;