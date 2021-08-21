import React from "react";

export const CreateForm = ({ handleInputChange, addBlog,blogForm }) => {
  return (
    <div>
      {" "}
      <form className="row" onSubmit={addBlog}>
        <div className="col-md-3">
          <input
            type="text"
            value={blogForm.title}
            placeholder="Title"
            className="form-control"
            onChange={handleInputChange}
            name="title"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            value={blogForm.author}
            placeholder="Author"
            className="form-control"
            onChange={handleInputChange}
            name="author"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            value={blogForm.url}
            placeholder="Url"
            className="form-control"
            onChange={handleInputChange}
            name="url"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
