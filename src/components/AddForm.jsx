import React from "react";
import "./styles/AddForm.scss";

const AddForm = () => {
  return (
    <div className="form__wrapper">
      <div className="form">
        <form>
          <h2>Share your amazing story!</h2>
          <div className="form_upload">
            <input class="input-file" id="" type="file" />
            <label tabindex="0" for="my-file" class="input-file-trigger">
              Select a file...
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
