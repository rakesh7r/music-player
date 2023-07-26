import React, { useContext, useState } from "react"
import { login } from "../utilities/SignIn"
import { useDispatch, useSelector } from "react-redux"
import { GlobalsContext } from "../App"
import { logo } from "../assets"
import { SearchOutlined, CloseOutlined } from "@ant-design/icons"

function Header() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const { isAuthenticated } = useContext(GlobalsContext)
    const { user } = useSelector((state) => state.user)

    return (
        <div className="header p-4 bg-2 sticky top-0 border-radius-2 flex justify-between items-center rounded-lg ">
            <div className="flex gap-4 flex-row justify-center items-center">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <p className="ordinal font-bold h-5 ">Apollo</p>
            </div>
            <div className="flex gap-36 justify-between items-center ">
                <div className="bg-gray-800 text-xs rounded-2xl flex items-center px-4">
                    <input
                        placeholder="What do you wanna listen to?"
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="rounded-xl bg-gray-800 text-xs  outline-0 px-0 py-2 w-72"
                    />
                    {search.length ? (
                        <CloseOutlined
                            className="mr-4 cursor-pointer"
                            onClick={() => setSearch("")}
                        />
                    ) : null}
                    <SearchOutlined className=" cursor-pointer" />
                </div>
                {!isAuthenticated ? (
                    <button
                        onClick={() => {
                            login(dispatch)
                        }}
                    >
                        Sign in
                    </button>
                ) : user && user.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="Account"
                        className="w-8 rounded-full"
                    />
                ) : null}
            </div>
        </div>
    )
}

export default Header
