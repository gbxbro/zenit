import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as OkRuIcon} from "../assets/images/icons/ok-ru.svg"
import {ReactComponent as SignInIcon} from '../assets/images/icons/sign-in.svg'
import {ReactComponent as TelegramIcon} from '../assets/images/icons/telegram.svg'
import {ReactComponent as TikTokIcon} from '../assets/images/icons/tik-tok.svg'
import {ReactComponent as TwitterIcon} from '../assets/images/icons/twitter.svg'
import {ReactComponent as UserIcon} from '../assets/images/icons/user.svg'
import {ReactComponent as VkIcon} from '../assets/images/icons/vk.svg'
import {ReactComponent as WorldIcon} from '../assets/images/icons/world.svg'
import {ReactComponent as YoutubeIcon} from '../assets/images/icons/youtube.svg'
import {ReactComponent as LogoIcon} from '../assets/images/icons/logo.svg'
import {ReactComponent as LogoTextIcon} from '../assets/images/icons/logo-text.svg'

type Props = {

}

const Header: FC<Props> = (props) => {
    return (
        <header className="header">
            <div className="header__top header-top">
                <div className="container">
                    <nav className="header-top__nav">
                        <ul className="header-top__links list">
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    «Зенит-Казань»
                                </Link>
                            </li>
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    «Зенит-УОР»
                                </Link>
                            </li>
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    «Академия»
                                </Link>
                            </li>
                        </ul>
                        <ul className="header-top__socials header-socials list">
                            <li className="header-socials__item">
                                <Link className="header-socials__link" to="/">
                                    <VkIcon className="header-socials__icon" />
                                </Link>
                            </li>
                            <li className="header-socials__item">
                                <Link className="header-socials__link" to="/">
                                    <TwitterIcon className="header-socials__icon" />
                                </Link>
                            </li>
                            <li className="header-socials__item">
                                <Link className="header-socials__link" to="/">
                                    <TikTokIcon className="header-socials__icon" />
                                </Link>
                            </li>
                            <li className="header-socials__item">
                                <Link className="header-socials__link" to="/">
                                    <YoutubeIcon className="header-socials__icon" />
                                </Link>
                            </li>
                            <li className="header-socials__item">
                                <Link className="header-socials__link" to="/">
                                    <TelegramIcon className="header-socials__icon" />
                                </Link>
                            </li>
                            <li className="header-socials__item">
                                <Link className="header-socials__link" to="/">
                                    <OkRuIcon className="header-socials__icon" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="header-top__actions header-actions list">
                            <li className="header-actions__item">
                                <Link className="header-actions__link" to="/">
                                    <SignInIcon className="header-actions__icon" />
                                </Link>
                            </li>
                            <li className="header-actions__item">
                                <Link className="header-actions__link" to="/">
                                    <WorldIcon className="header-actions__icon" />
                                </Link>
                            </li>
                            <li className="header-actions__item">
                                <Link className="header-actions__link" to="/">
                                    <UserIcon className="header-actions__icon" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header__bottom header-bottom">
                <div className="container">
                    <nav className="header-bottom__nav">
                        <div className="logo">
                            <Link className="logo__link" to="/">
                                <LogoIcon className="logo__icon"/>
                                <LogoTextIcon logo__text-icon/>
                            </Link>
                        </div>
                        <ul className="header-bottom__links list">
                            <li className="header-bottom__item">
                                <Link className="header-bottom__link" to="/">
                                    КЛУБ
                                </Link>
                            </li>
                            <li className="header-bottom__item">
                                <Link className="header-bottom__link" to="/">
                                    НОВОСТИ
                                </Link>
                            </li>
                            <li className="header-bottom__item">
                                <Link className="header-bottom__link" to="/">
                                    СЕЗОН
                                </Link>
                            </li>
                            <li className="header-bottom__item">
                                <Link className="header-bottom__link" to="/">
                                    МЕДИА
                                </Link>
                            </li>
                            <li className="header-bottom__item">
                                <Link className="header-bottom__link" to="/">
                                    БИЛЕТЫ
                                </Link>
                            </li>
                            <li className="header-bottom__item">
                                <Link className="header-bottom__link" to="/">
                                    МАГАЗИН
                                </Link>
                            </li>
                        </ul>
                        <div className="sponsor">
                            <img className="sponsor__image" src="./images/gazprom-sponsor.png" alt="gazprom-sponsor" />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header