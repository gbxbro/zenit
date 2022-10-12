import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
    
}

const AppLayout: FC<Props> = (props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout