import React from "react";
import { useState } from "react";

const AddProduct = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      console.log(e)
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="bg-green-600">
            <div className="text-center">Add Product</div>
            <div>
                <div>
                    <span>Ảnh sản phẩm</span>
                    <input onChange={handleImageChange} type="file" accept="image/*"/>
                    {image && <img src={URL.createObjectURL(image)} alt="Product"/>}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
