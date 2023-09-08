import React, { useEffect, useState } from "react";
import './Channels.css'
import { Avatar } from "@material-ui/core";
function Channels(props) {
const [filteredArray, setfilteredArray] = useState([])
    let channelArray = [
        {
            name: 'FItness Channel',
            image: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
            channelImg: 'https://img.freepik.com/free-psd/flat-design-fitness-gym-template_23-2149553767.jpg?w=826&t=st=1694111472~exp=1694112072~hmac=7a071275a892c6f321919f5021cea0934643ba81bd505ec7773a19068c691465'
        },
        {
            name: 'Knowledge',
            image: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
            channelImg: 'https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=826&t=st=1694112742~exp=1694113342~hmac=2a634aab6be8fbc5ba0a68fa660949309e8961f2cfbb6c09d2603c0fa1da1a35'
        },
        {
            name: 'Sports',
            image: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
            channelImg: 'https://img.freepik.com/premium-vector/basketball-sports-tournament-banner-template-with-logo-social-media_126068-409.jpg'
        },
        {
            name: 'Tech',
            image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
            channelImg: 'https://img.freepik.com/free-psd/web-template-with-landing-page-traditional-italian-food-restaurant_23-2148526098.jpg?t=st=1694077130~exp=1694077730~hmac=269647a9335fe6dd963b75e7ca7e005259e35082bd7ada033a172b0e8d42d261'
        },
        {
            name: 'Foods',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
            channelImg: 'https://img.freepik.com/premium-psd/food-menu-restaurant-flyer-template_120329-380.jpg'
        },
        {
            name: 'Insects',
            image: 'https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=600',
            channelImg: 'https://as1.ftcdn.net/v2/jpg/04/38/93/22/1000_F_438932207_viOQnDrRTsRL5ZYwjuxSzqAmr5AgCjcy.jpg'
        },
        {
            name: 'Foods',
            image: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600',
            channelImg: 'https://img.freepik.com/premium-vector/ramadan-special-food-menu-sale-social-media-post-promotion-web-banner-template_544892-235.jpg'
        },

    ]

    useEffect(() => {
        console.log('props.filterChannel ', props.filterChannel)
        if(props.filterChannel){
            let array = []
            array = channelArray.filter(e=>e.name == props.filterChannel)
            
            setfilteredArray(array)
        }
        else{
            setfilteredArray(channelArray)
        }

    }, [props.filterChannel])
   

    return (
        <div className=" channel-height border-t-[1px] overflow-y-scroll border-[#c4cacf] w-full bg-[#27343D] flex flex-wrap gap-4 p-3">
            <div className="w-full p-2 text-center text-[2rem]">
                <p className="style-font text-[#c4cacf]">{props.userData.name+"'s"+': '+ props.channelType}</p>
            </div>
            {
                filteredArray.map((item, index) => {
                    return (
                        <div className="h-[50vh] border border-[#c4cacf] w-[32.333%] channel-width cursor-pointer" key={index}>
                            {/*  */}
                            <div className="h-[70%] w-full">
                                <img src={item.channelImg} className="channel-img" />
                            </div>
                            <div className="h-[50%] w-full p-4 flex gap-5">
                                <Avatar src={item.image} />
                                <div className="text-[25px] text-[#c4cacf]">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Channels;