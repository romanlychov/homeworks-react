import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <main className='main'>
                <h1 className='main__title'>something awesome</h1>
                <img className='img' src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt="Aerial-View-Of-Sandy-Beach" />
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus, quas ullam fuga libero incidunt repudiandae nobis, debitis adipisci, necessitatibus
                    veritatis labore culpa deleniti voluptatibus expedita rerum quis vel ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus, quas ullam fuga 
                    libero incidunt repudiandae nobis, debitis adipisci, necessitatibus veritatis labore culpa deleniti voluptatibus expedita rerum quis vel ad. Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Itaque alias quas dolorem voluptas atque inventore a velit ratione quidem dolorum at debitis iure, dignissimos porro! Blanditiis tempore dolorem minima quod?
                </p>
            </main>
        );
    }
}

export default Main;