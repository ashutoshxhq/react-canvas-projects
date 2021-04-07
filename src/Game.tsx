import { useRef, useEffect, useState } from 'react'

const Game = (props: any) => {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [bulletX, setBulletX] = useState(0)
    const [bulletY, setBulletY] = useState(-30)
    const [bulletInterval, setBulletInterval] = useState<any>(null)
    const [bubbles, setBubbles] = useState([{ "x": 100, "y": 10 }, { "x": 100, "y": 120 }, { "x": 100, "y": 230 }, { "x": 200, "y": 10 }, { "x": 200, "y": 120 }, { "x": 200, "y": 230 }, { "x": 300, "y": 10 }, { "x": 300, "y": 120 }, { "x": 300, "y": 230 }, { "x": 400, "y": 10 }, { "x": 400, "y": 120 }, { "x": 400, "y": 230 }, { "x": 500, "y": 10 }, { "x": 500, "y": 120 }, { "x": 500, "y": 230 }, { "x": 600, "y": 10 }, { "x": 600, "y": 120 }, { "x": 600, "y": 230 }, { "x": 700, "y": 10 }, { "x": 700, "y": 120 }, { "x": 700, "y": 230 }, { "x": 800, "y": 10 }, { "x": 800, "y": 120 }, { "x": 800, "y": 230 }, { "x": 900, "y": 10 }, { "x": 900, "y": 120 }, { "x": 900, "y": 230 }])

    const canvasRef = useRef(null)
    const spaceshipRef = useRef(null)
    const bubbleRef = useRef(null)

    useEffect(() => {
        const setupScene = (ctx: any) => {
            ctx.clearRect(0, 0, 1080, 720);


            ctx.drawImage(spaceshipRef.current, mouseX - 30, 670, 60, 60);

            ctx.beginPath();
            ctx.arc(bulletX, 700 - bulletY, 10, 0, 2 * Math.PI);
            ctx.fillStyle = "black";
            ctx.fill();

            console.log("Test1")

            bubbles.map(bubble => {
                ctx.drawImage(bubbleRef.current, bubble.x, bubble.y, 80 , 80);
                return bubble
            })
        }
        const canvas: any = canvasRef.current
        const context = canvas?.getContext('2d')
        setupScene(context)

    }, [bulletY, bulletX, mouseX, mouseY, bubbles])


    useEffect(() => {
        if (bulletY > 720) {
            clearInterval(bulletInterval)
            setBulletY(-30)
            setBulletInterval(null)
        }
        let indexToFilter: number
        for (let index = 0; index < bubbles.length; index++) {
            const bubble: any = bubbles[index];
            if (((bulletX) >= (bubble?.x) && (bulletX) <= bubble?.x + 80) && ((700 - bulletY) >= (bubble?.y) && (700 - bulletY) <= (bubble?.y + 80))) {
                clearInterval(bulletInterval)
                setBulletY(-30)
                setBulletInterval(null)
                indexToFilter = index;
                break;
            }

        }
        setBubbles(prev => prev.filter((item, index) => index !== indexToFilter))
        // eslint-disable-next-line
    }, [bulletY, bulletInterval, bulletX, setBulletInterval])

    const onMouseMove = (e: any) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
    }


    const handleMouseClick = () => {
        if (bulletInterval == null) {
            setBulletX(mouseX)
            setBulletY(40)
            let bulletIntervalData = setInterval(() => {
                setBulletY(prev => prev + 10)
            }, 10)
            setBulletInterval(bulletIntervalData)
        }

    }
    return (
        <div className="game-scene">
            <img className="hidden" ref={spaceshipRef} src="/spaceship.png" style={{ width: "60px" }}  alt="spacehip"/>
            <img className="hidden" ref={bubbleRef} src="/bubble.svg" style={{ width: "60px" }} alt="bubble"/>
            <div >Mouse: {mouseX + "," + mouseY}  Bullet: {bulletX + "," + bulletY}  Score: {27 - bubbles.length}</div>
            <canvas onClick={handleMouseClick} onMouseMove={onMouseMove} width={1080} height={720} style={{ border: '4px dashed #0000001f' }} ref={canvasRef} {...props} />
        </div>
    )
}

export default Game