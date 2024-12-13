
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc,  getDocs, deleteDoc } from "firebase/firestore";
import database from "../firebase.js";

function ProductsList() {
  //  create var for the database being imported
  const value = collection(database, "prod");
  // variable for the object using state management
  const  [val, setValue] = useState([]);
 
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

  //  block for delete function
 
  const handleDelete = async (id) => {
    const deleteVal = doc(database, "prod", id) // Reference the specific document
    await deleteDoc(deleteVal); 
    setValue((prevVal) => prevVal.filter((item) => item.id !== id));
  }
  const handleEdit = async (id,name, price, address, location, description , features ) => {
      setPrice(price),
      setName(name),
      setAddress(address),
      setLocation(location),
      setDescription(description),
      setFeatures(features),
      setId(id)
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-center text-purple-900 text-4xl mb-4 font-semibold tracking-tight sm:text-5xl">
        Products List
      </h1>

      {val.length === 0 ? (
        <p className="text-center bg-purple-900 text-white rounded-sm border shadow-sm p-12 mt-4 text-xl font-bold tracking-light">
          No products available
        </p>
      ) : 
      // this block is to display 2 different compoennts depending on the state of the object
       ( 
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full bg-white shadow-md rounded-lg overflow-hidden">
            {/* Table to display data store in the fireStore */}
            <thead className="bg-purple-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Features</th>
                <th className="px-4 py-2 text-left"> Operation</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Data used to properly display the data using the map function */}
              {val.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2"
                  >{item.name}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.address}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.features}</td>
                  {/* Button dor the edit and delete */}
                  <td className='flex ml-2'> <button onClick={() => handleEdit(value.id,
                    item.name,
                    item.price,
                    item.address,
                    item.location,
                    item.description,
                    item.features)}>
                    Edit</button>

                     <button className="mr-2 rounded bg-red-500 mx-auto" onClick={() => handleDelete(item.id)}> Delete</button></td>
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
