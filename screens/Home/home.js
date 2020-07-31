import weddingData from './weddingData'
import partyData from './partyData'
import prizeDistrubutionData from './prizeDistrubutionData'
import receptionData from './receptionData'
const homeData = [
  {
    id: 1,
    title: 'Party',
    bg_img : require('../../assets/images/home_img/party1.jpeg'),
    eventDetails : partyData
  },
  {
    id: 2,
    title: 'Birthday Party',
    bg_img : require('../../assets/images/home_img/b2.jpg'),
    eventDetails : partyData
  },
  {
    id: 3,
    title: 'Wedding Hall',
    bg_img : require('../../assets/images/home_img/w2.jpg'),
    eventDetails : weddingData

  },
  {
    id: 4,
    title: 'Reception Hall',
    bg_img : require('../../assets/images/home_img/w1.jpg'),
    eventDetails : receptionData
  },
  {
    id: 5,
    title: 'Baby Shower',
    bg_img : require('../../assets/images/home_img/ba2.jpg'),
    eventDetails : partyData
  },
  {
    id: 6,
    title: 'Price Distribution',
    bg_img : require('../../assets/images/home_img/p4.jpg'),
    eventDetails : prizeDistrubutionData
  },
  {
    id: 7,
    title: 'Event',
    bg_img : require('../../assets/images/home_img/party2.jpg'),
    eventDetails : partyData
  },
  {
    id: 8,
    title: 'Price Distribution',
    bg_img : require('../../assets/images/home_img/r1.jpg'),
    eventDetails : partyData
  },
];
export default homeData;