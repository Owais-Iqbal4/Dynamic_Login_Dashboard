import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Channels from "../../components/Channels/Channels";
function Dashboard(props) {
    const [hederMenu, setHederMenu] = useState('hidden')
    const [channelType, setChanneltype] = useState('Channels');
    const [filterChannel, setFilterChannel] = useState('');
    return (
        <div >
            <Header setHederMenu={setHederMenu} setFilterChannel = {setFilterChannel} filterChannel={filterChannel} userData = {props.userData} />
            <Sidebar hederMenu={hederMenu} setHederMenu={setHederMenu} setChanneltype = {setChanneltype} />
            <Channels channelType = {channelType} filterChannel = {filterChannel} userData = {props.userData} />
        </div>

    )
}

export default Dashboard;
