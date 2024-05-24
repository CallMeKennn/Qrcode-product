import React from "react";
import { useState } from "react";

const AddProduct = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        console.log(e);
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="bg-green-600">
            <div className="text-center">Add Product</div>
            <div>
                <div className="w-1/4">
                    <label class="file-upload">
                        <input
                            type="file"
                            multiple="multiple"
                            name="fileToUpload"
                            id="fileToUpload"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </label>
                    {image && <img className="w-full h-auto object-cover object-center m-0" src={URL.createObjectURL(image)} alt="Product" />}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
