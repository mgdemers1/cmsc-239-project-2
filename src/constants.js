// Put constants here if you want!

export const REGIONS = ['GLOBAL', 'KR', 'JP', 'US', 'TW'];
export const ARTISTS = ['Keith Ape', 'Kohh', 'Vince Staples', 'Higher Brothers'];
export const ARTIST_COLORS = {
  'Keith Ape': '#80a954',
  'Kohh': '#7f64b9',
  'Vince Staples': '#c4793b',
  'Higher Brothers': '#bc466c'
};


export const TEXT = {
  intro: `It seems obvious that different regions of the world listen to different music, but how do
    different countries consume foreign music? Below, I use Google Trends data to try to contextualize
    different artists around the world and in a handful of countries. This data is limited to YouTube searches
    in order to focus on the actual musical content of selected artists. I chose to focus on South Korea, Japan,
    Taiwan, and the United States (as a personal common point of reference). I also picked hip hop artists
    from these countries- Keith Ape, Kohh, Higher Brothers, and Vince Staples, respectively. These artists
    are all roughly the same age, and have all been actively creating new music since at least 2014. A
    knowledgable viewer may note that Higher Brothers are not from Taiwan, but from Chengdu, China.
    Unfortunately, China does not allow YouTube, so we are limited to data from Taiwan.`,

  streamgraph: `Below is a view of each artists interest around the world from January, 2015 until June, 2019.
    These "interest" values are calculated by Google using YouTube search volumes for one or multiple keywords.
    Here, all artists are together in order to get a sense of how their worldwide interest rates compare.
    The maximum interest seen during this time period is scaled to a value of 100 (see Keith Ape in
    July, 2015). In order to make reading exact interest values easier, select the artist you wish to focus
    on and the chart will reorganize to fit them along the origin.`,

  flux: `Now lets break down each artist by country. Below is a simple color visualization of an artist's
    respective interest in each country, with brighter colors depict instances of high interest, and black
    representing a lack of Google Trends data. The arrow buttons beneath the grid allow you to step through time,
    from 2015 until now, and you can once again select which artist to track. Here, interest rates are only
    measured against the selected artist (as opposed to the entire group in the plot above). By clicking
    through the date range, you can observe the fluctuation of interest for each artist and see delays in
    music growing popular in one region compared to another in the form of luminance differences.`,

  flux_breakdown: `From the above we can see when artists were most searched for in the past 4 years, but lets
    break down these further. Below we can see the same colored area again, but this time with a side-by-side
    plotting for that individual artist and country. Note here that not all data is filled in- Google Trends
    reports interests of 0 when not enough data was collected, so rather than plotting these regions with lack
    of data, I chose to remove them for more trend-identifying clarity. You can use the crosshair to find
    the exact time interval of each annotation- the left side of the note corresponds to the date at at
    which the event took place.`,

  'Keith Ape': `Interestingly, Keith Ape did not see his January, 2015 hit single "It G Ma" immediately pick up
    interest in South Korea. If you swap between South Korea, Japan, and the United States, you can see that
    South Korea was the last of these three countries to experience an uptick in interest (roughly one month
    later). Globally, Keith Ape's interest picks up even sooner than Japan or the United States, indicative
    of other countries, such as Mongolia, which were already avid listeners of Keith Ape. In October, 2018,
    Ape released his newest album "Born Again". Its unfortunate to see little noticable changes in interest rate
    during that time period relative the rest of his career thus far.`,

  'Kohh': `Globally, Kohh picks up interest on YouTube at the same time as Keith Ape due to his feature in
    the single "It G Ma" and to the release of his second album "Gardenia" the same day. The United States
    also demonstrates this same pattern, most likely due to the immediate viral hit that "It G Ma" became.
    In other countries though, Kohh's maximum interst is not demonstrated until at least a year after this
    release. In fact, South Korea contains a relative dropoff in interest rate in early 2015 that
    more-or-less extends until today.`,

  'Vince Staples': `In the United States, Vince Staples reached peak relative interest in June of 2015 when
    he released his album "Summertime '06", this corresponds with the moment he first begins getting relevant
    YoutTube searches in Taiwan- it is the first instance of non-zero interest. In South Korea, Staples'
    gathered the most interest around July of 2017 when he went on tour with the Gorillaz in Asia and right after
    the release of his next album "Big Fish Theory". Japan also reflects high interest around this time due to
    the same tour, but even more interestingly, Japan's interest in Staples' had been high for months prior as well,
    a trend I could not correlate to anything so far.`,

  'Higher Brothers': `Globally, High Brothers' interest seems to correspond with their albums and tours. With
    "Black Cab" coming out in mid 2017, a tour in late 2017, then their most recent album "Five Star" coming
    out in late 2018. In Taiwan, the Higher Brothers gain interest slightly sooner than the other
    countries in question, picking up in Feb of 2017 but similarly peaking around the release of "Black Cab".
    Japan seems to have odd interest patterns around this time period, demonstrating odd jumps in interest,
    but an immediate and drastic dropoff directly after the album's release.`,

  penta: `The final plots below help to highlight the differences between these artists over time in different
    countries. The left radar plot depicts overall averages of the artists in each country, once again
    leaving out the 0-values due to data loss. The right plot allows you to overlay the measured interest
    over time to more directly compare these artists. Note once again how the interest in Kohh and Keith Ape
    seem to go hand in hand due to their work together. There are, unfortunately, some issues with coloring
    the radar areas, but simply clicking on-and-off the artists should inform which ones are currently colored
    as what. Interestingly, this plot highlights how all artists seem to have a drop off between their
    respective interest rates from 2015-mid 2017  and mid 2017 to today. I was not able to find any direct
    information about this, but its possible that its natural career progression, or even that Google changed
    how Trends were calculated around that time.`,

  conclusion:`As we can see from these rappers and countries, patterns of interest in music do not necessarily
    abide by geographical boundaries any longer. YouTube has allowed for individuals all around the world
    to pick up and listen to whatever they like, and we have seen interesting examples of this throughout the
    past 5 years or so. An artists country is not guarenteed to be the primary or immediate location of his
    success, but it also often still is. Most often, global tours and albums inform peaks in interest, but
    I'm sure that more analysis can be done in the future to either confirm or refute these ideas.`,

  me: 'Max Demers'
};

