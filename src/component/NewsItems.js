import React, { Component } from 'react'
import News from './News'
import PropTypes from 'prop-types'

import Spinner from './Spinner'


// new api='https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=d2d79cc94e834277a2f5607c0f9f31ea'
export class NewsItems extends Component {
    // Article=[ {
    //     "source": {
    //         "id": "google-news",
    //         "name": "Google News"
    //     },
    //     "author": null,
    //     "title": "England fast bowler Sciver-Brunt retires from international cricket - Reuters",
    //     "description": "England fast bowler Sciver-Brunt retires from international cricket  Reuters",
    //     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2VuZ2xhbmQtZmFzdC1ib3dsZXItc2NpdmVyLWJydW50LXJldGlyZXMtaW50ZXJuYXRpb25hbC1jcmlja2V0LTIwMjMtMDUtMDUv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    //     "urlToImage": null,
    //     "publishedAt": "2023-05-05T12:14:00Z",
    //     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    // },
    // {
    //     "source": {
    //         "id": "google-news",
    //         "name": "Google News"
    //     },
    //     "author": null,
    //     "title": "Sydney Cricket Ground gates named after Tendulkar, Lara - Reuters",
    //     "description": "Sydney Cricket Ground gates named after Tendulkar, Lara  Reuters",
    //     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9zeWRuZXktY3JpY2tldC1ncm91bmQtZ2F0ZXMtbmFtZWQtYWZ0ZXItdGVuZHVsa2FyLWxhcmEtMjAyMy0wNC0yNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    //     "urlToImage": null,
    //     "publishedAt": "2023-04-24T08:20:00Z",
    //     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    // },
    // {
    //     "source": {
    //         "id": "google-news",
    //         "name": "Google News"
    //     },
    //     "author": null,
    //     "title": "Kohli says playing his best T20 cricket - Reuters",
    //     "description": "Kohli says playing his best T20 cricket  Reuters",
    //     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2tvaGxpLXNheXMtcGxheWluZy1oaXMtYmVzdC10MjAtY3JpY2tldC0yMDIzLTA1LTIyL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    //     "urlToImage": null,
    //     "publishedAt": "2023-05-22T04:27:00Z",
    //     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Simon Burnton",
    //     "title": "England ‘legend’ Katherine Sciver-Brunt retires from international cricket",
    //     "description": "<ul><li>‘Cricket has given me a purpose and many golden memories’</li><li>ECB’s Clare Connor: ‘She has been an unbelievable role model’</li></ul>After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver…",
    //     "url": "https://www.theguardian.com/sport/2023/may/05/england-legend-katherine-sciver-brunt-retires-from-international-cricket",
    //     "urlToImage": "https://i.guim.co.uk/img/media/0aa9057291d9e239c1bde68d1664123118faad71/0_101_2772_1663/master/2772.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b0720409335fa6ac1a3270bb08f52486",
    //     "publishedAt": "2023-05-05T14:34:28Z",
    //     "content": "After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver-Brunt has announced her retirement from international cricket. The decision continue… [+8232 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Simon Burnton",
    //     "title": "Michael Vaughan returns to BBC cricket coverage for Ashes summer",
    //     "description": "<ul><li>Charge against former captain was found not proven by CDC</li><li>Vaughan was dropped from BBC coverage in autumn 2021</li></ul>Michael Vaughan is to return to the BBC and play a key part in their cricket coverage this summer after being cleared of ma…",
    //     "url": "https://www.theguardian.com/sport/2023/may/19/michael-vaughan-returns-to-bbc-cricket-coverage-for-ashes-summer",
    //     "urlToImage": "https://i.guim.co.uk/img/media/3bf8982c6519474533b38c1be03424519d8dfa99/0_130_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9bfbda837cb58de1ecbc88663f16b98d",
    //     "publishedAt": "2023-05-19T12:08:29Z",
    //     "content": "Michael Vaughan is to return to the BBC and play a key part in its cricket coverage this summer after being earlier this year cleared of making a racist remark during his time as a player at Yorkshir… [+7110 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Warwickshire v Surrey, Middlesex v Kent – live",
    //     "description": "<ul><li>All the latest from around the County Championship</li><li>The Spin on the value of logging off from social media</li><li>Mail Tanya with any thoughts, tweet @tjaldred or post BTL</li></ul>1 DURHAM (played 3) 402 WORCESTERSHIRE (played 3) 35 Continue …",
    //     "url": "https://www.theguardian.com/sport/live/2023/apr/27/county-cricket-warwickshire-v-surrey-middlesex-v-kent-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/9e66474315711585dc52422212fa326ca9f636f7/0_324_4858_2915/master/4858.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f12de47c4ed190794d6f6d2ac5b398da",
    //     "publishedAt": "2023-04-27T09:06:49Z",
    //     "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nJofra watch:\r\nStuart Broad presses play:\r\nDIVISION TWO TABLE\r\n1 DURHAM (played 3) 40\r\n2 WORCESTERSHIRE (played 3) 35\r\n3 LEICESTERSHI… [+1643 chars]"
    // },
    // {
    //     "source": {
    //         "id": "engadget",
    //         "name": "Engadget"
    //     },
    //     "author": "Jon Fingas",
    //     "title": "Motorola's 2023 Moto Edge+ and G come to the US",
    //     "description": "Motorola is bringing some of its headlining smartphones to the US, and they may be welcome upgrades if you were disappointed with previous models. To start, the 2023 Moto Edge+ is a significant upgrade that addresses some of last year's shortcomings. The new …",
    //     "url": "https://www.engadget.com/motorolas-2023-moto-edge-and-g-come-to-the-us-151532466.html",
    //     "urlToImage": "https://s.yimg.com/uu/api/res/1.2/6R9_jZNXjLciOVMh5onXGQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/7d9224a0-e8f3-11ed-bdf3-c2fa74abca02.cf.jpg",
    //     "publishedAt": "2023-05-02T15:15:32Z",
    //     "content": "Motorola is bringing some of its headlining smartphones to the US, and they may be welcome upgrades if you were disappointed with previous models. To start, the 2023 Moto Edge+ is a significant upgra… [+2070 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": null,
    //     "title": "Hot air balloon stops play: U10s cricket match in Sussex gets unusual delay – video",
    //     "description": "A hot air balloon landed on the field during a cricket match between Chiddingfold U10s and U10s at Lurgashall, West Sussex Continue reading...",
    //     "url": "https://www.theguardian.com/sport/video/2023/may/19/hot-air-balloon-stops-play-u10s-cricket-match-in-sussex-gets-unusual-delay-video",
    //     "urlToImage": "https://i.guim.co.uk/img/media/1c63f633014584578f1d821e7c82d74d514e8db6/0_298_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=42c1751b5a53fb6f724b20d5b33492c0",
    //     "publishedAt": "2023-05-19T16:00:56Z",
    //     "content": "A hot air balloon landed on the field during a cricket match between Chiddingfold U10s and U10s at Lurgashall, West Sussex"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Jonathan Liew",
    //     "title": "The revival of Test cricket is a fine thing – but ODIs would like a word | Jonathan Liew",
    //     "description": "Bazball is no magic formula, it’s another cheery novelty – the idea of the quick fix will always seduce lovers of the long gameI got a little teary the other night. It’s a really stupid story. You know that famous scene in Coronation Street when Hilda Ogden c…",
    //     "url": "https://www.theguardian.com/sport/blog/2023/apr/25/test-cricket-england-bazball-ben-stokes-brendon-mcullum",
    //     "urlToImage": "https://i.guim.co.uk/img/media/c624874181077edcd141c63d0d06ddba0c7a43ae/0_57_3740_2244/master/3740.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f0d1ae21119fb35989c8930e0d4ffbe4",
    //     "publishedAt": "2023-04-25T07:00:30Z",
    //     "content": "I got a little teary the other night. Its a really stupid story. You know that famous scene in Coronation Street when Hilda Ogden comes home from the funeral and theres a parcel of Stans belongings o… [+5573 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Lancashire v Somerset, Kent v Hampshire and more – live",
    //     "description": "<ul><li>Latest updates from around the grounds on day four</li><li>Jimmy Anderson unable to bat or bowl for Lancashire</li><li>Get in touch: email Tanya, tweet or comment BTL</li></ul>Ali on a fraught standoff between Pakistan and India over the Asia Cup.For …",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/14/county-cricket-lancashire-v-somerset-kent-v-hampshire-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/445aeaf9ab67fb4217ee5fe1136ca71c2c32d87c/148_214_1769_1061/master/1769.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=99e4e57506c0348f6dcf61dfede59418",
    //     "publishedAt": "2023-05-14T09:00:56Z",
    //     "content": "For any Blur fans out there, there was a fabulous few minutes with Radcliffe and Maconie on Radio 6 music this morning about Modern Life is Rubbish. A perfect Sunday morning vignette (around 845am if… [+5596 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "Surrey v Kent, Notts v Essex and more: county cricket – live",
    //     "description": "<ul><li>Updates on day one of the latest round of Championship games</li><li>Get in touch: contact Tanya via email, Twitter or comment BTL</li></ul>If you suffer from anxiety, or know someone else who does, do take a couple of minutes to read this beautifully…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/18/surrey-v-kent-notts-v-essex-and-more-county-cricket-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/c307058b9bd8bd47f418a00f96fac92aaa1fb4db/0_120_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=4aabf2232d277f92e2bc8e927abe886e",
    //     "publishedAt": "2023-05-18T10:05:14Z",
    //     "content": "&lt;strong&gt;If you suffer from anxiety, o&lt;/strong&gt;r know someone else who does, do take a couple of minutes to read &lt;a href=\\\"https://www.ecb.co.uk/news/3367193/blog-middlesex-seamer-ethan… [+16168 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Kamran Ahmed in Sangam",
    //     "title": "Not seeing the trees for the wood: willow shortage could spell end for Kashmir’s cricket bat industry",
    //     "description": "The climate crisis and farmers opting to grow more lucrative timber is putting many bat-makers in Kashmir out of businessFor more than 100 years they have been making cricket bats from Kashmir’s willow trees. Along the highway leading to the town of Sangam in…",
    //     "url": "https://www.theguardian.com/global-development/2023/may/16/climate-crisis-kashmir-willow-wood-shortage-threat-cricket-bat-industry",
    //     "urlToImage": "https://i.guim.co.uk/img/media/a765d46cbd84572214a7efc60d7fe78ef4aaaf26/0_112_3250_1951/master/3250.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=08b8aa9277e41595b0a7d14877665a87",
    //     "publishedAt": "2023-05-16T06:00:05Z",
    //     "content": "For more than 100 years they have been making cricket bats from Kashmirs willow trees. Along the highway leading to the town of Sangam in the Indian-administered region, dozens of little workshops di… [+10557 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Middlesex v Kent, Warwickshire v Surrey, and more – live",
    //     "description": "<ul><li>Day four from the latest round of the County Championship</li><li>Sign up for The Spin | And mail Tanya, tweet her or post BTL</li></ul>At Bristol, the floodlights are on, and the cricket is about to happen.Chris Cooke mulls on his favourite ground: C…",
    //     "url": "https://www.theguardian.com/sport/live/2023/apr/30/county-cricket-middlesex-v-kent-warwickshire-v-surrey-and-more-live-day-four",
    //     "urlToImage": "https://i.guim.co.uk/img/media/8f5ed011f5162afa79203f356db0dba1ea2f1fd1/0_361_6444_3865/master/6444.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=1cebfbc17a5aeba78553d5e7c0d0570c",
    //     "publishedAt": "2023-04-30T10:08:00Z",
    //     "content": "Fifty for Miles Hammond!\r\nAn excellent back-against-the-wall effort, but how long can Singh-Dale stay with him? Gloucs, 213-9, 242 behind.\r\nAt Bristol, the floodlights are on, and the cricket is abou… [+5120 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Middlesex v Kent, Warwickshire v Surrey, and more – live",
    //     "description": "<ul><li>Day three from the latest round of the County Championship</li><li>Sign up for The Spin | And mail Tanya, tweet her or post BTL</li></ul>Woke up. Padded up, twice. Faced seven balls. Got a pair. Such was poor Billy Godleman’s day, as Derbyshire drove …",
    //     "url": "https://www.theguardian.com/sport/live/2023/apr/29/county-cricket-middlesex-v-kent-warwickshire-v-surrey-and-more-live-day-three",
    //     "urlToImage": "https://i.guim.co.uk/img/media/a35f3547b7b314ca707f1786b2421bc1f70469af/0_0_7725_4638/master/7725.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e5c4cba378e549805e4df20b30b661d5",
    //     "publishedAt": "2023-04-29T09:22:01Z",
    //     "content": "Friday's round-up\r\nWoke up. Padded up, twice. Faced seven balls. Got a pair. Such was poor Billy Godlemans day, as Derbyshire drove at speed towards certain defeat against Durham after being bowled o… [+2404 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred at Headingley",
    //     "title": "County cricket: Yorkshire v Glamorgan, Essex v Surrey and more – live",
    //     "description": "<ul><li>Updates from day four of the latest round in the Championship</li><li>Get in touch: contact Tanya by email, Twitter or comment BTL</li></ul>Marnus Labuschagne hitting top form isn’t news to thrill Ben Stokes and Brendon McCullum, but it was rich rewar…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/07/county-cricket-yorkshire-v-glamorgan-essex-v-surrey-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/faa53e52cd8ab2d4abe3dfab188a45e3a195dad6/0_116_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=63daabc8eab02aa3c984105dd2d74a1c",
    //     "publishedAt": "2023-05-07T09:00:18Z",
    //     "content": "Saturday's round-up\r\nMarnus Labuschagne hitting top form isnt news to thrill Ben Stokes and Brendon McCullum, but it was rich reward for those who swapped wall-to-wall coverage of ermine and crowns t… [+4618 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred at Headingley",
    //     "title": "County cricket: Worcestershire v Sussex, Yorkshire v Glamorgan, and more – live",
    //     "description": "<ul><li>Updates from day two of the latest round in the Championship</li><li>Get in touch: contact Tanya by email, Twitter or comment BTL</li></ul>Very good:While the Rajasthan Royals owner Manoj Badale envisages Test cricket as a once a year prestige event, …",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/05/county-cricket-worcestershire-v-sussex-yorkshire-v-glamorgan-and-more-live-day-two-scores-updates",
    //     "urlToImage": "https://i.guim.co.uk/img/media/3b014559a8aa008d11f611d72cb1577066df8479/0_291_8256_4954/master/8256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=98f794beb97c07bce8053ab189bafef6",
    //     "publishedAt": "2023-05-05T09:16:56Z",
    //     "content": "Very good:\r\n&lt;p lang=\\\"en\\\" dir=\\\"ltr\\\"&gt;Sussex are so funny man, 3 of the best red ball players in the world, and 8 U16As from whichever posh school is closest to Hove&lt;/p&gt;&amp;mdash; Sean … [+4752 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Lancashire v Somerset, Warwickshire v Essex, and more – live",
    //     "description": "<ul><li>Latest updates from around the grounds on day one</li><li>Get in touch: email Tanya, tweet or comment BTL</li></ul>Jofra Archer latestAll sorts of fascinating titbits have drifted across my desk while writing this: Continue reading...",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/11/county-cricket-lancashire-v-somerset-warwickshire-v-essex-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/6fe96c914c5993f9560c05e591f7126178052f66/0_240_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ff220b7bd3cf51d7bbc0b93668798c58",
    //     "publishedAt": "2023-05-11T09:00:22Z",
    //     "content": "&lt;strong&gt;Hello&lt;/strong&gt;! We must stop meeting like this, etc. Round six, May busting into intoxicating life, the swifts have made it to Manchester and poor Jofra Archer and Olly Stone are … [+29649 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Ali Martin",
    //     "title": "Tense Pakistan and India standoff poses threat to Cricket World Cup fixtures",
    //     "description": "<ul><li>Hosts seek ‘hybrid’ solution for September’s six-team Asia Cup</li><li>‘If we don’t play each other in the Asia Cup, it will be ruinous’</li></ul>The men’s Cricket World Cup is less than five months away and could yet see its schedule plunge into chao…",
    //     "url": "https://www.theguardian.com/sport/2023/may/13/tense-pakistan-and-india-standoff-poses-threat-to-cricket-world-cup-fixtures",
    //     "urlToImage": "https://i.guim.co.uk/img/media/54c351e1c23ebbf411d64701969e3f005250367e/0_321_4575_2745/master/4575.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d08fc9b9161ac85eb4efe292fef29f45",
    //     "publishedAt": "2023-05-13T08:47:38Z",
    //     "content": "The mens Cricket World Cup is less than five months away and could yet see its schedule plunge into chaos amid an ongoing impasse involving Pakistan, India and the Asia Cup.\r\nThe six-team Asia Cup is… [+9958 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred at Old Trafford",
    //     "title": "County cricket: Lancashire v Somerset, Surrey v Middlesex, and more – live",
    //     "description": "<ul><li>Latest updates from around the grounds on day three</li><li>Get in touch: email Tanya, tweet or comment BTL</li></ul>This looks fun:Nineteen-year-old James Rew’s second Championship century in three games was overshadowed by Jimmy Anderson’s no-show f…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/13/county-cricket-lancashire-v-somerset-surrey-v-middlesex-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/cd63849cb39f211a879a39365c13fd341dea4e95/0_345_2688_1613/master/2688.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=6b50a0602d8795a93bd835e1dbfc0d38",
    //     "publishedAt": "2023-05-13T09:12:50Z",
    //     "content": "Friday's round-up: Jimmy Anderson watch et al\r\nNineteen-year-old James Rews second Championship century in three games was overshadowed by Jimmy Andersons no-show for Lancashire on Friday, a minor is… [+3792 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Jonathan Liew",
    //     "title": "Leicestershire offer parable for English cricket: teams should serve, not just sell | Jonathan Liew",
    //     "description": "The perpetual strugglers have a mission beyond simply shaking people down and offer a reminder of what sport can beThe fourth morning at Grace Road dawns brightly and the game is moving at a frightening pace. Leicestershire, following on, are 16 without loss.…",
    //     "url": "https://www.theguardian.com/sport/blog/2023/may/16/leicestershire-offer-parable-for-english-cricket-teams-should-serve-not-just-sell",
    //     "urlToImage": "https://i.guim.co.uk/img/media/74fced722267b1017b5be191819822e4c9a5812f/0_129_4072_2443/master/4072.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f6d6a07d75add6192c46ebd18a554872",
    //     "publishedAt": "2023-05-16T07:00:07Z",
    //     "content": "The fourth morning at Grace Road dawns brightly and the game is moving at a frightening pace. Leicestershire, following on, are 16 without loss. The Sussex fielders are bounding and skipping across t… [+10637 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "Surrey v Kent, Middlesex v Somerset, and more: county cricket – live",
    //     "description": "<ul><li>Updates on day two of the latest round of Championship games</li><li>Get in touch: contact Tanya via email, Twitter or comment BTL</li></ul>A lovely obituary of a cricket lover by his son, Simon. Rest in peace Mike Rines.Ollie Robinson squeezed the As…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/19/surrey-v-kent-notts-v-essex-and-more-county-cricket-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/93ca60f2dd10872683bb8bb1f8782c605b19b283/0_325_4875_2925/master/4875.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=8260c08e2f408c918ea67a4e76b9732c",
    //     "publishedAt": "2023-05-19T09:04:46Z",
    //     "content": "If you havent come across them before, Sporting Memories do outstanding work helping older people and those living with dementia through the power of sport and reminiscence.\r\n&lt;p lang=\\\"en\\\" dir=\\\"… [+4396 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Surrey v Kent, Middlesex v Somerset, and more – live",
    //     "description": "<ul><li>Updates on day three of the latest round of Championship games</li><li>Get in touch: contact Tanya via email, Twitter or comment BTL</li></ul>And Simon looks at the the T20 Blast which…blasts off today at Edgbaston, with Warwickshire v Yorkshire, and …",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/20/county-cricket-surrey-v-kent-middlesex-v-somerset-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/01a4f86a70ffb56aef11c288195bd84233d18e7c/740_0_4732_2839/master/4732.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=372d1bc6af7c2e3104453c761b0c1d28",
    //     "publishedAt": "2023-05-20T09:00:55Z",
    //     "content": "Friday's round-up\r\nThe Northamptonshire batting van arrived at the crease only to be met with banana skins, buttered bats and a desire to get back to the pavilion. A final total of 56 all out was dis… [+2845 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "Surrey v Kent, Sussex v Glamorgan and more: county cricket – live",
    //     "description": "<ul><li>Updates on day four of the latest round of Championship games</li><li>Share your thoughts with Tanya via email or Twitter</li></ul>Rest in peace Brian Booth – Australian cricket captain and Olympic hockey player . “If a prize were offered for fair pla…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/21/surrey-v-kent-sussex-v-glamorgan-and-more-county-cricket-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/5ea0247d33d0a258aab0484f2035835638c01974/0_108_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=59793ad3b2474264a7192655f01fc419",
    //     "publishedAt": "2023-05-21T09:10:17Z",
    //     "content": "Saturday's round-up and Ollie Robinson watch\r\nGlorious centuries by Marnus Labuschagne and Kiran Carlson at Hove were overshadowed by worries over the fitness of Ollie Robinson. The England player bo… [+4688 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "PA Media",
    //     "title": "Yorkshire to learn punishment next week in Azeem Rafiq racism scandal",
    //     "description": "<ul><li>Club accepted amended charges of bringing game into disrepute</li><li>Punishments could range from fine to points deductions</li></ul>Yorkshire are expected to discover next week what punitive measures will be taken against them after accepting four a…",
    //     "url": "https://www.theguardian.com/sport/2023/apr/25/yorkshire-to-learn-punishment-next-week-in-azeem-rafiq-racism-scandal",
    //     "urlToImage": "https://i.guim.co.uk/img/media/84df5abcd5d8e6d9ee22ca4b0eb202ef6c87448f/0_94_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5cd62b40696c3247bbdc018d159e7eb0",
    //     "publishedAt": "2023-04-25T19:15:37Z",
    //     "content": "Yorkshire are expected to discover next week what punitive measures will be taken against them after accepting four amended charges of bringing the game into disrepute in the Azeem Rafiq racism scand… [+1328 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Middlesex v Kent, Warwickshire v Surrey, and more – live",
    //     "description": "<ul><li>Updates on day two of the latest round in the Championship</li><li>Sign up for The Spin | And mail Tanya, tweet her or post BTL</li></ul>Some murmuring this morning about the fate of everyone*s favourite competition.not everyone Continue reading...",
    //     "url": "https://www.theguardian.com/sport/live/2023/apr/28/county-cricket-middlesex-v-kent-warwickshire-v-surrey-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/c2827bdd9bc3cae43663b764bd38e585df017ddd/214_0_4528_2719/master/4528.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=577d5b8022a9f9b740f8b36b35d5342d",
    //     "publishedAt": "2023-04-28T09:38:40Z",
    //     "content": "Inspection at 11am at Bristol\r\nAnd the rain, and its after effects, continues t0 fall on Gloucestershire.\r\nThe Hundred\r\nSome murmuring this morning about the fate of everyone*s favourite competition.… [+2716 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Gary Naylor",
    //     "title": "County cricket talking points: Surrey have squad and swagger to retain title",
    //     "description": "It was a good week for the London counties in Division One, while Durham opened up a gap at the top of Division TwoBy Gary Naylor for the 99.94 Cricket BlogReigning champions Surrey opened a seven-point gap at the top of Division One, swatting aside their pre…",
    //     "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/may/01/county-cricket-surrey-title-london-division-one-durham",
    //     "urlToImage": "https://i.guim.co.uk/img/media/02108ae6231844d858e3da9d2de944f4f3d2b302/0_116_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cd2420800511691d0542ddd39d83a5bf",
    //     "publishedAt": "2023-05-01T12:35:38Z",
    //     "content": "Ball one: Smith forging a dynasty at the Oval?\r\nReigning champions Surrey opened a seven-point gap at the top of Division One, swatting aside their predecessors, Warwickshire, inside three days at Ed… [+5525 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred",
    //     "title": "County cricket: Lancashire v Somerset, Surrey v Middlesex, and more – live",
    //     "description": "<ul><li>Latest updates from around the grounds on day two</li><li>Get in touch: email Tanya, tweet or comment BTL</li></ul>A downpour of wickets, 66 in all, on another damp County Championship Thursday. Kent suffered the biggest malfunction, all out for 95 af…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/12/county-cricket-lancashire-v-somerset-surrey-v-middlesex-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/252e0ee7f7186b4b624fa3baeae6f7c9f875f0ee/0_400_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=1ce280c41788af25c98ebaa4fb13d2bb",
    //     "publishedAt": "2023-05-12T09:28:15Z",
    //     "content": "It\\s cold and cloudy at Grace Road and the floodlights are on. Lets see what Steve Smith can do with that! Oh, and Mr a hundred percent conversion rate Pujara. Ali points out that Sussex are without … [+3072 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Gary Naylor",
    //     "title": "County cricket: Hampshire bounce back and go top of Division One",
    //     "description": "Hampshire maul Northamptonshire, Middlesex pick up their first win and Lancashire draw three in a rowBy Gary Naylor for the 99.94 Cricket BlogHampshire bounced back from last week’s mauling at the hands of Surrey to hand out a mauling of their own to Northamp…",
    //     "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/apr/24/county-cricket-hampshire-northamptonshire-middlesex-lancashire-division-one",
    //     "urlToImage": "https://i.guim.co.uk/img/media/9c30d2e2e12e71522eeff4b90f075152fd5e9e6c/0_103_2783_1669/master/2783.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5d42a783205386d75475cba731cb86c1",
    //     "publishedAt": "2023-04-24T14:54:02Z",
    //     "content": "Ball one: Fuller tops up Hampshires bowling resources\r\nHampshire bounced back from last weeks mauling at the hands of Surrey to hand out a mauling of their own to Northamptonshire at Wantage Road. Th… [+7801 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred at Headingley",
    //     "title": "County cricket: Worcestershire v Sussex, Yorkshire v Glamorgan and more – live",
    //     "description": "<ul><li>Updates from day one of the latest round in the Championship</li><li>Get in touch: contact Tanya by email, Twitter or comment BTL</li></ul>Three players will refuse to pay fines:Jonny played one game for Yorkshire seconds as part of his comeback, biff…",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/04/county-cricket-worcestershire-v-sussex-yorkshire-v-glamorgan-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/8f174fb6da5763feae47f607d11c741a67358903/0_142_2868_1721/master/2868.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ef13fadca833e32a44ddf65668ef4727",
    //     "publishedAt": "2023-05-04T09:36:29Z",
    //     "content": "&lt;p lang=\\\"en\\\" dir=\\\"ltr\\\"&gt;Steve Smith is handed his Sussex cap at New Road &lt;a href=\\\"https://t.co/7fMpnhw0sx\\\"&gt;pic.twitter.com/7fMpnhw0sx&lt;/a&gt;&lt;/p&gt;&amp;mdash; Ali Martin (@Cric… [+19215 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Gary Naylor",
    //     "title": "County cricket: Warwickshire lay Hampshire bare to keep pace at top",
    //     "description": "The Bears are roaring again in the top flight, while Che Pujara, Steve Smith and Azhar Ali add plenty of class to Division TwoBy Gary Naylor for the 99.94 Cricket BlogLast season, fearful of the art, or rather, the discipline, of batting out a draw being lost…",
    //     "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/may/08/county-cricket-warwickshire-surrey-division-steve-smith",
    //     "urlToImage": "https://i.guim.co.uk/img/media/4eb156156d9d3fcf3c944731f6b718786402be34/0_85_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9f83803e81e14b4a50f7d113623bf97d",
    //     "publishedAt": "2023-05-08T12:26:52Z",
    //     "content": "Ball one: Draws a big draw for selectors and fans?\r\nLast season, fearful of the art, or rather, the discipline, of batting out a draw being lost, the Championship increased its points value to eight.… [+5062 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tanya Aldred at Headingley",
    //     "title": "County cricket: Yorkshire v Glamorgan, Essex v Surrey and more – live",
    //     "description": "<ul><li>Updates from day three of the latest round in the Championship</li><li>Get in touch: contact Tanya by email, Twitter or comment BTL</li></ul> We just had the national anthem. Didn’t see many lips moving.DIVISION ONE Continue reading...",
    //     "url": "https://www.theguardian.com/sport/live/2023/may/06/county-cricket-yorkshire-v-glamorgan-essex-v-surrey-and-more-live",
    //     "urlToImage": "https://i.guim.co.uk/img/media/a01d8df334125796fb5dd902bcae1acacf9e7d9a/118_0_3245_1947/master/3245.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f84f7681e5c68d5ebc0139f401acdd46",
    //     "publishedAt": "2023-05-06T10:04:34Z",
    //     "content": "\"I'd rather stick pins in my eyes\"\r\nI doorstepped some spectators waiting outside the pavilion. There were mixed views about the coronation.\r\nColin Hicks and Malcolm Davies had come from Cardiff to f… [+1121 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Gary Naylor",
    //     "title": "County cricket talking points: Surrey and Warwickshire go clear of the pack",
    //     "description": "Kent frustrated Hampshire and a Sunday morning shootout went Durham’s way to pile on the misery for YorkshireBy Gary Naylor for the 99.94 Cricket BlogThe Trans-Thames derby illustrated why the southern county can expect another tussle for the pennant come Sep…",
    //     "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/may/15/county-cricket-talking-points-surrey-warwickshire-go-clear-kent-hampshire-yorkshire",
    //     "urlToImage": "https://i.guim.co.uk/img/media/e1f1c392cbd5b64649a612293f1bac0eeb8c6bd9/0_110_4517_2712/master/4517.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=68b07f5f01a42c298a9c15b6781a69f0",
    //     "publishedAt": "2023-05-15T12:13:55Z",
    //     "content": "Ball one: Middlesex feel heat from Burns and Smith\r\nThe Trans-Thames derby illustrated why the southern county can expect another tussle for the pennant come September and why the northern side face … [+5493 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Tim de Lisle",
    //     "title": "IPL 2023: the state of play, stars so far and how England players are faring",
    //     "description": "The knockouts arrive this week after a tournament dominated so far by Gujarat Titans and a host of leggiesNot much, just the first 68 games. The IPL is a curious beast: the biggest tournament in cricket, the richest in any ballgame, the greatest show in Asia …",
    //     "url": "https://www.theguardian.com/sport/2023/may/20/ipl-2023-the-state-of-play-stars-so-far-and-how-england-players-are-faring",
    //     "urlToImage": "https://i.guim.co.uk/img/media/e41e8574812416a71195c76603e0ba6e2e69cd53/0_61_3400_2040/master/3400.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=0e50fb578b4441d1710c451cf1b2eb32",
    //     "publishedAt": "2023-05-20T17:00:03Z",
    //     "content": "What have I missed?\r\nNot much, just the first 68 games. The IPL is a curious beast: the biggest tournament in cricket, the richest in any ballgame, the greatest show in Asia and yet eminently missabl… [+10361 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Simon Burnton",
    //     "title": "IPL and other T20 franchise leagues ‘pose threat to ECB’s financial future’",
    //     "description": "<ul><li>Annual accounts warn of ‘pressure on player wage inflation’</li><li>ECB’s spending on salaries has risen to £57.4m in 2022-23</li></ul>The ECB has warned of the potentially cataclysmic impact of the rising power of overseas franchises such as the IPL …",
    //     "url": "https://www.theguardian.com/sport/2023/may/10/ipl-and-other-t20-franchise-leagues-pose-threat-to-ecb-financial-future-cricket",
    //     "urlToImage": "https://i.guim.co.uk/img/media/9a69092bdc1ec95eb17405750f97ddc7848e6b7c/0_295_4426_2655/master/4426.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=65e7780cd38223d5d6b1a256f07a00dd",
    //     "publishedAt": "2023-05-10T17:48:17Z",
    //     "content": "The ECB has warned of the potentially cataclysmic impact of the rising power of overseas franchises such as the IPL while the appeal of Test cricket declines.\r\nEnglish crickets governing body said th… [+8057 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Sean Ingle",
    //     "title": "ECB seeking fine and eight-week ban for Gary Ballance over racism case",
    //     "description": "<ul><li>Former Yorkshire cricketer retired from playing last month</li><li>£8,000 penalty sought for racist comments made to Rafiq</li></ul>The former England batsman Gary Ballance should face an eight-week ban for his part in the Yorkshire racism scandal eve…",
    //     "url": "https://www.theguardian.com/sport/2023/may/03/ecb-seeking-fine-and-eight-week-ban-for-gary-ballance-over-racism-case",
    //     "urlToImage": "https://i.guim.co.uk/img/media/356b6cd74832eb647135070492131238de76c2c0/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=56153a3ee26cff15dc857eb664d89348",
    //     "publishedAt": "2023-05-03T13:08:58Z",
    //     "content": "The former England batsman Gary Ballance should face an eight-week ban for his part in the Yorkshire racism scandal even though he retired last month, the England and Wales Cricket Board has told the… [+7480 chars]"
    // },
    // {
    //     "source": {
    //         "id": "engadget",
    //         "name": "Engadget"
    //     },
    //     "author": "Andrew Tarantola",
    //     "title": "Anthropic explains how its Constitutional AI girds Claude against adversarial inputs",
    //     "description": "It is not hard — at all — to trick today’s chatbots into discussing taboo topics, regurgitating bigoted content and spreading misinformation. That’s why AI pioneer Anthropic has imbued its generative AI, Claude, with a mix of 10 secret principles of fairness,…",
    //     "url": "https://www.engadget.com/anthropic-explains-how-its-constitutional-ai-girds-claude-against-adversarial-inputs-160008153.html",
    //     "urlToImage": "https://s.yimg.com/uu/api/res/1.2/NRHlF4iVYGhKpXzBJDTcpA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/22b1b0b0-eb68-11ed-8fc4-2e5d26d89485.cf.jpg",
    //     "publishedAt": "2023-05-09T16:00:08Z",
    //     "content": "It is not hard at all to trick todays chatbots into discussing taboo topics, regurgitating bigoted content and spreading misinformation. Thats why AI pioneer Anthropic has imbued its generative AI, C… [+3221 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "https://www.facebook.com/bbcnews",
    //     "title": "Arjun Tendulkar: The burden of being Sachin Tendulkar's son",
    //     "description": "Arjun Tendulkar, who made his IPL debut recently, has been drawing unfair comparisons with his father.",
    //     "url": "https://www.bbc.co.uk/news/world-asia-india-65446466",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1810F/production/_129557589_gettyimages-1251949071-594x594.jpg",
    //     "publishedAt": "2023-05-02T02:34:00Z",
    //     "content": "After Arjun Tendulkar made a sedate Indian Premier League (IPL) debut last month, many cricket fans have compared him with his father and cricket legend, Sachin Tendulkar, and cast doubts on his skil… [+5210 chars]"
    // },
    // {
    //     "source": {
    //         "id": null,
    //         "name": "The Guardian"
    //     },
    //     "author": "Hannah Ellis-Petersen and Elena Morresi",
    //     "title": "Imran Khan: who is the man dividing Pakistan? – video explainer",
    //     "description": "The arrest of the former prime minister of Pakistan Imran Khan on charges of corruption triggered nationwide protests, with his supporters being locked in deadly clashes with the army on the streets.The Guardian's South Asia correspondent, Hannah Ellis-Peters…",
    //     "url": "https://www.theguardian.com/world/video/2023/may/13/imran-khan-who-is-the-man-dividing-pakistan-video-explainer",
    //     "urlToImage": "https://i.guim.co.uk/img/media/322ffc07723ef7b927939683fd64d806e1114ac5/60_0_1800_1080/master/1800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ef7b0df6c29933b8b318160a393f579f",
    //     "publishedAt": "2023-05-13T15:39:38Z",
    //     "content": "The arrest of the former prime minister of Pakistan Imran Khan on charges of corruption triggered nationwide protests, with his supporters being locked in deadly clashes with the army on the streets.… [+195 chars]"
    // }]

