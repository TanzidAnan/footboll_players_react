import './HeroSection.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const HeroSection = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className='w-11/12 mx-auto'>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img src="https://i.ibb.co.com/YW0zbVv/10380069-880126748669840-8933844486269932511-o.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src="https://i.ibb.co.com/mCbNySK/165162737-4679096642106146-3311128484245134838-n.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src="https://i.ibb.co.com/RNksbQr/302685248-6378798492135944-5091437052586878179-n.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src="https://i.ibb.co.com/cLbF1df/315015660-6614430455239412-1468348254619015634-n.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img src="https://i.ibb.co.com/sH5QpK3/321804987-546099823840741-1235055737075517233-n.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;