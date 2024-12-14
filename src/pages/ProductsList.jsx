import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import database from "../firebase.js";

function ProductsList() {
  const value = collection(database, "prod");
  const [val, setValue] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");

  // state management for the edit modalbox
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
// fetching the response from fireStore 
  useEffect(() => {
    const getData = async () => {
      try {
        const dbval = await getDocs(value);
        const data = dbval.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setValue(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []);
// handleDelete
  const handleDelete = async (id) => {
    try {
      const deleteVal = doc(database, "prod", id);
      await deleteDoc(deleteVal);
      setValue((prevVal) => prevVal.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };
// HandleEdit
  const handleEdit = (id, name, price, address, location, description, features) => {
    setEditId(id);
    setName(name);
    setPrice(price);
    setAddress(address);
    setLocation(location);
    setDescription(description);
    setFeatures(features);
    setIsEditing(true);
  };
// HandleUpdate
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(database, "prod", editId);
      await updateDoc(docRef, {
        name,
        price,
        address,
        location,
        description,
        features,
      });
      setValue((prevVal) =>
        prevVal.map((item) =>
          item.id === editId
            ? { ...item, name, price, address, location, description, features }
            : item
        )
      );
      alert("Product updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-center print:hidden text-purple-900 text-4xl mb-4 font-semibold tracking-tight sm:text-5xl">
        Products List
      </h1>

      {val.length === 0 ? (
        <p className="text-center bg-purple-900 text-white rounded-sm border shadow-sm p-12 mt-4 text-xl font-bold tracking-light">
          No products available
        </p>
      ) : (
        // Checks wether the data is available unless display message for user
        <div>
          

          <div className="overflow-x-auto print-area">
            <table className="table-auto border-collapse w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-purple-900 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Address</th>
                  <th className="px-4 py-2 text-left">Location</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Features</th>
                  <th className="px-4 py-2 text-left">Operation</th>

                </tr>
              </thead>
              <tbody>
                {val.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">${item.price}</td>
                    <td className="px-4 py-2">{item.address}</td>
                    <td className="px-4 py-2">{item.location}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2">{item.features}</td>
                    <td className="flex ml-2 space-x-2">
                     <button
                       onClick={() =>
                         handleEdit(
                           item.id,
                           item.name,
                           item.price,
                           item.address,
                           item.location,
                           item.description,
                           item.features
                         )
                       }                    
                         className="px-2 py-1 bg-blue-500 text-white rounded"
                     >
                       Edit
                     </button>                     <button
                       className="px-2 py-1 bg-red-500 text-white rounded"
                       onClick={() => handleDelete(item.id)}
                     >
                      Delete
                     </button>
                   </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

     <div className="block " >

           <Link to="/" className="print-hidden mb-4 px-4 py-2  text-white rounded-lg bg-purple-900 mt-24 ">
        Add Product
      </Link>

            <button
            onClick={handlePrint}
            className=" print-hidden mb-4 px-4 mx-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Print Products
          </button>
     </div>



{/* Modal box for editing content  */}
      {isEditing && ( 
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">Edit Product</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Features</label>
                <input
                  type="text"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-900 text-white px-4 py-2 rounded-lg"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
