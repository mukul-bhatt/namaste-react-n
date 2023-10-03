import React from "react";
import ReactDOM from "react-dom/client";
import companyLogo from "./app-logo.png";

const AppLayout = () => (
  <div className="app">
    <Header></Header>
    <Body></Body>
  </div>
);

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <img className="nav-logo" src={companyLogo} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="main-search-bar">Search</div>
      <div className="main-restaurant-container">

        {obj.map((res) => <RestaurantCard resData={res.info} key={res.info.id} />)}
        </div>
      
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId, costForTwo } =
    props.resData;

  return (
    <div className="main-restaurant-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="image"
      />

      <div>
        <h3>{name}</h3>
        <p>rating: {avgRating}⭐️</p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

const obj = [
  {
  "info": {
  "id": "24179",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "iexgl5llcr6awm8w0dec",
  "locality": "Laxmi Nagar",
  "areaName": "Krishna Nagar",
  "costForTwo": "₹400 for two",
  "cuisines": ["something"],
  "avgRating": 4.1,
  "parentId": "2456",
  "avgRatingString": "4.1",
  "totalRatingsString": "5K+",
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/dominos-pizza-laxmi-nagar-krishna-nagar-delhi-24179",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "89841",
  "name": "KFC",
  "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
  "locality": "Swami Dayanand Marg",
  "areaName": "Krishna Nagar",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Biryani",
  "American",
  "Snacks",
  "Fast Food"
  ],
  "avgRating": 4,
  "feeDetails": {
  "restaurantId": "89841",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 4300
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 4300
  },
  "parentId": "547",
  "avgRatingString": "4.0",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 19,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "19 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-10-03 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "loyaltyDiscoverPresentationInfo": {
  "logoCtx": {
  "text": "BENEFITS",
  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  },
  "freedelMessage": "FREE DELIVERY"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/kfc-swami-dayanand-marg-krishna-nagar-delhi-89841",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "79716",
  "name": "Burger King",
  "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  "locality": "Aditya Mega Mall",
  "areaName": "Shahdara",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Burgers",
  "American"
  ],
  "avgRating": 4.1,
  "feeDetails": {
  "restaurantId": "79716",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 4200
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 4200
  },
  "parentId": "166",
  "avgRatingString": "4.1",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "23 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-10-04 04:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "loyaltyDiscoverPresentationInfo": {
  "logoCtx": {
  "text": "BENEFITS",
  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  },
  "freedelMessage": "FREE DELIVERY"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/burger-king-aditya-mega-mall-shahdara-delhi-79716",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "253988",
  "name": "McDonald's",
  "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
  "locality": "Fun City Mall",
  "areaName": "Karkardooma",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "American"
  ],
  "avgRating": 4.3,
  "feeDetails": {
  "restaurantId": "253988",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 4200
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 4200
  },
  "parentId": "630",
  "avgRatingString": "4.3",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "24 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-10-03 22:45:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "UPTO ₹40"
  },
  "loyaltyDiscoverPresentationInfo": {
  "logoCtx": {
  "text": "BENEFITS",
  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  },
  "freedelMessage": "FREE DELIVERY"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/mcdonalds-fun-city-mall-karkardooma-delhi-253988",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "538611",
  "name": "EatFit",
  "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
  "locality": "Vinod Nagar",
  "areaName": "Mayur Vihar Phase 2",
  "costForTwo": "₹270 for two",
  "cuisines": [
  "Chinese",
  "Healthy Food",
  "Tandoor",
  "Pizzas",
  "North Indian",
  "Thalis",
  "Biryani"
  ],
  "avgRating": 4.1,
  "feeDetails": {
  "restaurantId": "538611",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 6600
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 6600
  },
  "parentId": "76139",
  "avgRatingString": "4.1",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 32,
  "lastMileTravel": 7,
  "serviceability": "SERVICEABLE",
  "slaString": "32 mins",
  "lastMileTravelString": "7.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-10-03 23:45:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "loyaltyDiscoverPresentationInfo": {
  "logoCtx": {
  "text": "BENEFITS",
  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  },
  "freedelMessage": "FREE DELIVERY"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/eatfit-vinod-nagar-mayur-vihar-phase-2-delhi-538611",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "53747",
  "name": "Pizza Hut",
  "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  "locality": "Agarwal Fun City Metro Mall",
  "areaName": "Shahdara",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Pizzas"
  ],
  "avgRating": 3.7,
  "feeDetails": {
  "restaurantId": "53747",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 4200
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 4200
  },
  "parentId": "721",
  "avgRatingString": "3.7",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 27,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "27 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-10-04 03:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹100"
  },
  "loyaltyDiscoverPresentationInfo": {
  "logoCtx": {
  "text": "BENEFITS",
  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  },
  "freedelMessage": "FREE DELIVERY"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/pizza-hut-agarwal-fun-city-metro-mall-shahdara-delhi-53747",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "350774",
  "name": "Subway",
  "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
  "locality": "Satanam Road",
  "areaName": "Krishna Nagar",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Fast Food",
  "Salads",
  "Snacks",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 3.9,
  "feeDetails": {
  "restaurantId": "350774",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 3600
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 3600
  },
  "parentId": "2",
  "avgRatingString": "3.9",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 18,
  "lastMileTravel": 1.3,
  "serviceability": "SERVICEABLE",
  "slaString": "18 mins",
  "lastMileTravelString": "1.3 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-10-03 23:45:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹100"
  },
  "loyaltyDiscoverPresentationInfo": {
  "logoCtx": {
  "text": "BENEFITS",
  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  },
  "freedelMessage": "FREE DELIVERY"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/subway-satanam-road-krishna-nagar-delhi-350774",
  "type": "WEBLINK"
  }
  }
]
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
