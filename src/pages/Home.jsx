import { Link } from "react-router-dom"
import { ArrowDownRight02Icon } from "hugeicons-react"
import { useState } from "react"
import database from '../firebase.js'
import { addDoc, collection } from "firebase/firestore"
function Home() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [address, setAddress] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('');
    
    const value = collection(database, "prod");


    // const handleClick = async (e) => {
    //     await addDoc(value, {
    //         name: name,
    //         price: price,
    //         address: address,
    //         location: location,
    //         description: description,
    //         features: features })
    //     e.preventDefault();
    // }
 
    const handleClick = async (e) => {
        e.preventDefault(); // Prevent form submission
        try {
            await addDoc(value, {
                name,
                price,
                address,
                location,
                description,
                features,
            });
            // console.log("Document successfully written!");
    
            // Clear the form fields by resetting the state variables
            setName('');
            setPrice('');
            setAddress('');
            setLocation('');
            setDescription('');
            setFeatures('');
        } catch (error) {
             console.error("Error adding document: ", error);
        }
    };
    
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl text-purple-900 font-semibold tracking-tight sm:text-5xl">
                Property List
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
                Fill in the products available
            </p>
        </div>
            <form action="" className="mx-auto mt-16 max-w-xl sm:mt-20 ">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <fieldset className="">
                        <label htmlFor="" className="block text-sm text-purple-900 font-semibold ">Product Name</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Enter Product Name"
                                className=" block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 " />
                        </div>
                    </fieldset>

                    <fieldset className="">
                        <label htmlFor="" className="block text-sm text-purple-900 font-semibold ">Price</label>
                        <div className="mt-2 5">
                            <input
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                placeholder="Enter Product Price"
                                className=" block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 " />
                        </div>
                    </fieldset>

                    <fieldset className="">
                        <label htmlFor="" className="block text-sm text-purple-900 font-semibold ">Address</label>
                        <div className="mt-2 5">
                            <input type="text"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                placeholder="Enter Address"
                                className=" block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 " />
                        </div>
                    </fieldset>
                    <fieldset className="">
                        <label htmlFor="" className="block text-sm text-purple-900 font-semibold ">Location</label>
                        <div className="mt-2 5">
                            <input
                                type="text"
                                onChange={(e) => setLocation(e.target.value)}
                                value={location}
                                placeholder="Enter Location"
                                className=" block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 " />
                        </div>
                    </fieldset>
                    <fieldset className="">
                        <label htmlFor="" className="block text-sm text-purple-900 font-semibold ">Description</label>
                        <div className="mt-2 5">
                            <input
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                placeholder="Product Description"
                                className=" block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 " />
                        </div>
                    </fieldset>
                    <fieldset className="">
                        <label htmlFor="" className="block text-sm font-semibold text-purple-900 ">Product Features</label>
                        <div className="mt-2 5">
                            <input type="text"
                                onChange={(e) => setFeatures(e.target.value)}
                                value={features}
                                placeholder="Product Features"
                                className=" block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 " />
                        </div>
                    </fieldset>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        onClick={handleClick}
                        className=" w-full rounded-md bg-purple-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <hr  className='bg-purple-500 mt-4'/>
            <Link to='/productslist' className="flex border w-24 h-full underline mt-12 px-3.5 py-2.5 ">
                View Product  <ArrowDownRight02Icon className="w-5 text-gray-900" />
            </Link>
        </div>


    )
}

export default Home