import React from "react"
import Body from "../components/Body"
import RightBar from "../components/RightBar"
import LeftBar from "../components/LeftBar"

function Home() {
    return (
        <div className="flex justify-between gap-4 px-2">
            <LeftBar />
            <Body />
            <RightBar />
        </div>
    )
}

export default Home
