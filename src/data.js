exports.data = {
  hero: {
    title: '#30DayMapChallenge',
    lead: '🎉 2021 (full!) map gallery and a 3D hexagons tutorial 🎉 🌎',
    link: 'https://twitter.com/maptheclouds/status/1465391787787313159',
    buttonText: 'See on Twitter!',
  },
  gdpr: [
    {
      name: 'terms',
      title: 'Terms',
      slug: '/terms.html',
      icon: 'terms',
    },
    {
      name: 'privacy',
      title: 'Privacy',
      slug: '/privacy.html',
      icon: 'privacy',
    },
  ],
  menu: [
    {
      name: 'home',
      title: 'Home',
      slug: '/',
      icon: 'home',
    },
    {
      name: 'about',
      title: 'About',
      slug: '/about.html',
      icon: 'about',
    },
    {
      name: 'playground',
      title: 'Playground',
      slug: '/playground/',
      icon: 'playground',
    },
    {
      name: 'blog',
      title: 'Blog',
      slug: 'https://blog.maptheclouds.com/',
      icon: 'blog',
    },
  ],
  projectsBackup: [
    {
      location: { type: 'Point', address: 'earth ', coordinates: [Array] },
      tags: ['Data Visualization', 'Dataviz'],
      type: 'work',
      name: '30 Day Chart Challenge 2021',
      video_link: '',
      weblink: '',
      github: 'https://github.com/alexaac/30-day-chart-challenge',
      blog: '',
      description: '#30DayChartChallenge on Twitter',
      project_goal: '',
      project_solution: '',
      more_details:
        'Make a chart each day in April, on the following topics: comparisons, distributions, relationships, timeseries, uncertainties.',
      photo: '9115b407-53c9-41e7-bd00-66c99847b45e.png',
      created: '2021-03-31T19:02:49.907Z',
      slug: '30-day-chart-challenge',
      __v: 0,
      id: '6064c759b72b6feb67eae764',
    },
    {
      location: {
        type: 'Point',
        address: 'Cheile Vălișoarei, DJ107M, Romania',
        coordinates: [Array],
      },
      tags: [
        '3D',
        'Elevation',
        'GitHub',
        'JavaScript',
        'Maps',
        'Procedural GL',
        'Romania',
        'WebGL',
      ],
      type: 'personal',
      name: 'Cheile Aiudului Gorges - procedural.gl',
      video_link: '',
      weblink: 'https://alexaac.github.io/cheile-aiudului-gl',
      github: 'https://github.com/alexaac/cheile-aiudului-gl',
      blog: '',
      description: 'Testing procedural-gl.js',
      project_goal: '',
      project_solution: '',
      more_details: '',
      photo: '708fbbe0-1a30-4021-b078-75761602425f.png',
      created: '2021-03-31T19:02:48.907Z',
      slug: 'cheile-aiudului-gorges---procedural-gl',
      __v: 0,
      id: '6064c5fcb72b6feb67eae763',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: ['D3.js', 'Maps', 'Mobile', 'Web Design', 'Web Development'],
      type: 'personal',
      name: 'Dataviz România Logo Playground',
      video_link: '',
      weblink: 'https://datavizromania.org/playground/logo/',
      github: 'https://github.com/Data-Visualization-Romania/datavizromania',
      blog: '',
      description:
        'I have made a dedicated page, to choose the font and the logo for datavizromania.org',
      project_goal: '',
      project_solution: '',
      more_details: '',
      photo: 'd9b866be-fc5f-4176-885f-08aea60dfa70.png',
      created: '2021-03-31T18:21:45.241Z',
      slug: 'dataviz-romnia-logo-playground',
      __v: 0,
      id: '6064bdb9d0b4ebd92875b475',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: [
        'Arc Diagram',
        'Bubble Chart',
        'COVID-19',
        'D3.js',
        'Data Visualization',
        'Dataviz',
        'GitHub',
        'SVG',
      ],
      type: 'work',
      name: 'COVID-19 cases time arc diagram',
      video_link: '',
      weblink:
        'https://covid19.geo-spatial.org/statistici/relationare-cazuri?chart=covid-19-ro-cases-timeline',
      github: 'https://github.com/alexaac/covid-19-ro-cases-timeline',
      blog: 'https://blog.maptheclouds.com/events/covid-19-in-romania',
      description:
        "How COVID-19 cases are related in Romania, over the time, stacked by day order.   Data is being aggregated through the 'Coronavirus COVID-19 România' project, the result of Geo-spatial.org team hard work and the volunteers, that have been collecting and curating the COVID-19 data for Romania, daily, since the emergence of the first cases (26th of February, 2020).  Features: stacked layout, zoom, animation, hover.",
      project_goal:
        'I thought it would be easier to see how much time it has taken for the next related case to be confirmed, from the emergence of a source case, and how were the cases related over time.',
      project_solution:
        ' I have used the day attribute to plot the points on the X axis, and a calculated order by day attribute, for the Y axis, and the number of related cases for the circle diameter, and the result was a bubble chart. \r\n\r\n',
      more_details:
        'I could have used a force layout, and distribute the points using a forceX attribute, but for performance I have used directly the day attribute to plot the points on the X axis, and a calculated order by day attribute, for the Y axis, and the number of related cases for the circle diameter, and the result was a bubble chart. \r\n\r\nI have also used the arc diagram layout for the links.\r\n',
      photo: '925a5616-8b9a-4066-87ad-831a38680982.png',
      created: '2021-03-30T18:02:19.312Z',
      slug: 'covid-19-cases-time-arc-diagram',
      __v: 0,
      parent_project: 'covid-19-ro',
      id: '606367ab779cfeafa32ab723',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: [
        'COVID-19',
        'D3.js',
        'Data Visualization',
        'Dataviz',
        'JavaScript',
        'SVG',
        'Treemap',
      ],
      type: 'work',
      name: 'COVID-19 cases counties treemap',
      video_link: '',
      weblink:
        'https://covid19.geo-spatial.org/statistici/repartitie-cazuri-judete',
      github: 'https://github.com/alexaac/covid-19-ro-cases-treemap',
      blog: 'https://blog.maptheclouds.com/events/covid-19-in-romania',
      description:
        "COVID-19 cases in Romania, per county.  Data is being aggregated through the 'Coronavirus COVID-19 România' project, the result of Geo-spatial.org team hard work and the volunteers, that have been collecting and curating the COVID-19 data for Romania, daily, since the emergence of the first cases (26th of February, 2020).  Features: treemap, hover.",
      project_goal:
        'I wanted to highlight the counties with the biggest number of confirmed cases, so I have plotted the counties ordered by case numbers.',
      project_solution:
        'I used a treemap, that recursively subdivides area into rectangles, and assigned an unique color to each county. Then, I have chosen a color palette generated on iwanthue.',
      more_details:
        'Treemaps are an alternative way of visualizing the hierarchical structure of a Tree Diagram while also displaying quantities for each category via area size. Each category is assigned a rectangle area with their subcategory rectangles nested inside of it. When a quantity is assigned to a category, its area size is displayed in proportion to that quantity and to the other quantities within the same parent category in a part-to-whole relationship. Also, the area size of the parent category is the total of its subcategories. If no quantity is assigned to a subcategory, then it’s area is divided equally amongst the other subcategories within its parent category. ',
      photo: 'edbb3fa1-c256-4506-b120-993f0b8ee4b6.png',
      created: '2021-03-30T17:57:16.298Z',
      slug: 'covid-19-cases-counties-treemap',
      __v: 0,
      id: '6063667c779cfeafa32ab722',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: [
        'COVID-19',
        'Circle Pack',
        'Data Visualization',
        'Dataviz',
        'Force Layout',
        'Geospatial',
        'JavaScript',
        'Maps',
        'SVG',
      ],
      type: 'work',
      name: 'COVID-19 cases clusters pack',
      video_link: '',
      weblink:
        'https://covid19.geo-spatial.org/statistici/relationare-cazuri?chart=covid-19-ro-cases-pack',
      github: 'https://github.com/alexaac/covid-19-ro-cases-pack',
      blog: 'https://blog.maptheclouds.com/events/covid-19-in-romania',
      description:
        "Clusters grouped by county for COVID-19 cases in Romania.   Data is being aggregated through the 'Coronavirus COVID-19 România' project, the result of Geo-spatial.org team hard work and the volunteers, that have been collecting and curating the COVID-19 data for Romania, daily, since the emergence of the first cases (26th of February, 2020).  Features: pack layout, cluster, map, zoom, hover.",
      project_goal:
        'I wanted to see how the clusters of cases were distributed on the map.',
      project_solution:
        'In order to improve visibility, I have aggregated the points by their source case. In fact, there are two visualizations, one representing the clusters on map, and another representing a big pack of all the counties.',
      more_details:
        'I have converted the counties geometries file to GeoJSON using GDAL ‘Convert Format’ (in QGIS), then I have used Mapshaper to simplify the GeoJSON files, and bundle all the data into a single TopoJSON file. This format reduces the file size and has some other useful features, like topology-preserving shape simplification.\r\n\r\nThen, the points representing the aggregated data were placed in a circular manner over each county, using a pack layout.',
      created: '2021-03-30T17:52:29.207Z',
      slug: 'covid-19-cases-clusters-pack',
      __v: 0,
      photo: 'd5a6098c-892a-4a52-a96d-ddc68c3c51a6.png',
      id: '6063655d779cfeafa32ab721',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: [
        'COVID-19',
        'D3.js',
        'Data Visualization',
        'Dataviz',
        'Force Layout',
        'GitHub',
        'JavaScript',
        'Network Diagram',
        'SVG',
      ],
      type: 'work',
      name: 'COVID-19 cases network',
      video_link: '',
      weblink:
        'https://covid19.geo-spatial.org/statistici/relationare-cazuri?chart=covid-19-ro-cases-relations',
      github: 'https://github.com/alexaac/covid-19-ro-cases-relations',
      blog: 'https://blog.maptheclouds.com/events/covid-19-in-romania',
      description:
        "How COVID-19 cases are related in Romania, network layout.   Data is being aggregated through the 'Coronavirus COVID-19 România' project, the result of Geo-spatial.org team hard work and the volunteers, that have been collecting and curating the COVID-19 data for Romania, daily, since the emergence of the first cases (26th of February, 2020).  Features: network layout, zoom, animation, hover.",
      project_goal:
        'See how many people got infected by each person. In the visualization below, each circle represents a person, its size is proportional to how many people has infected (= were found in the area where the virus was spread by an infected person) and the color represents either status (confirmed, discharged from the hospital, deceased), county, gender or age.\r\n\r\nSee how the infected people relate to each other. When a person was infected and the source was known, that was considered a connection, and was represented as a curved line.\r\n\r\nSee where outbreaks could occur. The clusters of people, created based on the connections, could reveal possible hot spots and could help us discover the locations and the circumstances that can lead to outbreaks.\r\n\r\nExplore. Hover over each person to see how many people got in contact with, more details, and the link to the original media article. Select another theme to color all people by county, gender, location or status. Zoom in to reveal labels, and pan to navigate. Switch the language (Romanian or English) as desired.',
      project_solution:
        'I wanted to see how were the confirmed cases related, how did the virus spread from the first cases from the foreign countries, to the transmission inside the community. This kind of visualization would highlight the clusters of cases that could lead to outbreaks, and would require more attention from the officials.\r\n\r\nIn March, I have seen an article on Kontinentalist on how cases were related in Singapore, so I offered to create a similar graphic, for Romania. I made a new Github repository, created an initial graph, checked in the free code and exposed it through gh-pages.\r\n\r\nThe best way to show the relations between people was a Network Diagram, or a force layout in D3.js world.',
      more_details:
        'I’ve set the D3.js forces simulation so that nodes would be displayed around a center of gravity, the cases would be drawn as points, the links between them as lines, and attraction-rejection force algorithms would automatically distribute all the elements in the drawing space (or canvas).\r\n\r\nI had to find a workaround to add the source countries to the simulation, and at some point we decided to leave out the nodes that were not linked to other community cases.\r\n\r\nThen, I wrapped the code in a JavaScript framework, svelte, and I’ve added different features to the app, that I thought would be useful: display on the map, cluster the cases per county, display the cases on a timeline graph, ordered by day and stacked. Layouts by screen resolution, legends, navigation – zoom and pan, a play button that would step through each case, pop-up info about the case, web link to the source article, display the labels by zoom. Coloring by county, gender, age, status.',
      photo: 'dd3c4e53-40d9-436a-8d13-e6656f998081.png',
      created: '2021-03-30T17:47:31.844Z',
      slug: 'covid-19-cases-network',
      __v: 0,
      id: '60636433779cfeafa32ab720',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: [
        'Canvas',
        'D3.js',
        'Data Visualization',
        'Dataviz',
        'Force Layout',
        'Graph',
        'JavaScript',
        'Network Diagram',
      ],
      type: 'work',
      name: 'COVID-19 cases counties network',
      video_link: '',
      weblink: 'https://maptheclouds.com/covid-19-ro/cases-counties/en/',
      github: 'https://github.com/alexaac/covid-19-ro-cases-counties',
      blog: 'https://blog.maptheclouds.com/events/covid-19-in-romania',
      description:
        "How COVID-19 cases are related in Romania, network layout grouped by county.   Data is being aggregated through the 'Coronavirus COVID-19 România' project, the result of Geo-spatial.org team hard work and the volunteers, that have been collecting and curating the COVID-19 data for Romania, daily, since the emergence of the first cases (26th of February, 2020).  Features: network layout, zoom, animation, hover.",
      project_goal: '',
      project_solution: '',
      more_details:
        'This is a variant of the ‘Relationship between cases’ graphic, in which the cases are grouped by county and source case.',
      photo: '761ef171-8aa9-4072-8f26-25a906f63793.png',
      created: '2021-03-30T17:42:14.575Z',
      slug: 'covid-19-cases-counties-network',
      __v: 0,
      id: '606362f6779cfeafa32ab71f',
    },
    {
      location: { type: 'Point', address: 'Romania', coordinates: [Array] },
      tags: [
        'COVID-19',
        'D3.js',
        'Data Visualization',
        'Dataviz',
        'Graph',
        'JavaScript',
        'Line Graph',
        'Maps',
        'SVG',
        'Svelte',
        'Web Design',
        'Web Development',
        'WebGL',
      ],
      type: 'work',
      name: 'Daily COVID-19 cases in Romania',
      video_link: '',
      weblink: 'https://maptheclouds.com/covid-19-ro/cases-per-day/en/',
      github: 'https://github.com/alexaac/covid-19-ro-cases-per-day',
      blog: 'https://blog.maptheclouds.com/events/covid-19-in-romania',
      description:
        "Daily COVID-19 cases in Romania.  Data is being aggregated through the 'Coronavirus COVID-19 România' project, the result of Geo-spatial.org team hard work and the volunteers, that have been collecting and curating the COVID-19 data for Romania, daily, since the emergence of the first cases (26th of February, 2020).  Features: dropdown, animation, timeline, brush.",
      project_goal:
        'I wanted to monitor the case numbers change over the time.\r\nThis graphic is self-explanatory, it shows the evolution of the number of cases per day. ',
      project_solution:
        'I have used cumulative graphs, not logarithmic scales, but I have let the user select detailed graphs for smaller intervals of time.',
      more_details:
        'I have made three cumulative graphs, for confirmed, recovered and lost cases, and the user can see more information on hover. Later, I have added a graph for active cases, and a feature named brush, that lets the user select portions of the timeline on a area below the main graphs, so that the graphic would expose data only for the selected time interval.\r\n\r\nThe last features I’ve added were three more graphs for new cases per day, and a dropdown, initially hidden, that lets the user choose between graphs.',
      created: '2021-03-30T17:28:54.761Z',
      slug: 'daily-covid-19-cases-in-romania',
      __v: 0,
      photo: '3bf4dfbc-5010-4908-a493-8d682151bfe8.png',
      id: '60635fd6779cfeafa32ab71e',
    },
    {
      location: {
        type: 'Point',
        address: 'Dublin, Ireland',
        coordinates: [Array],
      },
      tags: ['3D', 'DTM', 'Hillshade', 'LiDAR', 'PDAL', 'Plasio', 'Potree'],
      type: 'work',
      name: 'Dublin - 3D LiDAR and ortophotos',
      video_link: '',
      weblink: '',
      github: 'https://github.com/alexaac/lidar-pdal-experiments',
      blog: 'https://blog.maptheclouds.com/learning/lidar-pdal-experiments-dublin',
      description:
        'Point Cloud data for Dublin - processing, analysis and visualization.',
      project_goal: '',
      project_solution: '',
      more_details:
        'Point Cloud data processing, analysis and visualization.\r\n\r\nData: free data for Dublin, a part of the densest public LiDAR data set ever collected by the New York University in 2015, via its Center for Urban Science and Progress (LAZ point cloud tiles) and their corresponding ortophotos from the 2015 Aerial Laser and Photogrammetry Survey of Dublin City Collection Record.\r\n\r\nTools: PDAL, Entwine, Potree, QGIS, bash.',
      photo: '17b2225b-64ea-4fd8-8f20-d4e3277f34bc.png',
      created: '2021-03-30T16:54:20.129Z',
      slug: 'dublin---3d-lidar-and-ortophotos',
      __v: 0,
      id: '606357bc2cf532a07c210a79',
    },
    {
      location: {
        type: 'Point',
        address: 'Taal Volcano, Talisay, Philippines',
        coordinates: [Array],
      },
      tags: [
        '3D',
        'DTM',
        'Data Science',
        'Data Visualization',
        'Elevation',
        'Entwine',
        'GIS',
        'GitHub',
        'Hillshade',
        'LiDAR',
        'Linux',
        'PDAL',
        'Plasio',
        'Potree',
        'QGIS',
      ],
      type: 'work',
      name: 'Taal Volcano - 3D LiDAR',
      video_link: '',
      weblink: '',
      github: 'https://github.com/alexaac/lidar-pdal-experiments',
      blog: 'https://blog.maptheclouds.com/learning/lidar-pdal-experiments',
      description:
        'Point Cloud data from Taal Volcano - processing, analysis and visualization.',
      project_goal: '',
      project_solution: '',
      more_details:
        '\r\nData: LiDAR files in the compressed LAZ format, from Taal Open LiDAR. The data was collected for the UP TCAGP and PHIL-LiDAR Program. There are multiple 1 meter LAZ tiles that each cover an area of 1000 by 1000 meter.\r\n\r\nTools: PDAL, Entwine, Potree, QGIS, bash.',
      photo: 'd4651a0b-6983-4cf0-8789-611eb5cf6606.png',
      created: '2021-03-30T16:35:56.851Z',
      slug: 'taal-volcano---3d-lidar',
      __v: 0,
      id: '6063536c2cf532a07c210a78',
    },
    {
      location: { type: 'Point', address: 'Paris', coordinates: [Array] },
      tags: [
        '3D',
        'Big Data',
        'Climbing',
        'DTM',
        'Data Visualization',
        'El Capitan',
        'Elevation',
        'Entwine',
        'GitHub',
        'Hillshade',
        'LiDAR',
        'PDAL',
        'Plasio',
        'Potree',
        'The Dome',
        'WebGL',
        'Yosemite Valley',
      ],
      type: 'work',
      name: 'Yosemite Valley - 3D LiDAR and ortophotos',
      video_link: 'https://youtu.be/2o6laZ2vhDQ',
      weblink: '',
      github: 'https://github.com/alexaac/lidar-pdal-experiments',
      blog: 'https://blog.maptheclouds.com/learning/lidar-pdal-experiments-yosemite-valley',
      description:
        'Point Cloud data on Yosemite Valley - processing, analysis and visualization.',
      project_goal: '',
      project_solution: '',
      more_details:
        'Data: three point clouds of LAS type for Yosemite Valley from OpenTopography, aerial data from NAIP (National Agriculture Imagery Program).\r\n\r\nTools: PDAL, Entwine, Potree, QGIS, bash.',
      created: '2021-03-30T16:21:35.358Z',
      slug: 'yosemite-valley---3d-lidar-and-ortophotos',
      __v: 0,
      photo: '38bebc32-1d87-4cd0-9568-f07ae122a225.png',
      id: '6063500f2cf532a07c210a77',
    },
    {
      location: {
        type: 'Point',
        address: 'Amazon Rainforest, Codajás - State of Amazonas, Brazil',
        coordinates: [Array],
      },
      tags: ['ArcGIS', 'Landsat', 'Wildfires'],
      type: 'work',
      name: 'Amazon - Landsat 9 Fire Analysis',
      weblink: '',
      github: 'https://github.com/alexaac/amazon-fire-analysis',
      blog: '',
      description:
        'Landsat Burn severity near the border of Bolivia, Paraguay, and Brazil, using ArcGIS - scripts, models, aps.',
      project_goal:
        'Analyze imagery to determine environmental factors that influence human health, safety, and well-being, and create a satellite image classification and a ModelBuilder-based analysis.\r\nSince the beginning of August 2019, NASA satellites have observed several fires near the border of Bolivia, Paraguay, and Brazil (not in the Amazon rainforest). On August 25, 2019, the Operational Land Imager (OLI) on Landsat 8 acquired images of one of the larger fires, which was burning north of the Paraguay River near Puerto Busch.',
      project_solution:
        'This project focuses on change detection analysis, estimating burn severity by analyzing Landsat images acquired before and after a fire. A differenced Normalized Burn Ratio (dNBR) can be used to support fire managers, to measure the burn scars to create a baseline for forest regeneration. \r\n\r\nThe Normalized Burn Ratio (NBR) is an index designed to highlight burnt areas in large fire zones. The formula is similar to NDVI, except that the formula combines the use of both near infrared (NIR) and shortwave infrared (SWIR) wavelengths. Burn severity describes how the fire intensity affects the functioning of the ecosystem in the area that has been burnt.\r\n\r\nThe analysis is conducted combining automated ArcGIS models and scripts with supervised classification. Based on pre and post fire Landsat scenes archives, I have generated a differenced normalized burn ratio (dNBR) raster, then used supervised classification to produce a 4-class thematic burn severity signature file, then reclassified dNBR, calculated acreage and found largest burnt perimeter using another model. I have used Python to merge the Landsat scenes and determine the dNBR.',
      more_details:
        'Since the beginning of August 2019, NASA satellites have observed several fires near the border of Bolivia, Paraguay, and Brazil (not in the Amazon rainforest). On August 25, 2019, the Operational Land Imager (OLI) on Landsat 8 acquired images of one of the larger fires, which was burning north of the Paraguay River near Puerto Busch.\r\n\r\nThis project focuses on change detection analysis, estimating burn severity by analyzing Landsat images acquired before and after a fire. A differenced Normalized Burn Ratio (dNBR) can be used to support fire managers, to measure the burn scars to create a baseline for forest regeneration.\r\n\r\nThe Normalized Burn Ratio (NBR) is an index designed to highlight burnt areas in large fire zones. The formula is similar to NDVI, except that the formula combines the use of both near infrared (NIR) and shortwave infrared (SWIR) wavelengths. Burn severity describes how the fire intensity affects the functioning of the ecosystem in the area that has been burnt.\r\n\r\nThe analysis is conducted combining automated ArcGIS models and scripts with supervised classification. Based on pre and post fire Landsat scenes archives, we generate a differenced normalized burn ratio (dNBR) raster, then use supervised classification to produce a 4-class thematic burn severity signature file, then we reclassify dNBR, calculate acreage and find largest burnt perimeter using another model.\r\n',
      photo: '22edb930-b667-4034-b18f-04867749a2ce.png',
      created: '2021-03-30T15:58:31.145Z',
      slug: 'amazon---landsat-9-fire-analysis',
      __v: 0,
      id: '60634aa71d5f6d9915aa507a',
    },
    {
      location: {
        type: 'Point',
        address: 'Cheile Vălișoarei, DJ107M, Romania',
        coordinates: [Array],
      },
      tags: ['Maps', 'Open Layers', 'Romania'],
      type: 'personal',
      name: 'Harta Cheile Aiudului',
      video_link: '',
      weblink:
        'http://cheileaiudului.ro/sites/default/files/harta_chei/chei.html',
      github: 'https://github.com/alexaac/harta-cheile-aiudului',
      blog: '',
      description:
        'Aiudului Gorges map from 2011 made with MapTiler, GDAL2Tiles and OpenLayers.',
      project_goal: '',
      project_solution: '',
      more_details:
        'This is an old map from 2011 made with MapTiler and GDAL2Tiles.\r\n\r\nIt is displayed using OpenLayers and uses OpenStreetMap as basemap.\r\n\r\nAiudului Gorges (Cheile Aiudului) is a beautiful place for climbing in Trascăului Mountains, România (lat=46.37716&lon=23.58264).\r\n\r\nThe map is currently available at Harta Cheilor Aiudului.\r\n\r\nFor now, this is work in progress, I intend to update it. :)',
      photo: 'b5f217e0-e4d8-43bb-801a-019b90997239.png',
      created: '2021-03-30T15:49:18.405Z',
      slug: 'harta-cheile-aiudului',
      __v: 0,
      id: '6064c2dbb72b6feb67eae761',
    },
    {
      location: {
        type: 'Point',
        address: 'Yosemite Valley, CA, USA',
        coordinates: [Array],
      },
      tags: [
        'ArcGIS',
        'DTM',
        'El Capitan',
        'Elevation',
        'Hillshade',
        'LiDAR',
        'PDAL',
        'Slope',
        'Weighted Overlay',
        'Yosemite Valley',
        'Python',
        'Data Science',
        'Geospatial',
        'GIS',
        'Maps',
        '3D',
        'Data Visualization',
      ],
      type: 'work',
      name: 'Yosemite Climbing Walls from LiDAR',
      weblink: '',
      github: 'https://github.com/alexaac/yosemite-climbing-walls',
      blog: 'https://blog.maptheclouds.com/learning/yosemite-climbing-walls',
      description:
        'Yosemite climbing walls from LiDAR, using PDAL and ArcGIS - scripts, maps, charts.',
      project_goal:
        'This was the capstone for the online GIS Specialization from Coursera.\r\n\r\nThe project is an attempt to delineate the Yosemite climbing walls by creating a high resolution Digital Terrain Model (0.5m), from light detection and ranging data (LiDAR) captured using Airborne scanning.',
      project_solution:
        'I have downloaded free point cloud data from OpenTopography, and also free and complete GIS data for Yosemite National Park from IRMA (Integrated Resource Management Applications) Datastore, and inspected the region using NAIP (National Agriculture Imagery Program) aerial data. \r\n\r\nI have used PDAL to merge the files, reproject to the same coordinate system, create tiles, extract ground points and denoise the tiles using a series of commands in batch. Then I went to ESRI’s ArcMap 3.7, imported all resulting ground tiles to a new LAS dataset and continued the analysis.\r\n\r\nFrom the 3D model, I have derived raster image files and extracted the climbing walls: outlined the morphologic characteristics of the ground surface (slope), identified the areas with steep slope above 75° and created a cluster of similar zones using raster image generalization algorithms.\r\n\r\nAlso, I have determined the walls length using a flow direction and stream identification algorithms to obtain the main flow lines that cross a wall, and calculating the difference in elevation for each. With the slope and length data, I’ve classified the climbing walls by steepness and length, for example from yellow to red (> 45° and > 100m difference in elevation, > 75° and > 900m difference in elevation).\r\n\r\nFinally, the project describes an extra suitability analysis in which I’ve overlaid subjective criteria (distance to roads, rivers, springs, parking) and morphometrical criteria (slope, length) to find out the best climbing wall.\r\n\r\nNot surprisingly, the best climbing wall turned out to be El Capitan, the almost 1km length of the wall and the above 75° steepness have had a big weight in the final overlay model. The coordinates of the resulting point are 37.730285, -119.637618 decimal degrees.',
      more_details:
        'Yosemite Valley glacially carved canyon hosts unique vertical geologic resources, like granitic domes, monoliths, spires, and cliffs. El Capitan (1000m tall), Yosemite Falls or Half Dome attract climbers and tourists from all over the world, Camp 4 is regarded as the birthplace of modern rock climbing. There have been numerous studies in the area, regarding rock fall hazards, landslides, and there is a map of the approximate climbing areas, but there were no public maps of the climbing walls. A map of the climbing walls would be useful for climbers to better understand the climbing environment and visualize the routes vicinity.\r\n\r\nThis project is an attempt to delineate the Yosemite climbing walls by creating a high resolution Digital Terrain Model (0.5m), from light detection and ranging data (LiDAR) captured using Airborne scanning. The resolution is a crucial factor in the analysis, lower resolution data would result in smaller walls lengths and less steep slopes, because the values would be interpolated. From the 3D model, we derive raster image files and extract the climbing walls: outline the morphologic characteristics of the ground surface (slope), identify the areas with steep slope above 75° and create a cluster of similar zones using raster image generalization algorithms. Also, we determine the wall length using a flow direction algorithm to obtain the main flow lines that cross a wall, and calculating the difference in elevation for each. With the slope and length data, we classify the climbing walls by steepness and length, for example from yellow to red (> 45° and > 100m difference in elevation, > 75° and > 900m difference in elevation). There is an extra suitability analysis in which we overlay subjective criteria (distance to roads, rivers, springs, parking) to find out the best climbing place.\r\n\r\nThere are still many methods to refine the analysis results and define the climbing walls or to obtain the wall length, correlated with on-site analysis. The project does not analyze the climbing walls in detail, because there is a lack of data from the ‘shadow’ effect that occurs when data is being collected from above the cliffs and overhangs (LiDAR data from the ground, or high resolution photos would be more useful for this kind of analysis). However, the overall result gives a better overview on the existing climbing areas and highlights possible new climbing areas, proving that LiDAR is a valuable resource that can be used with success to examine the surface morphology.',
      created: '2021-03-30T15:49:15.405Z',
      slug: 'yosemite-climbing-walls-from-lidar',
      __v: 0,
      photo: '6cc12679-8eaf-4ba2-ab88-fa12863caf73.png',
      id: '6063487b1d5f6d9915aa5079',
    },
    {
      location: { type: 'Point', address: 'Paris', coordinates: [Array] },
      tags: ['Perl', 'Programming', 'Web Design'],
      type: 'work',
      name: 'Mondrian with Perl',
      video_link: '',
      weblink:
        'https://htmlpreview.github.io/?https://github.com/alexaac/mondrian-html-only/blob/master/public/mondrian_html_only.html',
      github: 'https://github.com/alexaac/mondrian-html-only',
      blog: '',
      description:
        'Generate Mondrian painting using only HTML5, in Perl, using CSS Grid as template.',
      project_goal: '',
      project_solution: '',
      more_details:
        'Generate Mondrian painting in Perl using CSS Grid, after the example from https://github.com/jen4web/fem-layout.\r\n\r\nThen generate the same page using only HTML5.',
      photo: '5dfcbc3b-4b3e-41b3-846c-5291c848411a.png',
      created: '2021-03-30T10:08:58.073Z',
      slug: 'mondrian-with-perl',
      __v: 0,
      id: '6064c3a2b72b6feb67eae762',
    },
    {
      location: { type: 'Point', address: 'Paris', coordinates: [Array] },
      tags: [
        'Elections',
        'GitHub',
        'Presidential',
        'QGIS',
        'Romania',
        'JavaScript',
        'D3.js',
        'Geospatial',
        'Maps',
        'Cartograms',
        'Data Visualization',
        'Tooltip',
        'Blog',
      ],
      type: 'work',
      name: 'Romania Presidential Elections 2019',
      weblink: 'https://alexaac.github.io/presidentials2019/',
      github: 'https://github.com/alexaac/presidentials2019',
      blog: 'https://blog.maptheclouds.com/events/for-whom-shall-i-vote-2',
      description:
        "Cartograms and Charts using the results from Romania's Presidential Elections from 2019",
      project_solution:
        "I have used geographic data (counties from a file geodatabase) from Geoportalul Agenției Naționale de Cadastru și Publicitate Imobiliară and Elections data (in csv form) from Alegeri Prezidențiale 10 Noiembrie 2019.        Using QGIS and D3.js, I have created maps and cartograms, candidates wheel, treemap with counties, and a horizontal bar chart of districts ordered by total valid votes. A highlighter was shown simultaneously on all charts, and the areas were coloured by a proportion of each candidate's votes. Using the cartograms solved the issue with small but highly populated areas.",
      project_goal:
        'Basically, a cartogram is a distorted representation of a map, where the size is based on specific attributes, most often on population. That’s why cartograms have been used for Elections maps for a while now, they remove the false impression a vast amount of land with few voters can give in the choropleth maps.        For Romania, a cartogram would have shown clearer how Bucharest, the country capital, had voted. In 2017, there were 2.104.967 residents in Bucharest (9% from the country population), that means approximately 8771 people per square kilometer.',
      photo: 'e1a43454-4d00-470f-b389-f1ff4af92303.png',
      created: '2021-03-30T10:08:56.073Z',
      slug: 'romania-presidential-elections-2019',
      __v: 0,
      more_details:
        'Elections Cartograms 2019\r\n     \r\n      The cartograms show the size of each county distorted by population (the total number of valid expressed votes). Eg. Bucharest(B1-B6), the country capital, is small on the geographic map, but much bigger on the cartograms. The color ranges show the votes each candidate has received per electoral district, in percentages. SR represents the voters from abroad.\r\n      \r\n      More info on elections: <a href="https://en.wikipedia.org/wiki/2019_Romanian_presidential_election#Iohannis_vs._D%C4%83ncil%C4%83">2019 Romanian presidential election</a>.\r\n      \r\n      More info on cartograms: <a href="https://gistbok.ucgis.org/bok-topics/2017-quarter-04/cartograms">Introducing Cartograms</a>.\r\n      \r\n      Data sources: Data from <a href="https://geoportal.ancpi.ro/">Geoportalul Agentiei Nationale de Cadastru si Publicitate Imobiliara</a>, <a href="https://prezidentiale2019.bec.ro/">Biroul Electoral Central</a> and <a href="https://prezenta.bec.ro/prezidentiale10112019">Alegeri Prezidentiale 10 Noiembrie 2019</a>.',
      id: '6062f8b824a670591749a9ab',
    },
  ],
};
