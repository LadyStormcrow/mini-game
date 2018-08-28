import * as React from 'react'; 

export class Game extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas as HTMLCanvasElement; 
        const ctx = canvas.getContext("2d");

        let positionX: number = canvas.width/2; 
        let positionY: number = canvas.height - 30; 

        let dx: number = 2; 
        let dy: number =  -2; 

        setInterval(drawFrame, 10); 

        function drawBall() {
            ctx.beginPath(); 
            ctx.arc(positionX, positionY, 10, 0, Math.PI*2); 
            ctx.fillStyle = "#0095DD"; 
            ctx.fill(); 
            ctx.closePath();
        }

        function drawFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            positionX += dx; 
            positionY += dy; 
        } 
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={480} height={320}></canvas>
            </div>
        )
    }
}