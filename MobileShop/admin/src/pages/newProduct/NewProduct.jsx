import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {...inputs, img: downloadURL, categories: cat};
          addProduct(product, dispatch)
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Termék létrehozása</h1>
      <form className="addProductForm" onSubmit={handleClick}>
        <div className="addProductItem">
          <label>Kép</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            
          />
        </div>
        <div className="addProductItem">
          <label>Neve</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
            required
            
          />
        </div>
        <div className="addProductItem">
          <label>Leírása</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
            required
            
          />
          </div>
          <div className="addProductItem">
          <label>Márkája</label>
          <input
            name="brand"
            type="text"
            placeholder="Iphone"
            onChange={handleChange}
            required
            
          />
        </div>
        <div className="addProductItem">
          <label>Ára</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
            required
            
          />
        </div>
        <div className="addProductItem">
          <label>Kategoriája</label>
          <input type="text" placeholder="telefon,laptop,kiegeszito" onChange={handleCat} required  />
        </div>
        <div className="addProductItem">
          <label>Készleten van-e?</label>
          <select name="inStock" required onChange={handleChange} >
            <option value="true">Igen</option>
            <option value="false">Nem</option>
          </select>
        </div>
        <button type="submit" className="addProductButton">
          Létrehozás
        </button>
      </form>
    </div>
  );
}
