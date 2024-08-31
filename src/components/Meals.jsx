import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";

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
        return <p>Fetching meals...</p>
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