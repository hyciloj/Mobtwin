import React, {FC, useCallback, useState} from "react";
import {PATH_AUTH} from "../../routing/paths";
import {Link} from "react-router-dom";
import {Gallery, SwiperP, TickerX, Accordion} from "../component";
import ImagesGallery from "./ImageGallery.json"
import Images from "./Images.json"
import {toAbsoluteUrl} from "../../../_theme/helpers";
import SVG from "react-inlinesvg";


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
    initial: {x: '100%'},
    animate: {x: '-100%', transition: {duration: 10, repeat: Infinity}},
}
const TabBlock: FC<TabBlockProps> = ({tab}) => (
    <>
        {tab && (
            <>
                <div className="col-12 col-md-6 tab-block-left">
                    <span className="tab-block-title gradient-color-full">{tab.title}</span>
                    <div className="tab-block-sub-title">{tab.subTitle}</div>
                    <p className="tab-sub-description">{tab.description}</p>
                </div>

                <div
                    className="col-12 col-md-6 tab-block-right"
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

    const {firstColumn, secondColumn, thirdColumn, fourthColumn} = Images

    const [showNavBar, setShowNavBar] = useState<boolean>(false)
    return (
        <>
            <div className="position-relative">
                {/*<div className="navbar-fixed d-flex justify-content-end align-items-center">*/}
                <div className={`navbar-fixed${showNavBar ? ' show' : ''}`}>
                    <div className="parent">
                        <div className="">hello</div>
                        <div className="child">
                            <div className="item"><Link to={PATH_AUTH.login}>Login</Link></div>
                            <div className="item"><Link to={PATH_AUTH.login}>Login</Link></div>
                            <div className="item"><Link to={PATH_AUTH.login}>Login</Link></div>
                            <div className="item"><Link to={PATH_AUTH.login} className="main_button-xl">Login</Link></div>
                            <div className="item svg-icon" onClick={() => {
                                setShowNavBar(prevState => !prevState);
                            }}>
                                <SVG src={toAbsoluteUrl('media/icons/duotune/arrows/arr023.svg')}/>
                            </div>
                        </div>
                    </div>
                    {/*<div className="container">*/}
                    {/*    <div className="row justify-content-center align-items-center">*/}
                    {/*        <div className="col-4">*/}
                    {/*            <div className="brand">*/}
                    {/*                <img src="" alt=""/>*/}
                    {/*                <span className="brand-name">mobtwin</span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-8 links">*/}
                    {/*            <div className="row d-flex justify-content-end align-items-center">*/}
                    {/*                <div className="col-2">*/}
                    {/*                    <Link to={PATH_AUTH.login}>Login</Link>*/}
                    {/*                </div>*/}
                    {/*                <div className="col-2">*/}
                    {/*                    <Link to={PATH_AUTH.login}>Login</Link>*/}
                    {/*                </div>*/}
                    {/*                <div className="col-2">*/}
                    {/*                    <Link to={PATH_AUTH.login}>Login</Link>*/}
                    {/*                </div>*/}
                    {/*                <div className="col-2">*/}
                    {/*                    <Link to={PATH_AUTH.login} className="main_button-xl">Login</Link>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <main className="container-fluid p-0">

                <div className="container">

                    <div className="ticker-container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-h1">Unleash your <span
                                    className="h1-700 rad-color-2">Creativity</span> with the power of <span
                                    className="h1-700 rad-color-1">Leonardo Ai </span>
                                </h1>
                                <h2 className={"brxe-ukrozz"}>Create production-quality visual assets for
                                    your projects with unprecedented quality, speed, and style-consistency.</h2>
                                <div className="row">
                                    <div className="col-6">
                                        <Link to={PATH_AUTH.login} className="main_button-xl">Create account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="ticker-wrapper">
                                    <div className="tickers">
                                        <TickerX data={ImagesGallery.firstLine}
                                                 duration={10}
                                                 from={0}
                                                 to={-10}
                                        />
                                        <TickerX data={ImagesGallery.secondLine}
                                                 duration={35}
                                                 from={0}
                                                 to={10}
                                        />
                                        <TickerX data={ImagesGallery.firstLine}
                                                 duration={25}
                                                 from={0}
                                                 to={-10}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around align-items-center mb-5">
                        <div
                            className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p text-p text-center">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p text-p text-center">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p text-p text-center">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                    </div>

                    <div className="swiper-container">
                        <SwiperP/>
                    </div>

                    <div className="tab-container">
                        <div className="row ">
                            <h2 className="col-12 d-flex justify-content-center align-items-center text-heading">
                                <span className="gradient-color-full _pr-2">Leonardo’s</span> Toolkit&nbsp;
                            </h2>
                        </div>
                        <div className="row tab-menu">
                            {tabTitles.map((title, index) => (
                                <div
                                    className={`col-4 col-md-3 col-lg-2 tab-title ${
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

                    <div className="gallery-container">
                        <div className="row ">
                            <h2 className="col-12 d-flex justify-content-center align-items-center text-heading">
                                <span className="gradient-color-full _pr-2">Platform</span> Gallery🎨
                            </h2>
                        </div>
                        <div className="gallery-wrapper">
                            <div className="gallery-row">
                                <Gallery firstColumn={firstColumn}
                                         secondColumn={secondColumn}
                                         thirdColumn={thirdColumn}
                                         fourthColumn={fourthColumn}
                                />
                                {/*<div className="gallery-column">*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_A_detailed_logo_for_twitch_illustration_mans_face_with_2_69c97ab5-7d8a-443f-b7dd-07fbd94b9ec1_1.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_A_detailed_logo_for_twitch_illustration_mans_face_with_2_69c97ab5-7d8a-443f-b7dd-07fbd94b9ec1_1.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="gallery-column">*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-129-300x200.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_hyper_realistic_ultra_detailed_photograph_of_a_woman_s_1_6d8066d4-4036-4de0-a215-98461459e598_1.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-129-300x200.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="gallery-column">*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-131-300x169.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_Unleash_the_power_of_the_cyberpunk_world_in_an_evocati_0_1f5ee7cd-9c1a-4b87-816e-9a825b6158c4_1-360x540.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-129-300x200.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="gallery-column">*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_hyper_realistic_ultra_detailed_photograph_of_a_woman_s_1_6d8066d4-4036-4de0-a215-98461459e598_1.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div className="gallery-img">*/}
                                {/*        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-129-300x200.jpeg" alt=""/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    <Accordion />

                </div>

                <div className="video-container">
                    <video autoPlay muted loop playsInline>
                        {/*<source src="/media/cc0-videos/flower.webm" type="video/webm" />*/}

                        <source src="https://www.gstatic.com/play/games/videos/join-waitlist-desktop-4f2b63c9.mp4" type="video/mp4" />
                    </video>

                    <div className="video-wrapper">
                        <header>
                            <h1 className="text-h1 text-center">lorem ipsum</h1>
                            <p className="description text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit illo illum impedit iste magnam nemo nisi quisquam vero, voluptatum.
                            </p>
                        </header>
                        <footer >
                            <div className="row">
                                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3 mb-md-0">
                                    <div className="brand-img">
                                        <img src={toAbsoluteUrl("media/logos/favicon.png")} alt=""/>
                                    </div>
                                    <div className="brand-name">Mobtwin</div>
                                </div>
                                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3 mb-md-0">
                                    <h5>About</h5>
                                    <ul>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3 mb-md-0">
                                    <h5>Stay tuned!</h5>
                                    <ul>
                                        <li>Discord</li>
                                        <li>Telegram</li>
                                        <li>Youtube</li>
                                        <li>Facebook</li>
                                        <li>Instagram</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-0">
                                    <h5>Get the App</h5>
                                    <img className="mb-2 mb-md-3" src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/08/Frame-427318315.svg" alt=""/>
                                    <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/10/playstore-coming-soon.svg" alt=""/>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </main>



        </>
    )
}
