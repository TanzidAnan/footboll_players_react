import { Outlet } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import TimeLogo from "../TimeLogo/TimeLogo";

const Banner = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TimeLogo></TimeLogo>
            <Outlet></Outlet>
        </div>
    );
};

export default Banner;