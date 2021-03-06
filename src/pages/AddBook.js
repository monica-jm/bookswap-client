// import { useState, useEffect, useRef } from "react";
// import { useAuthInfo } from "../hooks/authContext";
// import { CountryRegionData } from "react-country-region-selector";
// import ReactMapGl, { Marker, NavigationControl } from "react-map-gl";
// import { createBook, uploadImages } from "../services/book";
  
//   const { Step } = Steps;
//   const { Option } = Select;
  
//   function CreateBook() {

//     const [form] = Form.useForm();
//     //Auth
//     const { user, setUser } = useAuthInfo();
//     const [current, setCurrent] = useState(-1);
//     //Location
//     const [regions, setRegions] = useState(null);
//     const [coords, setCoords] = useState([-99.1332, 19.4326]);
//     const [pointCoords, setPointCoords] = useState([-99.1332, 19.4326]);
//     const [loading, setLoading] = useState(false);
//     const [viewport, setViewport] = useState({
//       latitude: coords[1],
//       longitude: coords[2],
//       width: "100%",
//       heigth: "350px",
//       zoom: 13,
//     });
  
  
//     useEffect(() => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((result) => {
//           setCoords([result.coords.longitude, result.coords.latitude]);
//         });
//       }
//     }, [navigator.geolocation]);
  
//     useEffect(() => {
//       setViewport({
//         latitude: coords[1],
//         longitude: coords[0],
//         width: "100%",
//         height: "50vh",
//         zoom: 13,
//       });
//     }, [coords]);
  
//     useEffect(() => {
//       setPointCoords([viewport.longitude, viewport.latitude]);
//     }, [viewport]);
  
//     const handleDrag = (e) => {
//       setPointCoords(e.lngLat);
//     };
//   }
  
//   export default CreateBook;