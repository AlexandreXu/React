import data from '../../data.json';
import Apartment from '../../components/Apartment/Apartment';

const Home = () => {
    const lastSixApartments = data.slice(Math.max(data.length - 6, 0));

    return (
        <>
            <h1>Home Page</h1>

            <div className="App-content">
                {data.slice(Math.max(data.length - 6, 0)).map((apartment) => (
                    <Apartment key={apartment.id} item={apartment}/>
                ))}
            </div>
        </>
    )
}

export default Home;