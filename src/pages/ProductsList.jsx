// // import { useEffect, useState } from 'react'
// // import database from '../firebase.js'
// // import { addDoc, collection, getDocs } from "firebase/firestore"

// // function ProductsList() {
// //   const value = collection(database, "prod");

// //   const [val , setValue] = useState([]);

// //   useEffect(()=> {
// //     const getData  = async () => {
// //     const dbval  =  await getDocs(value)
// //       setValue(dval.docs.map(doc=> (...doc.data(), id:doc.id)))
// //     }
// //     getData()
// //   })

// //   return (
// //     <div>ProductsList


// // {
// //   val.map(values => (
// //     <h1>{values.name}</h1>
// //     <h2>{values.price}</h2>
// //   ))
// // }
// // <table className="table-auto">
// //   <thead>
// //     <tr>
// //       <th>Song</th>
// //       <th>Artist</th>
// //       <th>Year</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr>
// //       <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
// //       <td>Malcolm Lockyer</td>
// //       <td>1961</td>
// //     </tr>
// //     <tr>
// //       <td>Witchy Woman</td>
// //       <td>The Eagles</td>
// //       <td>1972</td>
// //     </tr>
// //     <tr>
// //       <td>Shining Star</td>
// //       <td>Earth, Wind, and Fire</td>
// //       <td>1975</td>
// //     </tr>
// //   </tbody>
// // </table>



// //       </div>
// //   )
// // }

// // export default ProductsList
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import database from "../firebase.js";

// function ProductsList() {
//   const value = collection(database, "prod");
//   const [val, setValue] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const dbval = await getDocs(value);
//         const data = dbval.docs.map((doc) => ({
//           ...doc.data(), // Spread document data
//           id: doc.id,    // Add document ID
//         }));
//         setValue(data); // Set the fetched data to state
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     getData();
//   }, []); // Dependency array ensures this runs only once on component mount

//   return (
//     <div className='bg-white px-6 py-24 sm:py-32 lg:px-8'>
//       <h1 className=' text-center text-purple-900 text-4xl mb-4 font-semibold tracking-tight sm:text-5xl '> Products List</h1>
//       {val.length === 0 ? (
//         <p className=" text-center bg-purple-900 text-white rounded-sm border shadow-sm p-12 mt-4 text-xl font-bold tracking-light"> No products available</p>
//       ) : (
//         // try creating a table for the data
//         val.map((item) => (
//           <table  className="product-item table-auto" key={item.id}>
//         <thead>

//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Address</th>
//             <th>Location</th>
//             <th>Description</th>
//             <th>Features</th>
//           </tr>
//         </thead>

//             {/* <h2>{item.name}</h2>
//             <p>Price: ${item.price}</p>
//             <p> {item.description}</p> */}



//                 <tbody key={item.id} > 
//                   <tr>
//                     <td>{item.name}</td>
//                     <td>{item.price}</td>
//                     <td>{item.address}</td>
//                     <td> {item.location}</td>
//                     <td>{item.description}</td>
//                     <td>{item.features}</td>
//                   </tr>
//                 </tbody>

//           </table>
//         )
//         )
//       )

//       }

//       <Link to='/' className='text-xl text-purple-900 mt-24'>
//         Add Product
//       </Link>

//     </div>
//   );
// }

// export default ProductsList;
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import database from "../firebase.js";

function ProductsList() {
  const value = collection(database, "prod");
  const [val, setValue] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dbval = await getDocs(value);
        const data = dbval.docs.map((doc) => ({
          ...doc.data(), // Spread document data
          id: doc.id,    // Add document ID
        }));
        setValue(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);
  // Dependency array ensures this runs only once on component mount

  const handleDelete = async (id) => (
  const deleteVal = doc(database, "prod",)
        deleteDoc (deleteVal)
  )
  const handleEdit = async (id, name, price, address, location, description, features) => (
    setName()
  )


  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-center text-purple-900 text-4xl mb-4 font-semibold tracking-tight sm:text-5xl">
        Products List
      </h1>

      {val.length === 0 ? (
        <p className="text-center bg-purple-900 text-white rounded-sm border shadow-sm p-12 mt-4 text-xl font-bold tracking-light">
          No products available
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-purple-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Features</th>
              </tr>
            </thead>
            <tbody>
              {val.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2"
                  >{item.name}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.address}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.features}</td>
                  <td> <button onClick={() => handleEdit(value.id,
                    value.name,
                    value.price,
                    value.address,
                    value.location,
                    value.description,
                    value.features)}>
                    Edit</button></td>
                  <td> <button onClick={() => handleDelete(value.id)}> Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Link to="/" className="text-xl text-purple-900 mt-24 block text-center">
        Add Product
      </Link>
    </div>
  );
}

export default ProductsList;