    static defaultProps={
        Country :'in',
        pageSize:2,
        Category:'general'
    }
    static propTypes={
        Country: PropTypes.string,
        pageSize: PropTypes.number,
        Category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            Article: [],
            loading: false,
            page: 1,

        }
    }
    async updateNews(){
         //let url = `https://newsapi.org/v2/everything?q=india&from=2023-04-25&sortBy=publishedAt&apiKey=559502a359ff4ae9bab6a3c9608d66c0&page=1&pagesize=
        // ${this.props.pageSize}`;
        let url1=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=d2d79cc94e834277a2f5607c0f9f31ea&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url1);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            Article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    HandlePrevClick = async () => {
        this.updateNews();
        this.setState({
            page: this.state.page - 1,
        })

    }
    HandleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            //let url = `https://newsapi.org/v2/everything?q=india&from=2023-04-25&sortBy=publishedAt&apiKey=559502a359ff4ae9bab6a3c9608d66c0&page=${this.state.page + 1}${this.props.pageSize}`;
            let url1=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=d2d79cc94e834277a2f5607c0f9f31ea&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url1);
            let parsedData = await data.json()

            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                Article: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3 '>
                <h1 className='text-center headline'style={{margin:'90px'}}>MovieNews - Top  Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className="row ">
                    {!this.state.loading && this.state.Article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <News title={element.title?element.title:""} description={element.description?element.description:""} 
                            imgUrl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}

                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}> Next  &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsItems
