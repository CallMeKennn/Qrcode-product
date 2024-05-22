import React from "react";
import ListProduct from "../components/ListProduct";
import AddProduct from "../components/AddProduct";
import { useState } from "react";

const Admin = () => {
    const [hiddenListProduct, setHiddenListProduct] = useState(false);
    const [hiddenAddProduct, setHiddenAddProduct] = useState(false);

    return (
        <div className="bg-orange-700 flex justify-around">
            <div className="">
                <div
                    onClick={() => {
                        setHiddenAddProduct(true);
                        setHiddenListProduct(false);
                    }}
                    className="cursor-pointer"
                >
                    Add Product
                </div>
                <div
                    onClick={() => {
                        setHiddenListProduct(true);
                        setHiddenAddProduct(false);
                    }}
                    className="cursor-pointer"
                >
                    List Product
                </div>
            </div>
            <div className="">
                {hiddenListProduct && <ListProduct />}
                {hiddenAddProduct && <AddProduct />}
            </div>
        </div>
    );
};

export default Admin;
