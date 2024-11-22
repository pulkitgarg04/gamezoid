import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "./firebase"

const firestore = getFirestore(app);

function firestoree() {
    const writeData = async() => {
        const result = addDoc(collection(firestore, 'cities'), {
            name: 'Barnala',
            pinCode: 148101,
            lat: 123,
            long: 456
        })

        console.log("Result: ", result);
    }

    return (
        <div className="App">
            <h1>Firebase Firestore</h1>
            <button onClick={writeData}>Put Data</button>
        </div>
    )
}

export default firestoree;