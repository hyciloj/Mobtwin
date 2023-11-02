import React, {FC, useCallback, useEffect, useState} from "react";
import Header from "../../Header";
import {PATH_AUTH} from "../../routing/paths";
import {Link} from "react-router-dom";
import {Notification} from "../../modules/components";
import {toAbsoluteUrl} from "../../../_theme/helpers";
import {motion, AnimatePresence} from 'framer-motion';
import {url} from "node:inspector";
import Ticker from 'framer-motion-ticker';


const images = {
    image1: "https://app.leonardo.ai/img/login-hero-images/Celestial.webp",
    image2: "https://app.leonardo.ai/img/login-hero-images/FemaleAdventurer5.webp",
    image3:
        "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1.png",
};

interface Tab {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    image: string;
}

const tabBlockData: Tab[] = [
    {
        id: 0,
        title: "title-1",
        subTitle: "sub-title-1",
        description: "description-0 Take creativity a step further with the transformative power of our Image Generation tool. It’s not just about bringing your concepts to life — redefine the impossible. From beginners to professionals, we offer a spectrum of settings that can be intuitively tailored to your needs.",
        image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/0-2022-12-02T033131-100.png",
    },
    {
        id: 1,
        title: "title-2",
        subTitle: "sub-title-2",
        description: "description-1 Take creativity a step further with the transformative power of our Image Generation tool. It’s not just about bringing your concepts to life — redefine the impossible. From beginners to professionals, we offer a spectrum of settings that can be intuitively tailored to your needs.",
        image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/0-2022-12-02T033131-1-3.png",
    },
    {
        id: 2,
        title: "title-3",
        subTitle: "sub-title-3",
        description: "description-2 Take creativity a step further with the transformative power of our Image Generation tool. It’s not just about bringing your concepts to life — redefine the impossible. From beginners to professionals, we offer a spectrum of settings that can be intuitively tailored to your needs.",
        image: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/0-2022-12-02T033131-88.png",
    },
];

interface TabBlockProps {
    tab: Tab | undefined;
}

const animationVariants = {
    initial: { x: '100%' },
    animate: { x: '-100%', transition: { duration: 10, repeat: Infinity } },
};

const TabBlock: FC<TabBlockProps> = ({tab}) => (
    <>
        {tab && (
            <>
                <div className="col-6 tab-block-left">
                    <span className="tab-block-title gradient-color-full">{tab.title}</span>
                    <div className="tab-block-sub-title">{tab.subTitle}</div>
                    <p className="tab-sub-description">{tab.description}</p>
                </div>

                <div
                    className="col-6 tab-block-right"
                    style={{
                        backgroundImage: `url(${tab.image})`
                    }}
                />
            </>
        )}

    </>
);

const tabTitles = ["Title 1", "Title 2", "Title 3"];
const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3', '#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];

export default function Before() {

    const [tabOpen, setTabOpen] = useState(0);

    const tabBlockOpen = useCallback(() => {
        const tabOpened = tabBlockData.find((item) => item.id === tabOpen);
        return <TabBlock tab={tabOpened}/>;
    }, [tabOpen]);

    const handleTabClick = (index: number) => {
        setTabOpen(index);
    };

    return (
        <>
            <div className="container-fluid p-0 position-relative">
                <div className="row _header d-flex justify-content-end align-items-center">
                    <div className="col-1 offset-8 d-flex justify-content-center align-items-center">
                        <Link to={PATH_AUTH.login} className="main_button-xl">Login</Link>
                    </div>
                </div>

            </div>

            <main>
                <div className="container-fluid ticker-container">
                    <div className="row">
                        <div className="col-5 offset-1">
                            <div className="_pt-60 ">
                                <h1 className="text-h1">Unleash your <span
                                    className="h1-700 rad-color-2">Creativity</span> with the power of <span
                                    className="h1-700 rad-color-1">Leonardo Ai </span>
                                </h1>
                                <h2 className={"brxe-ukrozz"}>Create production-quality visual assets for
                                    your projects with unprecedented quality, speed, and style-consistency.</h2>
                                <div className="row">
                                    <div className="col-6">
                                        <Link to={PATH_AUTH.login}
                                              className="form-submit text-white"
                                        >Create account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 h-100"
                             // style={{
                             //     backgroundImage: `url("${images.image3}")`
                             // }}
                        >
                            {/*<Ticker duration={20}>*/}
                            {/*    {colors.map((item, index) => (*/}
                            {/*        <div*/}
                            {/*            key={index}*/}
                            {/*            style={{*/}
                            {/*                backgroundColor: item,*/}
                            {/*                margin: '5px',*/}
                            {/*                height: '150px',*/}
                            {/*                width: '100px',*/}
                            {/*            }}*/}
                            {/*        />*/}
                            {/*    ))}*/}
                            {/*</Ticker>*/}
                            {/*<Ticker duration={17}>*/}
                            {/*    {colors.map((item, index) => (*/}
                            {/*        <div*/}
                            {/*            key={index}*/}
                            {/*            style={{*/}
                            {/*                backgroundColor: item,*/}
                            {/*                margin: '5px',*/}
                            {/*                width: '100px',*/}
                            {/*            }}*/}
                            {/*        />*/}
                            {/*    ))}*/}
                            {/*</Ticker>*/}
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around align-items-center _p-12">
                        <div className="col-3">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p">Your imagination, our technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div className="col-3">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div className="col-3">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>

                    </div>

                    <div className="row ">
                        <h2 className="col-12 d-flex justify-content-center align-items-center text-heading">
                            <span className="gradient-color-full _pr-2">Leonardo’s</span> Toolkit&nbsp;
                        </h2>
                    </div>
                </div>

                <div className="container tab-container">
                    <div className="row tab-menu">
                        {tabTitles.map((title, index) => (
                            <div
                                className={`col-2 tab-title ${
                                    tabOpen === index ? "tab-open" : ""
                                }`}
                                onClick={() => handleTabClick(index)}
                                key={index}
                            >
                                <span>{title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="row tab-block">{tabBlockOpen()}</div>
                </div>

                {/*<div className="container avatar-container">*/}
                {/*    <div className="avatar-wrapper">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-6">*/}
                {/*                <p>*/}
                {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dignissimos eaque exercitationem explicabo maxime quaerat sint, unde! Autem blanditiis culpa cumque earum exercitationem fugiat illum laudantium quod tempora vero.*/}
                {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dignissimos eaque exercitationem explicabo maxime quaerat sint, unde! Autem blanditiis culpa cumque earum exercitationem fugiat illum laudantium quod tempora vero.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="col-6">*/}
                {/*                <img src="" alt=""/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </main>

            <footer className="container-fluid container-footer">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                </div>
            </footer>

            {/*<Header/>*/}

        </>
    )
}
