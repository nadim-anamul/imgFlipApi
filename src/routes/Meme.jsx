import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
const baseURL = 'https://api.imgflip.com/caption_image';

const Meme = () => {
  const location = useLocation();
  const [memeResult, setMemeResult] = useState(null);
  const { url, id, name, boxCount } = location.state;
  const fontRadios = useRef(null);
  const fontRadios2 = useRef(null);
  const inputDom = [];
  for (let i = 0; i < boxCount; i++) {
    const name = `boxes[${i}][text]`;
    inputDom.push(name);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const font = fontRadios.current.checked ? fontRadios.current.value : fontRadios2.current.value;
    const template_id = id;
    const formData = new FormData();
    formData.append('username', 'AnamulHasanNadim');
    formData.append('password', 'BkVaTrAhkK2L!Lk');
    formData.append('template_id', template_id);
    formData.append('font', font);
    inputDom.forEach((item) => {
      formData.append([item], document.getElementById(item).value);
    });
    axios.post(baseURL, formData).then((response) => {
      if (response.data.success) {
        setMemeResult(response.data.data.url);
      }
    });
  };
  const handleClick = () => {
    let url = memeResult;
    saveAs(url, name);
  };
  return (
    <div className="row my-5">
      {memeResult && (
        <div className="row mb-5">
          <h2 className="mb-4">The Generated Meme</h2>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={memeResult} alt="meme" />
          </div>
          <div className="col-12 col-md-6">
            <button className="btn btn-primary btn-lg mt-4" onClick={handleClick}>
              Download image
            </button>
          </div>
        </div>
      )}
      <h1 className="col-12 mb-5">Generate Meme</h1>
      <div className="col-12 col-lg-4 mb-3 mb-lg-0">
        <img className="img-fluid" src={url} alt={name} />
      </div>
      <div className="col-12 col-lg-8">
        <form onSubmit={submitHandler}>
          {inputDom.map((item, index) => (
            <div className="mb-3" key={index}>
              <label htmlFor={item} className="form-label">
                Text {index}
              </label>
              <input name={item} type="text" className="form-control" id={item} />
            </div>
          ))}
          <div className="mb-3">
            <p>Font Family</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fontRadios"
                ref={fontRadios}
                id="inlineRadio1"
                value="impact"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Impact
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fontRadios"
                ref={fontRadios2}
                id="inlineRadio2"
                value="arial"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Arial
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Meme;
