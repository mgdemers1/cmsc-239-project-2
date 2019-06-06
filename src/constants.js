// Put constants here if you want!

export const ARTISTS = ['Keith Ape', 'Kohh', 'Vince Staples', 'Higher Brothers'];
export const COLORS =  ['#80a954', '#7f64b9', '#c4793b', '#bc466c']

export const ARTIST_COLORS = {
  'Keith Ape': '#80a954',
  'Kohh': '#7f64b9',
  'Vince Staples': '#c4793b',
  'Higher Brothers': '#bc466c'
};

export const ARTIST_REGIONS = {
  'Keith Ape': 'KR',
  'Kohh': 'JP',
  'Vince Staples': 'US',
  'Higher Brothers': 'TW'
};

export const REGIONS = ['GLOBAL', 'KR', 'JP', 'US', 'TW'];

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
    Here, all artists are together inorder to get a sense of how their worldwide interest rates compare.
    The maximum interest seen during this time period is scaled to a value of 100 (see Keith Ape in
    July, 2015). In order to make reading exact interest values easier, select the artist you wish to focus
    on and the chart will reorganize to fit them along the origin.`,

  flux: `Now lets break down each artist by country. Below is a simple color visualization of an artist's
    respective interest in each country, with black representing little to no interest, while brighter colors
    depict instances of high interest. The arrow buttons beneath the grid allow you to step through time,
    from 2015 until now, and you can once again select which artist to track.`,

  flux_breakdown: `From the above we can see when artists were most searched for in the past 4 years, but lets
    break down these further. Below we can see the same colored area again, but this time with a side-by-side
    plotting for that individual artist and country. Note here that not all data is filled in- Google Trends
    reports interests of 0 when not enough data was collected, so rather than plotting these regions with lack
    of data, I chose to remove them for more trend-identifying clarity.`,

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

  conclusion:`As we can see from these rappers and countries, patterns of interest in music do not necessarily
    abide by geographical boundaries any longer. YouTube has allowed for individuals all around the world
    to pick up and listen to whatever they like, and we have seen interesting examples of this throughout the
    past 5 years or so. An artists country is not guarenteed to be the primary or immediate location of his
    success, but it also often still is. Most often, global tours and albums inform peaks in interest, but
    I'm sure that more analysis can be done in the future to either confirm or refute these ideas.`
};
