import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { axiosFhoto } from '../../../services/axiosFhotoService';
import { unsflashParams } from '../../../services/unsflashParams';
import SearchIcon from '@mui/icons-material/Search';
import '../../../css/photos.css'
import boxed from '../../../imgs/boxed.jpg'
import chair from '../../../imgs/chair.jpg'
import flowers from '../../../imgs/flowers.jpg'
import forest from '../../../imgs/forest.jpg'
import lake from '../../../imgs/lake.jpg'
import landscapes from '../../../imgs/landscapes.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


/**
 *  url of unsflash : https://api.unsplash.com/photos/?client_id=
 */

const imgs = [
    {
        "id": "vgWyuNwjEa4",
        "slug": "vgWyuNwjEa4",
        "created_at": "2023-06-07T17:41:05Z",
        "updated_at": "2023-07-21T20:39:23Z",
        "promoted_at": "2023-07-21T17:48:01Z",
        "width": 3448,
        "height": 5168,
        "color": "#0c2626",
        "blur_hash": "LHD9YQ~VOrnO~p?bofM{9]-;rqIV",
        "description": null,
        "alt_description": "a man and a woman kissing each other",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1686159504626-ed7ea063105f?ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1686159504626-ed7ea063105f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1686159504626-ed7ea063105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1686159504626-ed7ea063105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1686159504626-ed7ea063105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1686159504626-ed7ea063105f"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/vgWyuNwjEa4",
            "html": "https://unsplash.com/photos/vgWyuNwjEa4",
            "download": "https://unsplash.com/photos/vgWyuNwjEa4/download?ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/vgWyuNwjEa4/download?ixid=M3w0NzgyOTV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 7,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
            "id": "xq3D2LlqiUk",
            "updated_at": "2023-07-21T20:15:41Z",
            "username": "sirsimo",
            "name": "Sir. Simo",
            "first_name": "Sir.",
            "last_name": "Simo",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "25yo Italian Artist\r\nPhotographer | Videomaker | Sony user",
            "location": "Italy",
            "links": {
                "self": "https://api.unsplash.com/users/sirsimo",
                "html": "https://unsplash.com/@sirsimo",
                "photos": "https://api.unsplash.com/users/sirsimo/photos",
                "likes": "https://api.unsplash.com/users/sirsimo/likes",
                "portfolio": "https://api.unsplash.com/users/sirsimo/portfolio",
                "following": "https://api.unsplash.com/users/sirsimo/following",
                "followers": "https://api.unsplash.com/users/sirsimo/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1669734842129-bc65bfaafaf0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1669734842129-bc65bfaafaf0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1669734842129-bc65bfaafaf0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "sir.simo",
            "total_collections": 1,
            "total_likes": 38,
            "total_photos": 94,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "sir.simo",
                "portfolio_url": null,
                "twitter_username": null,
                "paypal_email": null
            }
        }
    },
    {
        "id": "QUFDUFUJ5CE",
        "slug": "a-very-tall-city-with-a-lot-of-tall-buildings-QUFDUFUJ5CE",
        "created_at": "2023-07-19T14:23:09Z",
        "updated_at": "2023-07-21T19:30:04Z",
        "promoted_at": "2023-07-21T17:40:01Z",
        "width": 4000,
        "height": 6000,
        "color": "#8ca6a6",
        "blur_hash": "LYBNp6j[WBkC?^kCWBj[kBaej[f6",
        "description": null,
        "alt_description": "a very tall city with a lot of tall buildings",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1689776552964-475fd40e0d8f?ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1689776552964-475fd40e0d8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1689776552964-475fd40e0d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1689776552964-475fd40e0d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1689776552964-475fd40e0d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689776552964-475fd40e0d8f"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/a-very-tall-city-with-a-lot-of-tall-buildings-QUFDUFUJ5CE",
            "html": "https://unsplash.com/photos/a-very-tall-city-with-a-lot-of-tall-buildings-QUFDUFUJ5CE",
            "download": "https://unsplash.com/photos/QUFDUFUJ5CE/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/QUFDUFUJ5CE/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 24,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
            "id": "1qs9L10Wib8",
            "updated_at": "2023-07-21T18:39:04Z",
            "username": "kevin_w_",
            "name": "Kevin Wang",
            "first_name": "Kevin",
            "last_name": "Wang",
            "twitter_username": "yeahbutumimean",
            "portfolio_url": "https://www.paypal.me/kw829",
            "bio": "A uni student in Taiwan",
            "location": "Taipei, Taiwan",
            "links": {
                "self": "https://api.unsplash.com/users/kevin_w_",
                "html": "https://unsplash.com/@kevin_w_",
                "photos": "https://api.unsplash.com/users/kevin_w_/photos",
                "likes": "https://api.unsplash.com/users/kevin_w_/likes",
                "portfolio": "https://api.unsplash.com/users/kevin_w_/portfolio",
                "following": "https://api.unsplash.com/users/kevin_w_/following",
                "followers": "https://api.unsplash.com/users/kevin_w_/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1601206918608-f38b995faee6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1601206918608-f38b995faee6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1601206918608-f38b995faee6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "__kw__0",
            "total_collections": 0,
            "total_likes": 116,
            "total_photos": 457,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "__kw__0",
                "portfolio_url": "https://www.paypal.me/kw829",
                "twitter_username": "yeahbutumimean",
                "paypal_email": null
            }
        }
    },
    {
        "id": "BGlgLEQ39Ig",
        "slug": "a-reindeer-with-horns-standing-in-the-snow-BGlgLEQ39Ig",
        "created_at": "2023-07-20T22:26:17Z",
        "updated_at": "2023-07-21T17:24:01Z",
        "promoted_at": "2023-07-21T17:24:01Z",
        "width": 4802,
        "height": 7295,
        "color": "#c0c0d9",
        "blur_hash": "LZHozfayogj]4TayRjayf+j[WBj[",
        "description": null,
        "alt_description": "a reindeer with horns standing in the snow",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1689891750093-167fe3256c00?ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1689891750093-167fe3256c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1689891750093-167fe3256c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1689891750093-167fe3256c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1689891750093-167fe3256c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689891750093-167fe3256c00"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/a-reindeer-with-horns-standing-in-the-snow-BGlgLEQ39Ig",
            "html": "https://unsplash.com/photos/a-reindeer-with-horns-standing-in-the-snow-BGlgLEQ39Ig",
            "download": "https://unsplash.com/photos/BGlgLEQ39Ig/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/BGlgLEQ39Ig/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 6,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
            "id": "BUsQPcrYrLY",
            "updated_at": "2023-07-21T17:24:55Z",
            "username": "gum_meee",
            "name": "Michael Heuser",
            "first_name": "Michael",
            "last_name": "Heuser",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": null,
            "location": "Germany",
            "links": {
                "self": "https://api.unsplash.com/users/gum_meee",
                "html": "https://unsplash.com/@gum_meee",
                "photos": "https://api.unsplash.com/users/gum_meee/photos",
                "likes": "https://api.unsplash.com/users/gum_meee/likes",
                "portfolio": "https://api.unsplash.com/users/gum_meee/portfolio",
                "following": "https://api.unsplash.com/users/gum_meee/following",
                "followers": "https://api.unsplash.com/users/gum_meee/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1495800438-4c5f51dda908.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-fb-1495800438-4c5f51dda908.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-fb-1495800438-4c5f51dda908.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "gum_meee",
            "total_collections": 3,
            "total_likes": 54,
            "total_photos": 79,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "gum_meee",
                "portfolio_url": null,
                "twitter_username": null,
                "paypal_email": null
            }
        }
    },
    {
        "id": "Nowd8MgUK8A",
        "slug": "Nowd8MgUK8A",
        "created_at": "2023-04-28T12:46:16Z",
        "updated_at": "2023-07-21T15:40:36Z",
        "promoted_at": "2023-06-02T12:16:01Z",
        "width": 9504,
        "height": 6336,
        "color": "#262626",
        "blur_hash": "LUB:vxNGRjt7_NWCWBofpJxakCR*",
        "description": "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM",
        "alt_description": "a group of people sitting on top of a sandy beach",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685797507-d44d838b0ac7"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/Nowd8MgUK8A",
            "html": "https://unsplash.com/photos/Nowd8MgUK8A",
            "download": "https://unsplash.com/photos/Nowd8MgUK8A/download?ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/Nowd8MgUK8A/download?ixid=M3w0NzgyOTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 80,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": {
            "impression_urls": [
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515708&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515911&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
            ],
            "tagline": "Made to Change",
            "tagline_url": "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
            "sponsor": {
                "id": "mYizSrdJkkU",
                "updated_at": "2023-07-21T18:41:15Z",
                "username": "neom",
                "name": "NEOM",
                "first_name": "NEOM",
                "last_name": null,
                "twitter_username": "neom",
                "portfolio_url": "http://www.neom.com",
                "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
                "location": "NEOM, Saudi Arabia",
                "links": {
                    "self": "https://api.unsplash.com/users/neom",
                    "html": "https://unsplash.com/@neom",
                    "photos": "https://api.unsplash.com/users/neom/photos",
                    "likes": "https://api.unsplash.com/users/neom/likes",
                    "portfolio": "https://api.unsplash.com/users/neom/portfolio",
                    "following": "https://api.unsplash.com/users/neom/following",
                    "followers": "https://api.unsplash.com/users/neom/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "discoverneom",
                "total_collections": 7,
                "total_likes": 0,
                "total_photos": 202,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "discoverneom",
                    "portfolio_url": "http://www.neom.com",
                    "twitter_username": "neom",
                    "paypal_email": null
                }
            }
        },
        "topic_submissions": {},
        "user": {
            "id": "mYizSrdJkkU",
            "updated_at": "2023-07-21T18:41:15Z",
            "username": "neom",
            "name": "NEOM",
            "first_name": "NEOM",
            "last_name": null,
            "twitter_username": "neom",
            "portfolio_url": "http://www.neom.com",
            "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
            "location": "NEOM, Saudi Arabia",
            "links": {
                "self": "https://api.unsplash.com/users/neom",
                "html": "https://unsplash.com/@neom",
                "photos": "https://api.unsplash.com/users/neom/photos",
                "likes": "https://api.unsplash.com/users/neom/likes",
                "portfolio": "https://api.unsplash.com/users/neom/portfolio",
                "following": "https://api.unsplash.com/users/neom/following",
                "followers": "https://api.unsplash.com/users/neom/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "discoverneom",
            "total_collections": 7,
            "total_likes": 0,
            "total_photos": 202,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
                "instagram_username": "discoverneom",
                "portfolio_url": "http://www.neom.com",
                "twitter_username": "neom",
                "paypal_email": null
            }
        }
    },
    {
        "id": "Ji78jjuRURc",
        "slug": "a-tall-tower-with-a-sky-background-Ji78jjuRURc",
        "created_at": "2023-07-19T20:43:22Z",
        "updated_at": "2023-07-21T17:16:02Z",
        "promoted_at": "2023-07-21T17:16:02Z",
        "width": 3148,
        "height": 3936,
        "color": "#8c8c8c",
        "blur_hash": "LJCZ*8R*IUt7~q9YNGxuoLM{WBof",
        "description": null,
        "alt_description": "a tall tower with a sky background",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1689795256983-2c32abfce175?ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1689795256983-2c32abfce175?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1689795256983-2c32abfce175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1689795256983-2c32abfce175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1689795256983-2c32abfce175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689795256983-2c32abfce175"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/a-tall-tower-with-a-sky-background-Ji78jjuRURc",
            "html": "https://unsplash.com/photos/a-tall-tower-with-a-sky-background-Ji78jjuRURc",
            "download": "https://unsplash.com/photos/Ji78jjuRURc/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/Ji78jjuRURc/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 13,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
            "id": "E-w4F88qRJY",
            "updated_at": "2023-07-21T17:19:53Z",
            "username": "ilypnytskyi",
            "name": "Igor Lypnytskyi 🇺🇦",
            "first_name": "Igor",
            "last_name": "Lypnytskyi 🇺🇦",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "Hi, I'm a photographer from Ukraine!\r\nIt's a pleasure for me if you use my photos! If you would like to be a part of my community, follow or donate! All donations I'll send to Ukrainians who need support in these heavy times! Thanks all of you💙💛",
            "location": "Ukraine",
            "links": {
                "self": "https://api.unsplash.com/users/ilypnytskyi",
                "html": "https://unsplash.com/@ilypnytskyi",
                "photos": "https://api.unsplash.com/users/ilypnytskyi/photos",
                "likes": "https://api.unsplash.com/users/ilypnytskyi/likes",
                "portfolio": "https://api.unsplash.com/users/ilypnytskyi/portfolio",
                "following": "https://api.unsplash.com/users/ilypnytskyi/following",
                "followers": "https://api.unsplash.com/users/ilypnytskyi/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1604057635565-6d79cfa085adimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1604057635565-6d79cfa085adimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1604057635565-6d79cfa085adimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "ilypnytskyi",
            "total_collections": 0,
            "total_likes": 307,
            "total_photos": 621,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "ilypnytskyi",
                "portfolio_url": null,
                "twitter_username": null,
                "paypal_email": null
            }
        }
    },
    {
        "id": "KLqiucv5mnk",
        "slug": "KLqiucv5mnk",
        "created_at": "2023-05-20T22:26:46Z",
        "updated_at": "2023-07-21T17:08:01Z",
        "promoted_at": "2023-07-21T17:08:01Z",
        "width": 4958,
        "height": 7434,
        "color": "#a6a6a6",
        "blur_hash": "L7KK[?-:xat7?IM{WBt7~qM{t7s:",
        "description": null,
        "alt_description": "a man riding a wave on top of a surfboard",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1684620862329-7682065bd65f?ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1684620862329-7682065bd65f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1684620862329-7682065bd65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1684620862329-7682065bd65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1684620862329-7682065bd65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1684620862329-7682065bd65f"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/KLqiucv5mnk",
            "html": "https://unsplash.com/photos/KLqiucv5mnk",
            "download": "https://unsplash.com/photos/KLqiucv5mnk/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/KLqiucv5mnk/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 28,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {},
        "user": {
            "id": "xq3D2LlqiUk",
            "updated_at": "2023-07-21T20:15:41Z",
            "username": "sirsimo",
            "name": "Sir. Simo",
            "first_name": "Sir.",
            "last_name": "Simo",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "25yo Italian Artist\r\nPhotographer | Videomaker | Sony user",
            "location": "Italy",
            "links": {
                "self": "https://api.unsplash.com/users/sirsimo",
                "html": "https://unsplash.com/@sirsimo",
                "photos": "https://api.unsplash.com/users/sirsimo/photos",
                "likes": "https://api.unsplash.com/users/sirsimo/likes",
                "portfolio": "https://api.unsplash.com/users/sirsimo/portfolio",
                "following": "https://api.unsplash.com/users/sirsimo/following",
                "followers": "https://api.unsplash.com/users/sirsimo/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1669734842129-bc65bfaafaf0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1669734842129-bc65bfaafaf0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1669734842129-bc65bfaafaf0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "sir.simo",
            "total_collections": 1,
            "total_likes": 38,
            "total_photos": 94,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "sir.simo",
                "portfolio_url": null,
                "twitter_username": null,
                "paypal_email": null
            }
        }
    },
    {
        "id": "QBEcnNgVVEU",
        "slug": "QBEcnNgVVEU",
        "created_at": "2018-08-13T21:33:57Z",
        "updated_at": "2023-07-21T21:04:13Z",
        "promoted_at": "2023-07-21T16:56:01Z",
        "width": 4000,
        "height": 6000,
        "color": "#f3f3f3",
        "blur_hash": "LjMZ]:.88^D%~qE1M{xaD%9Fozoz",
        "description": null,
        "alt_description": "brown concrete building",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1534196012057-d9a0c7cfa5ae?ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1534196012057-d9a0c7cfa5ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1534196012057-d9a0c7cfa5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1534196012057-d9a0c7cfa5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1534196012057-d9a0c7cfa5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1534196012057-d9a0c7cfa5ae"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/QBEcnNgVVEU",
            "html": "https://unsplash.com/photos/QBEcnNgVVEU",
            "download": "https://unsplash.com/photos/QBEcnNgVVEU/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw",
            "download_location": "https://api.unsplash.com/photos/QBEcnNgVVEU/download?ixid=M3w0NzgyOTV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTk3NDU5NXw"
        },
        "likes": 47,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {
            "architecture-interior": {
                "status": "approved",
                "approved_on": "2023-07-20T14:48:18Z"
            }
        },
        "user": {
            "id": "L2qoih4M4AE",
            "updated_at": "2023-07-21T16:56:01Z",
            "username": "petefogden",
            "name": "Peter Fogden",
            "first_name": "Peter",
            "last_name": "Fogden",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "Just a teen with a camera. @petefogden",
            "location": "South Africa",
            "links": {
                "self": "https://api.unsplash.com/users/petefogden",
                "html": "https://unsplash.com/@petefogden",
                "photos": "https://api.unsplash.com/users/petefogden/photos",
                "likes": "https://api.unsplash.com/users/petefogden/likes",
                "portfolio": "https://api.unsplash.com/users/petefogden/portfolio",
                "following": "https://api.unsplash.com/users/petefogden/following",
                "followers": "https://api.unsplash.com/users/petefogden/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1470863193-26594853c231.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-fb-1470863193-26594853c231.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-fb-1470863193-26594853c231.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "petefogden",
            "total_collections": 0,
            "total_likes": 13,
            "total_photos": 42,
            "accepted_tos": false,
            "for_hire": false,
            "social": {
                "instagram_username": "petefogden",
                "portfolio_url": null,
                "twitter_username": null,
                "paypal_email": null
            }
        }
    },
    {
        "id": "Pd-bOA-MZQs",
        "slug": "Pd-bOA-MZQs",
        "created_at": "2019-04-17T22:14:34Z",
        "updated_at": "2023-07-21T16:48:02Z",
        "promoted_at": "2023-07-21T16:48:02Z",
        "width": 4668,
        "height": 7016,
        "color": "#a6a68c",
        "blur_hash": "LMEy9[01M{ofkqRjRjRjV@%MWBRj",
        "description": null,
        "alt_description": "man in black suit banging his head on wall",
        "breadcrumbs": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1555538995-7181cc10e079?ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1555538995-7181cc10e079?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1555538995-7181cc10e079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1555538995-7181cc10e079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1555538995-7181cc10e079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1555538995-7181cc10e079"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/Pd-bOA-MZQs",
            "html": "https://unsplash.com/photos/Pd-bOA-MZQs",
            "download": "https://unsplash.com/photos/Pd-bOA-MZQs/download?ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8",
            "download_location": "https://api.unsplash.com/photos/Pd-bOA-MZQs/download?ixid=M3w0NzgyOTV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODk5NzQ1OTV8"
        },
        "likes": 725,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {
            "street-photography": {
                "status": "approved",
                "approved_on": "2021-05-07T10:38:33Z"
            },
            "experimental": {
                "status": "approved",
                "approved_on": "2021-05-07T10:38:35Z"
            },
            "fashion-beauty": {
                "status": "approved",
                "approved_on": "2020-04-06T14:20:19Z"
            }
        },
        "user": {
            "id": "IoOvx5icwpk",
            "updated_at": "2023-07-21T19:08:48Z",
            "username": "danielmingookkim",
            "name": "Daniel Mingook Kim",
            "first_name": "Daniel Mingook",
            "last_name": "Kim",
            "twitter_username": null,
            "portfolio_url": "http://danielmingookkim.com",
            "bio": "Follow me on instagram for daily updates @danielmingookkim",
            "location": "Seattle, WA",
            "links": {
                "self": "https://api.unsplash.com/users/danielmingookkim",
                "html": "https://unsplash.com/@danielmingookkim",
                "photos": "https://api.unsplash.com/users/danielmingookkim/photos",
                "likes": "https://api.unsplash.com/users/danielmingookkim/likes",
                "portfolio": "https://api.unsplash.com/users/danielmingookkim/portfolio",
                "following": "https://api.unsplash.com/users/danielmingookkim/following",
                "followers": "https://api.unsplash.com/users/danielmingookkim/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1554414184752-1e123c774051?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                "medium": "https://images.unsplash.com/profile-1554414184752-1e123c774051?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                "large": "https://images.unsplash.com/profile-1554414184752-1e123c774051?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "danielmingookkim",
            "total_collections": 0,
            "total_likes": 38,
            "total_photos": 26,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
                "instagram_username": "danielmingookkim",
                "portfolio_url": "http://danielmingookkim.com",
                "twitter_username": null,
                "paypal_email": null
            }
        }
    }
]




