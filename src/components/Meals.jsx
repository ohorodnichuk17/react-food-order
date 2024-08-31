import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {

};

const Meals = () => {
    // const [loadedMeals, setLoadedMeals] = useState([]);

    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');
    //
    //         if(!response.ok) {
    //
    //         }
    //
    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }
    //
    //     fetchMeals();
    // }, []);

    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    console.log(loadedMeals);

    if(isLoading) {
        return <p style={{textAlign: 'center'}}>Fetching meals...</p>
    }

    if(error) {
        return <Error title="Failed to fetch meals" message={error}/>
    }

    // if(!data) {
    //     return <p>No meals found.</p>
    // }

    return (
        <ul id="meals">
            {loadedMeals.map(meal => (
               <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>
    );
};

export default Meals;