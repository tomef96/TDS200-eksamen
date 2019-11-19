import Timestamp = firebase.firestore.Timestamp;

interface IRoom {
    image: string;
    position: string;
    price: number;
    description: string;
    availableStart: any;
    availableEnd: any;
}
