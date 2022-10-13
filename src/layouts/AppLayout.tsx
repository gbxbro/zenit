import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {}

const AppLayout: FC<Props> = (props) => {
    return (
        <div className="app">
            <Header/>
            <div className="app__content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default AppLayout