import {useEffect, useRef} from "react";

export default function VideoPlayer() {
    const ref = useRef(null);
    console.log('Video Player Render ', ref);

    useEffect(() => {
        console.log('Use Effect ', ref);
        ref.current.muted = true;   // Add muted, browser won't let play automatically due to limitations
        ref.current.play();
    })
    const play = () => {
        ref.current.play();
    }

    return (<div>
        <video width="250" ref={ref} >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
        <button type={'button'} onClick={play}>Play</button>
    </div>)
}