export const ANNOTATIONS = {
  'Keith Ape': [
    {value:{x: 0, y: 2}, txt:'Keith Ape releases "It G Ma" ft. Kohh'},
    {value:{x: 27, y: 85}, txt:'"It G Ma" Remix With Four American Rappers'},
    {value:{x: 225, y: 25}, txt:'Newest Album "Born Again"'}],
  'Kohh': [
    {value:{x: 0, y: 5}, txt:'Keith Ape releases "It G Ma" ft. Kohh & "Gardenia" Album'},
    {value:{x: 45, y: 95}, txt:'Kohh releases Dirt Album'},
    {value:{x: 77, y: 85}, txt:'Kohh releases Dirt II Album'}],
  'Vince Staples': [
    {value:{x: 25, y: 15}, txt:'"Summertime \'O6"  Album Release'},
    {value:{x: 174, y: 90}, txt:'Humanz Tour with the Gorillaz to East Asia'},
    {value:{x: 158, y: 80}, txt:'"Big Fish Theory" Album Release'},
    {value:{x: 220, y: 60}, txt:'"FM!" Album Release'}],
  'Higher Brothers': [
    {value:{x: 150, y: 80}, txt:'"Black Cab" Album Release'},
    {value:{x: 185, y: 50}, txt:'"Journey to the West" EP'},
    {value:{x: 240, y: 60}, txt:'"Five Star" Album Release'}]
};

