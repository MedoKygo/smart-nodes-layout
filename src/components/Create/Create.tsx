import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { Input } from "postcss";
import {FiUpload} from 'react-icons/fi'
import React from "react";


const Create = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Id"
            >
              Set Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Set name"
            />
          </div>
          <div className="mb-32 mt-12">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => console.log('Clicked')}
            >
                <FiUpload/>
              Upload
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => console.log('Clicked')}
              >
                Create
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => console.log('Clicked')}
              >
                Create & Process
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
