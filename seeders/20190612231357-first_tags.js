'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [{
        name: "Made in LA Wall",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "LA locals will love this “Made in LA” mural flags Cisco Home’s Melrose Ave store. For those looking to express some hometown pride, pose underneath the “in” for an Instagram-ready snapshot.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "Cisco Home, 8025 Melrose Ave",
        longitude: -118.364776,
        latitude: 34.084121,
        instagram_embed: 'https://www.instagram.com/p/BpHfnZdhPsn/'
      },{
        name: "The West Hollywood Library Murals",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Arising from MOCAs landmark exhibit, Art in the Streets, the three murals are the fruits of an innovative collaboration between MOCA and the City of West Hollywood with principal funding from Cadillac and Vanity Fair. MOCA Director Jeffrey Deitch was intrigued by the three large blank white walls on the exterior of the new 5-story parking structure that would serve the new West Hollywood Library scheduled to open October 1, 2011. With a satellite gallery space at the Pacific Design Center and a desire to better connect MOCA's gallery with the City of West Hollywood, Deitch felt the large blank walls would be an ideal canvas for three of the street artists featured prominently in the &ldquo;Art in the Streets&rdquo; exhibit &ndash; Shepard Fairey, Marquis Lewis (RETNA) and Kenny Scharf.",
        description_source: "https://www.americansforthearts.org/by-program/networks-and-councils/public-art-network/public-art-year-in-review-database/the-west-hollywood-library-murals",
        address: "West Hollywood Library, 625 N San Vicente Blvd",
        longitude: -118.384078,
        latitude: 34.082014,
        instagram_embed: 'https://www.instagram.com/p/BDg03V-v_S5'
      }, {
        name: "Mondrian",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "It makes sense that this brightly colored wall belongs to Artist & Craftsman Supply, one of the city’s best art stores. Geometric and colorful, the wall is reminiscent of artist Piet Mondrian’s signature style.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "Artist & Craftsman Supply, 1660 S La Cienega Blvd",
        longitude: -118.375995,
        latitude: 34.047326,
        instagram_embed: 'https://www.instagram.com/p/BfBePQKlshA'
      }, {
        name: "Polka Dot Wall",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "This mural is by the Most Famous Artist, and sits outside trendy Arts District hotspot The Springs, a yoga studio, wellness center, and juice bar. Fun, whimsical, and playful, this wall is still relatively off-the-radar and sure to impress your followers.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "The Springs, 608 Mateo St.",
        longitude: -118.232236,
        latitude: 34.037751,
        instagram_embed: 'https://www.instagram.com/p/BDmqPX4KsSc'
      }, {
        name: "Global Angel Wings Project",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "The Global Angel Wings Project, led by artist Colette Miller, was created in 2002 to remind humanity that there is enough anger and bitterness on this planet and that we can be the “Angels of the Earth.” How beautiful and inspiring is that? She's painted wings in locations all over the world since the projects inception, and the wings represent love, peace, kindness, hope, and compassion.",
        description_source: "http://www.detourla.com/street--public-art/colette-miller-angel-wings",
        address: "Regent Theater, 446 S Main St.",
        longitude: -118.247988,
        latitude: 34.047130,
        instagram_embed: 'https://www.instagram.com/p/6IhgNEiJH6'
      }, {
        name: "Gorilla Mural",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Though all of Isabelle Alford-Lago’s gorilla murals are worthy of Instagram, this outside one of Gjusta seems to be a local favorite. Each of Alford-Lago’s signature gorillas has a unique personality, and this one is definitively a yogi—inspiring others to take a breather from the hustle and bustle of daily life.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "Gjusta, 320 Sunset Ave.",
        longitude: -118.474539,
        latitude: 33.995293,
        instagram_embed: 'https://www.instagram.com/p/BBVVxMKyIDl'
      }, {
        name: "Paul Smith Pink Wall",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Store Paul Smith Los Angeles’ notorious “pink wall” is perhaps one of the most popular spots on this list. A favorite spot for tourists, photo shoots, and Starbucks-toting girls, you’ll likely be waiting for your turn to get a shot in front of this bubblegum pink wall—it’s pretty much always crowded.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "Paul Smith Los Angeles, 8221 Melrose Ave.",
        longitude: -118.368774,
        latitude: 34.084054,
        instagram_embed: 'https://www.instagram.com/p/BejYhSxhVmX/'
      }, {
        name: "Love Wall",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Show yourself—and your city—some love with this mural outside of Smashbox Studios in Culver City. Bring a loved one along and get ready for the Instagram likes to pour on in.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "Smashbox Studios, 8549 Higuera St.",
        longitude: -118.381766,
        latitude: 34.022875,
        instagram_embed: 'https://www.instagram.com/p/BDa9E25DsUL'
      }, {
        name: "Elliott Smith ‘Figure 8’ Memorial",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "The Elliott Smith mural, located in the Silverlake neighborhood of Los Angeles, was first featured on the cover of Smith’s album, “Figure 8,” released in 2000, the last album he would release before his death. After Smith’s apparent suicide in 2003, the “Figure 8″� mural became a memorial to the artist, as fans covered the wall with lyrics and messages and left candles at the base to show their love for a singer-songwriter who revolutionized popular music in the ’90s with a guitar and poetry.",
        description_source: "https://maps.roadtrippers.com/us/los-angeles-ca/points-of-interest/elliott-smith-memorial-figure-8-wall",
        address: "Solutions!, 4334 W Sunset Blvd.",
        longitude: -118.283759,
        latitude: 34.095225,
        instagram_embed: 'https://www.instagram.com/p/BDhYeqNKl0w'
      }, {
        name: "Wylie Wilson Mural",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Cool-girl lingerie store Wylie Wilson is home to one of the best pieces of street art on Abbot Kinney, one of the spots in LA that seems almost over-saturated (as if there’s such a thing) with public murals. This one is by Venice-based artist Jules Muck, a street artist you may know for her green Lindsay Lohan mural.",
        description_source: "https://www.eventbrite.com/rally/los-angeles/most-instagrammable-street-art-in-la/",
        address: "Wylie Wilson, 1301 Abbot Kinney Blvd.",
        longitude: -118.468015,
        latitude: 33.991538,
        instagram_embed: 'https://www.instagram.com/p/8GxKA9jkCn'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {})
  }
};


// TEMPLATE
// {
//   name: "Name",
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   description: "Description",
//   description_source: "Description Source",
//   address: "Address",
//   longitude: LONG,
//   latitude: LAT,
//   instagram_embed: INSTAGRAM
// }
