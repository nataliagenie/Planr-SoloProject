import FlightResy from "../Flight/FlightResy" 
import HotelResy from "../Hotel/HotelResy"
import RestaurantResy from "../Restaurant/RestaurantResy"
import CarResy from "../Car/CarResy"
import ActivityResy from "../Activity/ActivityResy"


// export default function Reservations ({ data }) {
//   switch (data.type) {
//     case 'flight':
//       return <FlightResy data={data} />;
//     case 'hotel':
//       return <HotelResy data={data} />;
//     case 'restaurant':
//       return <RestaurantResy data={data} />;
//     case 'car':
//       return <CarResy data={data} />;
//     case 'activity':
//       return <ActivityResy data={data} />;
//     default:
//       return null;
//   }
// }
export default function Reservations ({ data }) {

    return (
      <div className="Reservations">
      {/* <FlightResy />; */}
      {/* <HotelResy />; */}
      {/* <RestaurantResy/>; */}
      <CarResy />
      <ActivityResy />
      </div>
  )
}

