import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import {PATH_AUTH} from "../../routing/paths";
import {Link} from "react-router-dom";
import {Gallery, SwiperP, TickerX, Accordion, Testimonial} from "../component";
import ImagesGallery from "./ImageGallery.json"
import Images from "./Images.json"
import {KTSVG, toAbsoluteUrl} from "../../../_theme/helpers";
import {motion, useAnimation, useInView, useViewportScroll, useTransform} from "framer-motion";
import {NavBar, Reveal} from "../../modules/components";

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
        description: "description-1 Take creativity a step further with the transformative power of our Image Generation tool.",
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

const TabBlock: FC<TabBlockProps> = ({tab}) => (
    <>
        {tab && (
            <>
                <div className="col-12 col-md-6 tab-block-left">
                    {/*<Reveal from={{x: -75, y: 0}} to={{x: 0, y: 0}}>*/}

                    <span className="tab-block-title gradient-color-full">{tab.title}</span>
                    <div className="tab-block-sub-title">{tab.subTitle}</div>
                    <p className="tab-sub-description">{tab.description}</p>
                    {/*</Reveal>*/}

                </div>

                <div className="col-12 col-md-6 tab-block-right"
                     style={{
                         backgroundImage: `url(${tab.image})`
                     }}
                />
            </>
        )}

    </>
);

const tabTitles = [
    {title: "dribbble", icon: "media/svg/brand-logos/hp-3.svg"},
    {title: "twitch", icon: "media/svg/brand-logos/twitch.svg"},
    {title: "twitter", icon: "media/svg/brand-logos/twitter.svg"},
    {title: "vimeo", icon: "media/svg/brand-logos/vimeo.svg"},
];

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


    const scrollRef = useRef<HTMLDivElement | null>(null)


    const {scrollYProgress} = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 11], [0.8, 15]);
    const opacity = useTransform(scrollYProgress, [0, 1], [.7, 1]);

    return (
        <div className={"landing"}>

            <NavBar/>

            <main className="container-fluid p-0">

                <div className="container">

                    <div>
                        <div className="ticker-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-h1 text-white">Unleash your <span
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
                    </div>

                    <div className="row d-flex justify-content-around align-items-center mb-5">
                        <div
                            className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p text-p text-center text-white">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p text-p text-center text-white">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="gradient-color-full">Cultivate Originality</h3>
                            <div className="text-p text-p text-center text-white">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                    </div>

                    <div ref={scrollRef}>

                        <motion.div className="swiper-container" style={{opacity, scale}}>
                            <div>
                                <SwiperP/>
                            </div>
                        </motion.div>
                    </div>

                    <div className="tab-container">
                        <div className="row ">
                            <h2 className="col-12 d-flex justify-content-center align-items-center text-heading text-white">
                                <span className="gradient-color-full _pr-2">Leonardo’s</span> Toolkit&nbsp;
                            </h2>
                        </div>
                        <div className="row tab-menu">
                            {tabTitles.map((item, index) => (
                                <div
                                    className={`tab-item${
                                        tabOpen === index ? " tab-open" : ""
                                    }`}
                                    onClick={() => handleTabClick(index)}
                                    key={index}
                                >
                                    <KTSVG path={toAbsoluteUrl(`${item.icon}`)} className='tab-icon'/>
                                    <span className="tab-title">{item.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="row tab-block">{tabBlockOpen()}</div>
                    </div>


                    <div className="gallery-container">
                        <div className="row ">
                            <h2 className="col-12 d-flex justify-content-center align-items-center text-heading text-white">
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
                            </div>
                        </div>
                    </div>

                    <Accordion/>

                    <div className="testimonials-container">
                        <div className="row ">
                            <h2 className="col-12 d-flex justify-content-center align-items-center text-heading text-white">
                                <span className="gradient-color-full _pr-2">Testimonials</span> ⭐
                            </h2>
                        </div>
                        <Reveal from={{x: 0, y: 75}} to={{x: 0, y: 0}}>
                            <div className="testimonials-wrapper">
                                <Testimonial/>
                            </div>
                        </Reveal>
                    </div>

                </div>

                <div className="video-container">
                    <video autoPlay muted loop playsInline>
                        {/*<source src="/media/cc0-videos/flower.webm" type="video/webm" />*/}

                        <source src="https://www.gstatic.com/play/games/videos/join-waitlist-desktop-4f2b63c9.mp4"
                                type="video/mp4"/>
                    </video>
                    <div className="video-wrapper">
                        <header>
                            <h1 className="text-h1 text-white text-center">lorem ipsum</h1>
                            <p className="description text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit illo illum
                                impedit iste magnam nemo nisi quisquam vero, voluptatum.
                            </p>
                        </header>
                        <footer>
                            <div className="row">
                                <div
                                    className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3 mb-md-0">
                                    <div className="brand-img">
                                        <img src={toAbsoluteUrl("media/logos/favicon.png")} alt=""/>
                                    </div>
                                    <div className="brand-name">Mobtwin</div>
                                </div>
                                <div
                                    className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3 mb-md-0">
                                    <h5>About</h5>
                                    <ul>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                </div>
                                <div
                                    className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3 mb-md-0">
                                    <h5>Stay tuned!</h5>
                                    <ul>
                                        <li>Discord</li>
                                        <li>Telegram</li>
                                        <li>Youtube</li>
                                        <li>Facebook</li>
                                        <li>Instagram</li>
                                    </ul>
                                </div>
                                <div
                                    className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-0">
                                    <h5>Get the App</h5>
                                    <img className="mb-2 mb-md-3"
                                         src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/08/Frame-427318315.svg"
                                         alt=""/>
                                    <img
                                        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/10/playstore-coming-soon.svg"
                                        alt=""/>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>


            </main>

        </div>
    )
}
