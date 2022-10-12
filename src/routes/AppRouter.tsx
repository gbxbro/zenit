import React, {FC, useLayoutEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from "../pages/Home";

const AppRouter:FC = () => {
    const Wrapper = ({children}: any) => {
        const {pathname} = useLocation();
        useLayoutEffect(() => document.documentElement.scrollTo(0, 0), [pathname]);
        return children;
    };

    return (
        <Wrapper>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Wrapper>
    );
}

export default AppRouter