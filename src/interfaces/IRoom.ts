import Timestamp = firebase.firestore.Timestamp;

interface IRoom {
    id: string;
    image: string;
    position: string;
    price: number;
    description: string;
    availableStart: any;
    availableEnd: any;
    booked: boolean;
    bookedBy: string | undefined;
}
