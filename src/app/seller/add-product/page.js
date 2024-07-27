"use client";
import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import { FileUploader } from "react-drag-drop-files";
import Image from "next/image";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const AddProduct = () => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    images: [],
  });
  const onChangeInput = (value, key) => {
    setProductForm({ ...productForm, [key]: value });
  };
  const handleUploadFile = (value, key) => {
    setProductForm({ ...productForm, [key]: [...productForm[key], ...value] });
  };
  return (
    <div className="min-w-screen min-h-screen p-10 bg-gray-400">
      <div className=" bg-white p-10 rounded-md">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-semibold">Add New Product/service </h1>
          <div className="flex flex-row gap-10">
            <button className="btn-secondary w-fit">Back to Home</button>
            <button className="btn-primary text-sm">
              Add Product/service{" "}
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-row gap-10 mb-5">
          <section className="w-3/5 flex flex-col gap-5">
            <div>
              <label>Product/service name</label>
              <input
                className="p-3 text-md w-full"
                type="text"
                onChange={(e) => onChangeInput(e.target.value, "name")}
                placeholder="Enter Product name"
              />
            </div>
            <div className="flex flex-row items-center">
              <div>
                <label>Price</label>
                <input
                  className="p-3 text-md w-full"
                  type="number"
                  onChange={(e) => onChangeInput(e.target.value, "price")}
                  placeholder="Enter Price"
                />
              </div>
              <p className="mt-8 px-2 text-blue-800 font-mono">- Per -</p>
              <div>
                <label>Unit</label>
                <input
                  className="p-3 text-md w-full"
                  type="text"
                  onChange={(e) => onChangeInput(e.target.value, "Unit")}
                  placeholder="Enter Unit"
                />
              </div>
            </div>
            <div>
              <label>Description</label>
              <TextEditor
                className="w-full h-[300px] pb-12"
                onChange={(value) => onChangeInput(value, "description")}
                handelOnChange
              />
            </div>
          </section>
          <section className="w-2/5 flex flex-col gap-5">
            <div>
              <label>Category</label>
              <input
                className="p-3 text-md w-full"
                type="text"
                onChange={(e) => onChangeInput(e.target.value, "category")}
                placeholder="Enter Product Category"
              />
            </div>
            <div>
              <label>Sub Category</label>
              <input
                className="p-3 text-md w-full"
                type="text"
                onChange={(e) => onChangeInput(e.target.value, "subcategory")}
                placeholder="Enter Product Sub-Category"
              />
            </div>

            <MultiFileUploader
              files={productForm?.images}
              onChange={(value) => handleUploadFile(value, "images")}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;

const TextEditor = ({ className, value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["clean"], // Remove formatting button
    ],
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        className={`${className}`}
        // value={value}
        onChange={onChange}
        modules={modules}
        formats={[
          "header",
          "font",
          "list",
          "bold",
          "italic",
          "underline",
          "strike",
          "align",
        ]}
      />
    </div>
  );
};



export const MultiFileUploader = ({ onChange, files = [] }) => {
  const fileTypes = ["JPEG", "PNG", "GIF"];
  return (
    <div className="w-full">
      <h1>Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={onChange}
        name="file"
        types={fileTypes}
      />
      <ul className="flex flex-row gap-2 overflow-x-scroll">
        {files?.length > 0 ? (
          files?.map((file, index) => {
            return (
              <li
                key={index}
                className="h-[150px] w-[150px] rounded-md  border-2"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="w-ful h-full object-cover"
                />
              </li>
            );
          })
        ) : (
          <li className="h-[150px] w-full flex items-center  text-center">
            <p className="m-auto">no files uploaded yet</p>
          </li>
        )}
      </ul>
    </div>
  );
};
