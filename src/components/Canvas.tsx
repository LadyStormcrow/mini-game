import * as React from 'react'; 

export class Game extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas as HTMLCanvasElement; 
        const ctx = canvas.getContext("2d");

        let positionX: number = canvas.width/2; 
        let positionY: number = canvas.height - 30; 

        let dx: number = 2; 
        let dy: number =  -2; 

        let ballRadius = 10; 

        function drawBall() {
            ctx.beginPath(); 
            ctx.arc(positionX, positionY, ballRadius, 0, Math.PI*2); 
            ctx.fillStyle = "#0095DD"; 
            ctx.fill(); 
            ctx.closePath();
        }

        function drawFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();

            if (positionX + dx > canvas.width - ballRadius|| positionX + dx < ballRadius) {
                dx = -dx
            }

            if (positionY + dy > canvas.height - ballRadius || positionY + dy < ballRadius) {
                dy = -dy
            }

            positionX += dx; 
            positionY += dy; 
        } 

        setInterval(drawFrame, 10); 
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={480} height={320}></canvas>
            </div>
        )
    }
}