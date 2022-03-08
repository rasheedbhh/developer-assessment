//created an array of users that will be displayed in the matches page in the matches section instead of 
// having the users be hard coded we will loop thorugh them in the html file and display them there.
import { Match } from "./matches"
export const MATCHES:Match[] = [
    {
        id: 1,
        name: 'Nancy',
        image: 'assets/images/girl1.jpg'
    },
    {
        id: 2,
        name: 'Samira',
        image: 'assets/images/girl2.jpg'
    },
    {
        id: 3,
        name: 'Najwa',
        image: 'assets/images/girl3.jpg'
    },
    {
        id: 4,
        name: 'Sandra',
        image: 'assets/images/girl4.jpg'
    }


]