const PhotoList = () => {

    const [dataImages, setDataImages] = useState({
        initialImages: [],
        obtainedImages: [],
        // searchedImage: [],
        inputSearch: '',
    })
    const [initialImages, setInitialImages] = useState(null)
    const [obtainedImages, setObtainedImages] = useState(null)
    const [clickedImage, setClickedImage] = useState(null)
    const [inputSearch, setInputSearch] = useState('')
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const getIndividualDataImage = (id) => {
        // const dataImage = imgs.find((img) => (img.id === id))
        // setDataImages({ searchedImage: dataImage })
        //https://api.unsplash.com/photos/vgWyuNwjEa4?client_id=mP3dmiXzCDzmwwekbsaz24jyWitaHbj7dFdcNY-vtHk

        axiosFhoto.get(`/photos/${id}?${unsflashParams}`)
            .then((response) => {
                setClickedImage(response.data);
                // console.log('response 1: ',response)
                // console.log('response 2: ',response.data)
                // setDataImages({ searchedImage: response.data })

                // if(response.status === 200){
                //     if(response.data && response.data.length > 0){
                //         // set fhoto
                //         // setDataImages({searchedImage: response.data[0]})
                //     }
                // }
            })
        //console.log('dataImages.obtainedImages: ', dataImages.obtainedImages)
        //setDataImages({ obtainedImages: dataImages.obtainedImages })
    }


    const downloadNormalImage = async (imgUrl) => {

        const imageURL = imgUrl + '&' + unsflashParams
        const imageName = clickedImage.user.username + "-" + clickedImage.user.id + "-unsflash.jpg"

        // first have to get the response(another url) when fetching original imgUrl
        axios.get(imageURL)
            .then((response) => {
                // Then convert url and download it
                axios.get(response.data.url, { responseType: 'arraybuffer' })
                    .then(response => {
                        const blob = new Blob([response.data], { type: 'image/jpeg' });
                        const url = window.URL.createObjectURL(blob);

                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', imageName);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    })
                    .catch(error => {
                        console.error('Error downloading image:', error);
                    });
            }).catch(error => {
                console.error('Error downloading image:', error);
            });
    }



    const handleInputChange = (e) => {
        // set data for inputSearch
        setInputSearch(e.target.value);
        // setDataImages({
        //     ...dataImages,
        //     [e.target.name]: e.target.value
        // })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchImages(inputSearch)

    }

    const searchImages = (prompt) => {
        // https://api.unsplash.com/search/photos?page=1&query=office&client_id=mP3dmiXzCDzmwwekbsaz24jyWitaHbj7dFdcNY-vtHk
        axiosFhoto.get(`/search/photos?page=1&query=${prompt}&${unsflashParams}`)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.results && response.data.results.length > 0) {
                        // set fhotos
                        setObtainedImages(response.data.results)
                    }
                }
            })
            .catch((error) => console.log(error))
    }

    const getInitialImages = () => {
        axiosFhoto.get(`/photos/?${unsflashParams}`)
            .then((response) => {
                setInitialImages(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getInitialImages()
        // console.log('Component did mount')
        // console.log('dataImages.initialImage: ', dataImages.initialImages)
        // console.log('dataImages.obtainedImages: ', dataImages.obtainedImages)
        
    }, [])



    return (
        <div className='container'>
            {/* modal open example */}


            <div className='mt-3'>
                {/* <button type='button' className='btn btn-success' onClick={getIndividualDataImage1}>
                prueba de buscar
            </button> */}
                <form onSubmit={handleSubmit} className='form_search col-lg-6'>
                    <button type="submit">
                        <SearchIcon />
                    </button>
                    <div className="div_input mb-3">
                        <input id='input_search' onChange={handleInputChange} name="inputSearch" value={inputSearch}
                            type="search" className="input_search "
                            placeholder="Search images" />
                    </div>
                </form>
            </div>

            {/* <div className="container" >
                <div className="row  mt-3">
                    <div className="col">
                        <div className='card'>
                            <img src={chair} class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <img src={landscapes} class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <img src={forest} class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                </div>
                <div className="row  mt-3">
                    <div className="col">
                        <div className='card'>
                            <img src={chair} class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <img src={landscapes} class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <img src={forest} class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                </div>
              
            </div> */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='div_img_superior'>
                {
                    initialImages ?
                        (
                            initialImages.map((img, index) => (
                                <div key={index} className='div_imgs m-2' onClick={() => getIndividualDataImage(img.id)} data-bs-toggle="modal" data-bs-target="#createCarModal">
                                    <img src={img.urls.regular} className="list_imgs" alt="..."></img>
                                </div>
                            ))
                        ) :
                        ""
                }
            </div>

            {/* SEARCHED IMAGES  */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='div_img_superior'>
                {
                    obtainedImages ?
                        (
                            obtainedImages.map((img, index) => (
                                <div key={index} className='div_imgs m-2' onClick={() => getIndividualDataImage(img.id)} data-bs-toggle="modal" data-bs-target="#createCarModal">
                                    <img src={img.urls.regular} className="list_imgs" alt="..."></img>
                                </div>
                            ))
                        ) : ""
                }
            </div>

            <div className="modal fade" id="createCarModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="createCarModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    {
                        clickedImage ?
                            (
                                <div className="modal-content">
                                    {
                                        clickedImage.user ?
                                            (
                                                <div className="modal-header">
                                                    <span className='span_user' style={{}}>
                                                        <img className='rounded-circle' alt='imagen del usuario' src={clickedImage.user.profile_image.small}></img>
                                                        <div className='div_user_info'>
                                                            <a href={clickedImage.user.links.html} className="A_name">{clickedImage.user.name} </a>
                                                            <div>
                                                                <a href={clickedImage.user.links.html} className='A_username'>{clickedImage.user.username}</a>
                                                            </div>

                                                        </div>
                                                    </span>
                                                    <div className='div_dropdown' style={{}}>
                                                        <button type="button" className="btn btn-success" onClick={() => downloadNormalImage(clickedImage.links.download_location)}>
                                                            Descargar
                                                        </button>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="modal-header"> No se hay datos</div>
                                            )
                                    }
                                    <div className="modal-body">
                                        <div className='row'>
                                            <div className='col-xl-12'>
                                                <center>
                                                    <div className='div_imgs_individual' >
                                                        {
                                                            clickedImage.urls && clickedImage.urls.regular ?
                                                                (
                                                                    <img src={clickedImage.urls.regular} className="list_imgs" alt="..."></img>
                                                                ) :
                                                                (
                                                                    <p>No image data available.</p>
                                                                )
                                                        }

                                                    </div>
                                                </center>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (<p>No se encontrarons datos</p>)
                    }
                </div>
            </div>

            {/* <div className="modal fade" id="createCarModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="createCarModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    {
                        dataImages.searchedImage ?
                            (
                                <div className="modal-content">
                                    {
                                        dataImages.searchedImage.user ?
                                            (
                                                <div className="modal-header">
                                                    <span className='span_user' style={{}}>
                                                        <img className='rounded-circle' alt='imagen del usuario' src={dataImages.searchedImage.user.profile_image.small}></img>
                                                        <div className='div_user_info'>
                                                            <a href={dataImages.searchedImage.user.links.html} className="A_name">{dataImages.searchedImage.user.name} </a>
                                                            <div>
                                                                <a href={dataImages.searchedImage.user.links.html} className='A_username'>{dataImages.searchedImage.user.username}</a>
                                                            </div>

                                                        </div>
                                                    </span>
                                                    <div className='div_dropdown' style={{}}>
                                                        <button type="button" className="btn btn-success" onClick={() => downloadNormalImage(dataImages.searchedImage.links.download_location)}>
                                                            Descargar
                                                        </button>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="modal-header"> No se hay datos</div>
                                            )
                                    }
                                    <div className="modal-body">
                                        <div className='row'>
                                            <div className='col-xl-12'>
                                                <center>
                                                    <div className='div_imgs_individual' >
                                                        {
                                                            dataImages.searchedImage.urls && dataImages.searchedImage.urls.regular ?
                                                                (
                                                                    <img src={dataImages.searchedImage.urls.regular} className="list_imgs" alt="..."></img>
                                                                ) :
                                                                (
                                                                    <p>No image data available.</p>
                                                                )
                                                        }

                                                    </div>
                                                </center>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (<p>No se encontrarons datos</p>)
                    }
                </div>
            </div> */}
        </div>
    );
}

export default PhotoList;
