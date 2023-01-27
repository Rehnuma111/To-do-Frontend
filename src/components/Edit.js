import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";

const EditItem = () => {
  const url = app_config.api_url;
  const [initialData, setInitialData] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const itemId = useParams();

  const getDataByid = () => {
    // console.log(itemId);
    fetch(url + "/todo/getbyid/" + itemId.id)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInitialData(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getDataByid();
  }, []);

  const updateSubmit = (data) => {
    console.log(data);
    fetch(url + "/todo/update/" + itemId.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Updated successfully",
          });
        }
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      {isloading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container mt-5 bg-light d-flex justify-content-center">
          <div className="card  p-4 m-5 ">
            <Formik initialValues={initialData} onSubmit={updateSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h1 className="text-center">Update Todo List </h1>
                  <input id="item"
                    className="form-control p-3 w-100"
                    // style={{width:"50rem"}}
                    type="text"
                    placeholder="Enter Title"
                    value={values.item}
                    onChange={handleChange} />
                  <button className="btn btn-success mt-3 w-50 mx-auto d-flex justify-content-center" type="submit">
                    Update Data
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditItem;
