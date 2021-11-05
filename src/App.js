import Particles from 'react-tsparticles'
import './index.css'
import r1 from './img/java&scripts.png'
import r2 from './img/angularLogo.png'
import r3 from './img/react.png'
import r4 from './img/typescript.jpg'
import r5 from './img/vue.webp'

function App() {
    return (
        <div className={'ha'}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 23,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "enable": true,
                            "speed": 2.5,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",//bounce
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        },
                        "shape": {
                            "type": [
                                "image"
                            ],
                            "image": [
                                {
                                    "src": `${r1}`,
                                    "height": 48,
                                    "width": 48
                                },
                                {
                                    "src": `${r2}`,
                                    "height": 68,
                                    "width": 68
                                },
                                {
                                    "src": `${r3}`,
                                    "height": 48,
                                    "width": 53
                                },
                                {
                                    "src": `${r4}`,
                                    "height": 48,
                                    "width": 48
                                },
                                {
                                    "src": `${r5}`,
                                    "height": 48,
                                    "width": 48
                                },

                            ]
                        },
                        "color": {
                            "value": "#CCC"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": .4,
                                "size_min": 26,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": true
                }}
            />
        </div>
    );
}

export default App;
