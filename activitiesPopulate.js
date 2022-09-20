require('dotenv').config()

const activityDB = require('./config/database')

const Activity = require('./models/Activity')

Activity.create(
    // Itinerary
    {
        name: "Dinner",
        photo: "https://i.ytimg.com/vi/3ibIzoRc8RM/maxresdefault.jpg",
        itinerary: "63190ce18dfd103c3681d9ac"
    },
    {
        name: "Music Show",
        photo: "https://www.bertoldiboats.com/cms/wp-content/uploads/2018/02/music7.jpeg",
        itinerary: "63190ce18dfd103c3681d9ac"
    },
    {
        name: "Sightseeing",
        photo: "https://media.timeout.com/images/105347952/image.jpg",
        itinerary: "63190ce18dfd103c3681d9ac"
    },

    // Itinerary
    {
        name: "Art Show",
        photo: "https://fristartmuseum.org/wp-content/uploads/2022-Mayors-Art-Show-1-e1649443239743.jpg",
        itinerary: "63190b678dfd103c3681d9a6"
    },
    {
        name: "",
        photo: "",
        itinerary: "63190b678dfd103c3681d9a6"
    },
    {
        name: "",
        photo: "",
        itinerary: "63190b678dfd103c3681d9a6"
    },

    // Itinerary
    {
        name: "Ski",
        photo: "https://www.zermatt.ch/extension/portal-zermatt/var/storage/images/media/bibliothek/illustrationen-x-tag/skitag/aktiver-skifahrer/2450559-1-ger-DE/Aktiver-Skifahrer_front_large.jpg",
        itinerary: "63190e4c8dfd103c3681d9ae"
    },
    {
        name: "Ski Museum",
        photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/60/27/b0/de-buitenkant-van-het.jpg?w=1200&h=-1&s=1",
        itinerary: "63190e4c8dfd103c3681d9ae"
    },
    {
        name: "Chair Lifts",
        photo: "http://www.matterhornchalets.com/wp-content/uploads/2016/12/59539fef95-640x481.jpg",
        itinerary: "63190e4c8dfd103c3681d9ae"
    },

    // Itinerary
    {
        name: "Spa",
        photo: "https://www.nyxhotels.com/cache/ca/09/ca09d4cb7b52f082da063c7f8092ea33.jpg",
        itinerary: "631914588dfd103c3681d9bb"
    },
    {
        name: "Pool",
        photo: "https://s4p5s7j9.stackpathcdn.com/wp-content/uploads/2018/04/melhores-hoteis-centro-cancun.jpg",
        itinerary: "631914588dfd103c3681d9bb"
    },
    {
        name: "",
        photo: "",
        itinerary: "631914588dfd103c3681d9bb"
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },

    // Itinerary
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
    {
        name: "",
        photo: "",
        itinerary: ""
    },
)