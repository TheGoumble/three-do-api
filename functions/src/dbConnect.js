import { initializeApp, cert, getApps} from "firebase-admin"
import { getFirestore} from "firebase-admin/firestore"
import { credentials } from "../credentials"

export default function dbConnect(){
    getApps() //returns an array of all the Firebase services (e.g. Firestore) that we are connected to
    if(!getApps().length){
        //not yet conneted
        initializeApp({
            credential: cert(credentials)
        })

    }
    return getFirestore()
}