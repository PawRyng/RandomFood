// library
import axios from "axios";

// state
import { useAppState } from '../Controllers/appState';

export default function Loader({ params }) {
    const { appState, setAppState } = useAppState();

    if (params.id === "newElement") {
        const respond = appState;
        return { respond };
    } else {
        const respond = params.id;
        return { respond };
    }
}

        // axios.post('http://localhost:3001/test',{
        //         vege,
        //         diet,
        //         calories: callories,
        //         easyCooking:hard,
        //         fastCooking: fast
        //     })
        //     .then(function (response) {
        //         // handle success
        //         console.log(response.data);
        //       })
        //       .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //       })
        //       .finally(function () {
        //         // always executed
        //       });