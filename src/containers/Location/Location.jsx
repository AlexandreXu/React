import {useParams} from "react-router-dom";
import data from '../../data.json';

const Location = () => {
    const {id} = useParams();
    const item = data.find(element=>element.id=id)
    console.log(item)

    return (
        <>
            <h1>La location {id}</h1>
        </>
    )
}

export default Location;