import HomeBgEffect from '../images/HomeBgEffect.svg'; 
import Homebg from '../images/HomeBg.png'; // Adjust the path to where your image is located.

function HomeScreen() {
    return (
        <div style={{ backgroundImage: `url(${Homebg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            ...
            <div className="btn-container">
                <button>Click Me</button>
            </div>
        </div>
    );
}

export default HomeScreen;
