import {React, useEffect, useState} from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Movies from "../components/Movies"

export default function Main(){
  const [top10Movies,setTop10Movies] = useState([]);

  useEffect(() => {
      async function fetchTop10Movies(){
        const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
        const options = {
            method: 'GET',
            headers: {
                   'x-rapidapi-key': 'b9f59080c3msh4f5bb68589b45e1p155574jsna36ad56cd12c',
                   'x-rapidapi-host': 'imdb188.p.rapidapi.com'
            }
        };
    
        try {
            // const response = await fetch(url, options);
            // const result = await response.text();
            const result = {
                "status": true,
                "message": "Success",
                "timestamp": 1723457507124,
                "data": [
                  {
                    "id": "tt6263850",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "Deadpool & Wolverine"
                    },
                    "primaryImage": {
                      "id": "rm136803841",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_.jpg",
                      "imageWidth": 1200,
                      "imageHeight": 1777
                    },
                    "ratingsSummary": {
                      "aggregateRating": 8.1,
                      "topRanking": {
                        "rank": 288
                      },
                      "voteCount": 200501
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "Deadpool & Wolverine"
                    },
                    "titleType": {
                      "id": "movie",
                      "text": "Movie",
                      "displayableProperty": {
                        "value": {
                          "plainText": ""
                        }
                      },
                      "categories": [
                        {
                          "id": "movie",
                          "text": "Movie",
                          "value": "movie"
                        }
                      ],
                      "canHaveEpisodes": false,
                      "isSeries": false,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": []
                    },
                    "plot": {
                      "id": "po7762561",
                      "author": null,
                      "plotText": {
                        "plainText": "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt6263850/contribution/plot/po7762561/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt6263850/contribution/plot/po7762561/report"
                      }
                    },
                    "releaseDate": {
                      "day": 26,
                      "month": 7,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "R",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": "Rated R for strong bloody violence and language throughout, gore and sexual references."
                    },
                    "titleRuntime": {
                      "seconds": 7680,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 2,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 1
                      }
                    }
                  },
                  {
                    "id": "tt11198330",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "House of the Dragon"
                    },
                    "primaryImage": {
                      "id": "rm3614667265",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_.jpg",
                      "imageWidth": 1296,
                      "imageHeight": 1920
                    },
                    "ratingsSummary": {
                      "aggregateRating": 8.4,
                      "topRanking": {
                        "rank": 355
                      },
                      "voteCount": 432095
                    },
                    "releaseYear": {
                      "year": 2022,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "House of the Dragon"
                    },
                    "titleType": {
                      "id": "tvSeries",
                      "text": "TV Series",
                      "displayableProperty": {
                        "value": {
                          "plainText": "TV Series"
                        }
                      },
                      "categories": [
                        {
                          "id": "tv",
                          "text": "TV",
                          "value": "tv"
                        }
                      ],
                      "canHaveEpisodes": true,
                      "isSeries": true,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": [
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with Prime Video Channels"
                                },
                                "name": {
                                  "value": "Max"
                                },
                                "refTagFragment": "hbomax",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Max"
                              },
                              "description": {
                                "value": "S1-2 with Prime Video Channels"
                              },
                              "shortDescription": {
                                "value": "S1-2"
                              },
                              "link": "aiv://aiv/view?gti=amzn1.dv.gti.6c067f19-38bd-4d69-a2c4-4928f30c0586"
                            },
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.hbo_max",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with subscription"
                                },
                                "name": {
                                  "value": "Max"
                                },
                                "refTagFragment": "hbomax",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Max"
                              },
                              "description": {
                                "value": "S1-2 with subscription"
                              },
                              "shortDescription": {
                                "value": "S1-2"
                              },
                              "link": "https://play.max.com/show/c68e69d7-9317-428a-a615-cdf8fe5a2e06"
                            },
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.starz",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "on STARZ.com and the STARZ app"
                                },
                                "name": {
                                  "value": "STARZ"
                                },
                                "refTagFragment": "starz",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/3b86f5d0-5c63-4f75-933e-bb4f89a56bc1._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/86e485da-98d8-4bf2-b0b5-15068100aeb5._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on STARZ"
                              },
                              "description": {
                                "value": "S1-2 on STARZ.com and the STARZ app"
                              },
                              "shortDescription": {
                                "value": "S1-2"
                              },
                              "link": "https://www.starz.com/series/46156"
                            },
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video.starzSub",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with Prime Video Channels"
                                },
                                "name": {
                                  "value": "STARZ"
                                },
                                "refTagFragment": "pvc_starzSub",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/69efd571-f51b-47bc-8371-82eefd1517b1._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/ccd37060-3990-4548-ae16-cf01a353fb8d._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on STARZ"
                              },
                              "description": {
                                "value": "S1-2 with Prime Video Channels"
                              },
                              "shortDescription": {
                                "value": "S1-2"
                              },
                              "link": "aiv://aiv/view?gti=amzn1.dv.gti.e76da0fb-1ea7-489a-bd90-0b7a79058267"
                            }
                          ]
                        },
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video",
                                "categoryType": "RENT_OR_BUY",
                                "description": null,
                                "name": {
                                  "value": "Prime Video"
                                },
                                "refTagFragment": "pvt_aiv",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Prime Video"
                              },
                              "description": {
                                "value": "buy from $22.99"
                              },
                              "shortDescription": {
                                "value": "from $22.99"
                              },
                              "link": "aiv://aiv/view?gti=amzn1.dv.gti.6c067f19-38bd-4d69-a2c4-4928f30c0586"
                            }
                          ]
                        }
                      ]
                    },
                    "plot": {
                      "id": "po6789597",
                      "author": null,
                      "plotText": {
                        "plainText": "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt11198330/contribution/plot/po6789597/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt11198330/contribution/plot/po6789597/report"
                      }
                    },
                    "releaseDate": {
                      "day": 21,
                      "month": 8,
                      "year": 2022,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "TV-MA",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": null
                    },
                    "titleRuntime": {
                      "seconds": 3000,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 1,
                      "rankChange": {
                        "changeDirection": "UP",
                        "difference": 1
                      }
                    }
                  },
                  {
                    "id": "tt12584954",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "Twisters"
                    },
                    "primaryImage": {
                      "id": "rm3285740033",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BZTQ0YjZhNzMtMzMwYi00YTQwLTlhYTgtNDBlZjRhYjJmMzJmXkEyXkFqcGc@._V1_.jpg",
                      "imageWidth": 8099,
                      "imageHeight": 12000
                    },
                    "ratingsSummary": {
                      "aggregateRating": 7,
                      "topRanking": {
                        "rank": 2518
                      },
                      "voteCount": 48641
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "Twisters"
                    },
                    "titleType": {
                      "id": "movie",
                      "text": "Movie",
                      "displayableProperty": {
                        "value": {
                          "plainText": ""
                        }
                      },
                      "categories": [
                        {
                          "id": "movie",
                          "text": "Movie",
                          "value": "movie"
                        }
                      ],
                      "canHaveEpisodes": false,
                      "isSeries": false,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": []
                    },
                    "plot": {
                      "id": "po5191881",
                      "author": null,
                      "plotText": {
                        "plainText": "A retired tornado-chaser and meteorologist is persuaded to return to Oklahoma to work with a new team and new technologies."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt12584954/contribution/plot/po5191881/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt12584954/contribution/plot/po5191881/report"
                      }
                    },
                    "releaseDate": {
                      "day": 19,
                      "month": 7,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "PG-13",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": "- Rated PG-13 for intense action and peril, some language and injury images."
                    },
                    "titleRuntime": {
                      "seconds": 7320,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 10,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 7
                      }
                    }
                  },
                  {
                    "id": "tt1190634",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "The Boys"
                    },
                    "primaryImage": {
                      "id": "rm4040589057",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg",
                      "imageWidth": 1080,
                      "imageHeight": 1350
                    },
                    "ratingsSummary": {
                      "aggregateRating": 8.7,
                      "topRanking": {
                        "rank": 101
                      },
                      "voteCount": 707956
                    },
                    "releaseYear": {
                      "year": 2019,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "The Boys"
                    },
                    "titleType": {
                      "id": "tvSeries",
                      "text": "TV Series",
                      "displayableProperty": {
                        "value": {
                          "plainText": "TV Series"
                        }
                      },
                      "categories": [
                        {
                          "id": "tv",
                          "text": "TV",
                          "value": "tv"
                        }
                      ],
                      "canHaveEpisodes": true,
                      "isSeries": true,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": [
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video.freevee",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "Watch Free on Freevee"
                                },
                                "name": {
                                  "value": "Freevee"
                                },
                                "refTagFragment": "fdv",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/119794c1-a963-4cda-84e7-aa9c8cd733d2._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/65662a3b-47eb-4271-9830-773014309b44._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Freevee"
                              },
                              "description": {
                                "value": "S1-3 Watch Free on Freevee"
                              },
                              "shortDescription": {
                                "value": "S1-3"
                              },
                              "link": "https://www.imdbtv.com/deeplink?contentId=amzn1.dv.gti.5eb510bc-7578-d2dd-49d3-484070a96b52&destination=Playback&type=VOD&ref_tag=imdb_app"
                            },
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video.PRIME",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "included with Prime"
                                },
                                "name": {
                                  "value": "Prime Video"
                                },
                                "refTagFragment": "pvs_piv",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Prime Video"
                              },
                              "description": {
                                "value": "S1-4 included with Prime"
                              },
                              "shortDescription": {
                                "value": "S1-4"
                              },
                              "link": "aiv://aiv/resume?gti=amzn1.dv.gti.5eb510bc-7578-d2dd-49d3-484070a96b52"
                            }
                          ]
                        }
                      ]
                    },
                    "plot": {
                      "id": "po1232844",
                      "author": null,
                      "plotText": {
                        "plainText": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt1190634/contribution/plot/po1232844/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt1190634/contribution/plot/po1232844/report"
                      }
                    },
                    "releaseDate": {
                      "day": 26,
                      "month": 7,
                      "year": 2019,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": [
                        {
                          "text": "internet"
                        }
                      ]
                    },
                    "titleCertificate": {
                      "rating": "TV-MA",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": null
                    },
                    "titleRuntime": {
                      "seconds": 3600,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 9,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 5
                      }
                    }
                  },
                  {
                    "id": "tt0944947",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "Game of Thrones"
                    },
                    "primaryImage": {
                      "id": "rm3885121281",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
                      "imageWidth": 1000,
                      "imageHeight": 1500
                    },
                    "ratingsSummary": {
                      "aggregateRating": 9.2,
                      "topRanking": {
                        "rank": 13
                      },
                      "voteCount": 2328117
                    },
                    "releaseYear": {
                      "year": 2011,
                      "endYear": 2019
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "Game of Thrones"
                    },
                    "titleType": {
                      "id": "tvSeries",
                      "text": "TV Series",
                      "displayableProperty": {
                        "value": {
                          "plainText": "TV Series"
                        }
                      },
                      "categories": [
                        {
                          "id": "tv",
                          "text": "TV",
                          "value": "tv"
                        }
                      ],
                      "canHaveEpisodes": true,
                      "isSeries": true,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": [
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video.hbomaxus",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with Prime Video Channels"
                                },
                                "name": {
                                  "value": "Max"
                                },
                                "refTagFragment": "hbomax",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/3e152962-a236-46be-aa94-2a48296d7129._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Max"
                              },
                              "description": {
                                "value": "S1-8 with Prime Video Channels"
                              },
                              "shortDescription": {
                                "value": "S1-8"
                              },
                              "link": "aiv://aiv/view?gti=amzn1.dv.gti.1ad8b490-650c-4a68-ad26-c8041d756712"
                            },
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.hbo_max",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with subscription"
                                },
                                "name": {
                                  "value": "Max"
                                },
                                "refTagFragment": "hbomax",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Max"
                              },
                              "description": {
                                "value": "S1-8 with subscription"
                              },
                              "shortDescription": {
                                "value": "S1-8"
                              },
                              "link": "https://play.max.com/show/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac"
                            }
                          ]
                        },
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video",
                                "categoryType": "RENT_OR_BUY",
                                "description": null,
                                "name": {
                                  "value": "Prime Video"
                                },
                                "refTagFragment": "pvt_aiv",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Prime Video"
                              },
                              "description": {
                                "value": "buy from $19.99"
                              },
                              "shortDescription": {
                                "value": "from $19.99"
                              },
                              "link": "aiv://aiv/view?gti=amzn1.dv.gti.1ad8b490-650c-4a68-ad26-c8041d756712"
                            },
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.amazon",
                                "categoryType": "RENT_OR_BUY",
                                "description": {
                                  "value": "Amazon"
                                },
                                "name": {
                                  "value": "Amazon"
                                },
                                "refTagFragment": "amazon",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/b26d1036-b801-4e57-8ce8-70c40cea751f._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/b6a99b0d-356a-4dae-9ffc-248e123b204b._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Search on Amazon"
                              },
                              "description": {
                                "value": "search for Blu-ray and DVD"
                              },
                              "shortDescription": {
                                "value": "search Amazon"
                              },
                              "link": "com.amazon.mobile.shopping://amazon.com/s?i=movies-tv&k=Game+of+Thrones"
                            }
                          ]
                        }
                      ]
                    },
                    "plot": {
                      "id": "po2596634",
                      "author": null,
                      "plotText": {
                        "plainText": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt0944947/contribution/plot/po2596634/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt0944947/contribution/plot/po2596634/report"
                      }
                    },
                    "releaseDate": {
                      "day": 17,
                      "month": 4,
                      "year": 2011,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "TV-MA",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": null
                    },
                    "titleRuntime": {
                      "seconds": 3600,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 6,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 1
                      }
                    }
                  },
                  {
                    "id": "tt5177120",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "The Ministry of Ungentlemanly Warfare"
                    },
                    "primaryImage": {
                      "id": "rm2125219329",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BOWI5YTlkNTktOTJlMC00MmYyLThkNzQtYmExOGZkZDE1ZjgwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
                      "imageWidth": 2025,
                      "imageHeight": 3000
                    },
                    "ratingsSummary": {
                      "aggregateRating": 6.8,
                      "topRanking": {
                        "rank": 3023
                      },
                      "voteCount": 79401
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "The Ministry of Ungentlemanly Warfare"
                    },
                    "titleType": {
                      "id": "movie",
                      "text": "Movie",
                      "displayableProperty": {
                        "value": {
                          "plainText": ""
                        }
                      },
                      "categories": [
                        {
                          "id": "movie",
                          "text": "Movie",
                          "value": "movie"
                        }
                      ],
                      "canHaveEpisodes": false,
                      "isSeries": false,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": [
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.prime_video",
                                "categoryType": "RENT_OR_BUY",
                                "description": null,
                                "name": {
                                  "value": "Prime Video"
                                },
                                "refTagFragment": "pvt_aiv",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Prime Video"
                              },
                              "description": {
                                "value": "rent/buy from $5.99"
                              },
                              "shortDescription": {
                                "value": "from $5.99"
                              },
                              "link": "aiv://aiv/view?gti=amzn1.dv.gti.62ec52b8-70e1-47bf-92e9-07b28a679b92"
                            }
                          ]
                        }
                      ]
                    },
                    "plot": {
                      "id": "po2537243",
                      "author": null,
                      "plotText": {
                        "plainText": "The British military recruits a small group of highly skilled soldiers to strike against German forces behind enemy lines during World War II."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt5177120/contribution/plot/po2537243/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt5177120/contribution/plot/po2537243/report"
                      }
                    },
                    "releaseDate": {
                      "day": 19,
                      "month": 4,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "R",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": "Rated R for strong violence throughout and some language."
                    },
                    "titleRuntime": {
                      "seconds": 7320,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 16,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 10
                      }
                    }
                  },
                  {
                    "id": "tt21831910",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "The Decameron"
                    },
                    "primaryImage": {
                      "id": "rm1531016193",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BNTI2YjliODQtOGU2OS00ZWI0LWFiZmMtNzdmNWZhN2FhNWFmXkEyXkFqcGc@._V1_.jpg",
                      "imageWidth": 1013,
                      "imageHeight": 1500
                    },
                    "ratingsSummary": {
                      "aggregateRating": 6.3,
                      "topRanking": null,
                      "voteCount": 4557
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "The Decameron"
                    },
                    "titleType": {
                      "id": "tvSeries",
                      "text": "TV Series",
                      "displayableProperty": {
                        "value": {
                          "plainText": "TV Series"
                        }
                      },
                      "categories": [
                        {
                          "id": "tv",
                          "text": "TV",
                          "value": "tv"
                        }
                      ],
                      "canHaveEpisodes": true,
                      "isSeries": true,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": [
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.netflix",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with subscription"
                                },
                                "name": {
                                  "value": "Netflix"
                                },
                                "refTagFragment": "netflix",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Netflix"
                              },
                              "description": {
                                "value": "S1 with subscription"
                              },
                              "shortDescription": {
                                "value": "S1"
                              },
                              "link": "https://www.netflix.com/watch/81417084?source=imdb"
                            }
                          ]
                        }
                      ]
                    },
                    "plot": {
                      "id": "po6774667",
                      "author": null,
                      "plotText": {
                        "plainText": "Set in 1348 during the Black Death, the deadliest pandemic in human history, explores the timely themes of class systems, power struggles, and survival in a time of pandemic."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt21831910/contribution/plot/po6774667/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt21831910/contribution/plot/po6774667/report"
                      }
                    },
                    "releaseDate": {
                      "day": 25,
                      "month": 7,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": [
                        {
                          "text": "internet"
                        }
                      ]
                    },
                    "titleCertificate": {
                      "rating": "TV-MA",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": null
                    },
                    "titleRuntime": {
                      "seconds": 3600,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 19,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 12
                      }
                    }
                  },
                  {
                    "id": "tt17677860",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "Presumed Innocent"
                    },
                    "primaryImage": {
                      "id": "rm1120498177",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BNDk1MWM3NmItZmNjZS00ZmZkLTk1ZDAtZjFiN2FiZjczNmZhXkEyXkFqcGc@._V1_.jpg",
                      "imageWidth": 2000,
                      "imageHeight": 3000
                    },
                    "ratingsSummary": {
                      "aggregateRating": 7.7,
                      "topRanking": {
                        "rank": 1101
                      },
                      "voteCount": 35824
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": 2024
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "Presumed Innocent"
                    },
                    "titleType": {
                      "id": "tvSeries",
                      "text": "TV Series",
                      "displayableProperty": {
                        "value": {
                          "plainText": "TV Series"
                        }
                      },
                      "categories": [
                        {
                          "id": "tv",
                          "text": "TV",
                          "value": "tv"
                        }
                      ],
                      "canHaveEpisodes": true,
                      "isSeries": true,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": [
                        {
                          "watchOptions": [
                            {
                              "provider": {
                                "id": "amzn1.imdb.w2w.provider.appletv",
                                "categoryType": "SUBSCRIPTION",
                                "description": {
                                  "value": "with subscription"
                                },
                                "name": {
                                  "value": "Apple TV+"
                                },
                                "refTagFragment": "appletv",
                                "logos": {
                                  "icon": {
                                    "url": "https://m.media-amazon.com/images/M/d2b632fd-044d-40de-a1c8-fc920e2f5d4d._V1_.png",
                                    "width": 500,
                                    "height": 500
                                  },
                                  "slate": {
                                    "url": "https://m.media-amazon.com/images/M/2b1f9c41-9007-447c-9aec-663ad10f5805._V1_.png",
                                    "width": 1280,
                                    "height": 720
                                  }
                                }
                              },
                              "title": {
                                "value": "Watch on Apple TV+"
                              },
                              "description": {
                                "value": "S1 with subscription"
                              },
                              "shortDescription": {
                                "value": "S1"
                              },
                              "link": "https://srv.clickfuse.com/ads/adclkr.php?id=100006140&url=https%3A%2F%2Ftv.apple.com%2Fus%2Fchannel%2Ftvs.sbd.4000"
                            }
                          ]
                        }
                      ]
                    },
                    "plot": {
                      "id": "po6423279",
                      "author": null,
                      "plotText": {
                        "plainText": "A horrific murder upends the Chicago Prosecuting Attorney's' office when one of its own is suspected of the crime."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt17677860/contribution/plot/po6423279/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt17677860/contribution/plot/po6423279/report"
                      }
                    },
                    "releaseDate": {
                      "day": 12,
                      "month": 6,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": [
                        {
                          "text": "internet"
                        }
                      ]
                    },
                    "titleCertificate": {
                      "rating": "TV-MA",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": null
                    },
                    "titleRuntime": null,
                    "chartMeterRanking": {
                      "currentRank": 14,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 6
                      }
                    }
                  },
                  {
                    "id": "tt23468450",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "Longlegs"
                    },
                    "primaryImage": {
                      "id": "rm800947457",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BMmVkZWY2ODEtYTMyYy00MDg2LWFkMGUtMjYwOTBhOGViODQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                      "imageWidth": 3600,
                      "imageHeight": 5334
                    },
                    "ratingsSummary": {
                      "aggregateRating": 7.1,
                      "topRanking": {
                        "rank": 2225
                      },
                      "voteCount": 44665
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "Longlegs"
                    },
                    "titleType": {
                      "id": "movie",
                      "text": "Movie",
                      "displayableProperty": {
                        "value": {
                          "plainText": ""
                        }
                      },
                      "categories": [
                        {
                          "id": "movie",
                          "text": "Movie",
                          "value": "movie"
                        }
                      ],
                      "canHaveEpisodes": false,
                      "isSeries": false,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": []
                    },
                    "plot": {
                      "id": "po7133848",
                      "author": null,
                      "plotText": {
                        "plainText": "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt23468450/contribution/plot/po7133848/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt23468450/contribution/plot/po7133848/report"
                      }
                    },
                    "releaseDate": {
                      "day": 12,
                      "month": 7,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "R",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": "Rated R for bloody violence, disturbing images and some language."
                    },
                    "titleRuntime": {
                      "seconds": 6060,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 13,
                      "rankChange": {
                        "changeDirection": "DOWN",
                        "difference": 4
                      }
                    }
                  },
                  {
                    "id": "tt26753003",
                    "isAdult": false,
                    "canRateTitle": {
                      "isRatable": true
                    },
                    "originalTitleText": {
                      "text": "Trap"
                    },
                    "primaryImage": {
                      "id": "rm933197569",
                      "imageUrl": "https://m.media-amazon.com/images/M/MV5BMzJiN2UyZjgtMjQ3MS00MDhhLTg5ZDItZmVjMTU3MTcwNzE4XkEyXkFqcGc@._V1_.jpg",
                      "imageWidth": 2764,
                      "imageHeight": 4096
                    },
                    "ratingsSummary": {
                      "aggregateRating": 6.2,
                      "topRanking": null,
                      "voteCount": 15702
                    },
                    "releaseYear": {
                      "year": 2024,
                      "endYear": null
                    },
                    "titleEpisode": null,
                    "titleText": {
                      "text": "Trap"
                    },
                    "titleType": {
                      "id": "movie",
                      "text": "Movie",
                      "displayableProperty": {
                        "value": {
                          "plainText": ""
                        }
                      },
                      "categories": [
                        {
                          "id": "movie",
                          "text": "Movie",
                          "value": "movie"
                        }
                      ],
                      "canHaveEpisodes": false,
                      "isSeries": false,
                      "isEpisode": false
                    },
                    "series": null,
                    "watchOptionsByCategory": {
                      "categorizedWatchOptionsList": []
                    },
                    "plot": {
                      "id": "po7819511",
                      "author": null,
                      "plotText": {
                        "plainText": "A father and his teen daughter attend a pop concert only to realize they've entered the center of a dark and sinister event."
                      },
                      "correctionLink": {
                        "url": "https://m.imdb.com/title/tt26753003/contribution/plot/po7819511/edit"
                      },
                      "reportingLink": {
                        "url": "https://m.imdb.com/title/tt26753003/contribution/plot/po7819511/report"
                      }
                    },
                    "releaseDate": {
                      "day": 2,
                      "month": 8,
                      "year": 2024,
                      "country": {
                        "id": "US",
                        "text": "United States"
                      },
                      "restriction": null,
                      "releaseAttributes": []
                    },
                    "titleCertificate": {
                      "rating": "PG-13",
                      "certificateCountry": {
                        "id": "US",
                        "text": "United States"
                      },
                      "ratingReason": "Rated PG-13 for some violent content and brief strong language"
                    },
                    "titleRuntime": {
                      "seconds": 6300,
                      "displayableProperty": {
                        "qualifiersInMarkdownList": null
                      }
                    },
                    "chartMeterRanking": {
                      "currentRank": 7,
                      "rankChange": {
                        "changeDirection": "UP",
                        "difference": 3
                      }
                    }
                  }
                ]
              }
            const newResult = result.data.map((item) => ({
              ...item,isWishlisted: true
            }));
            setTop10Movies(result.data);
        } catch (error) {
            console.error(error);
        }
     }
     fetchTop10Movies();
  },[]);
  
    return (<div className="p-3">
    {/* <Header/>
    <Navigation/> */}
    <Banner/>
    <Movies movies={top10Movies}/>
    </div>);
}