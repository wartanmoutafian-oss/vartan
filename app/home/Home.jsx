import './Home.css';
import {Button} from './Companets/cards/buttton/Button'

const Home = (props) => {
    console.log(props);

    return (
        <div className = 'home'> 
        <h1>{props.title}</h1>
        <p>Welcome Home</p>
        <Button></Button>
        </div>
       
    );
}

export default Home 