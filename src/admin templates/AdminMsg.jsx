import { useState } from "react";
import { FaWindowClose, FaRegEye } from "react-icons/fa";

const AdminMsg = () => {
  const [openOverlay, setOpenOverlay] = useState(false);

  const openContent = (e) => {
    const parentElem =
      e.currentTarget.parentElement.parentElement.parentElement;
    const elem = parentElem.querySelector(".msg-content");
    elem.classList.toggle("open-msg");
  };

  const openOverlayFun = () => {
    setOpenOverlay(true);
  };

  return (
    <div className="main-admin-msg">
      <div
        className={`${
          openOverlay
            ? "admin-msg-overlay-bg open-overlay-block"
            : "admin-msg-overlay-bg"
        }`}
      >
        <div className="overlay-msg">
          <div className="overlay-msg-sec-one">
            <p>new message</p>
            <FaWindowClose
              onClick={() => {
                setOpenOverlay(!openOverlay);
              }}
              className="overlay-close-icon"
            />
          </div>
          <div className="overlay-msg-sec-two">
            <label htmlFor="">subject</label>
            <input type="text" name="" id="" />
            <textarea className="overlay-msg-text-area" rows={10}></textarea>
          </div>
          <div className="overly-msg-send-btn">
            <button
              onClick={() => {
                setOpenOverlay(!openOverlay);
              }}
            >
              send
            </button>
          </div>
        </div>
      </div>
      <section className="admin-msg-sec-one">
        <span>messages</span>
        <span>
          <button onClick={openOverlayFun}>new message</button>
        </span>
      </section>
      <section className="admin-msg-sec-two">
        <div className="admin-msg-sec-two-heading">
          <p>SI.no</p>
          <p>Subject</p>
          <p>status</p>
          <p>view</p>
        </div>
        <div className="admin-msg-sec-two-content">
          <div className="msg-section">
            <div>
              <p>1</p>
              <p>THis is a test subject</p>
              <p>sent</p>
              <p>
                <FaRegEye className="icon-view" onClick={openContent} />
              </p>
            </div>
            <div>
              <p className="msg-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                cumque nemo fugit obcaecati eum rem laudantium id laboriosam,
                quasi totam?
              </p>
            </div>
          </div>
          <div className="msg-section">
            <div>
              <p>2</p>
              <p>THis is a test subject</p>
              <p>sent</p>
              <p>
                <FaRegEye className="icon-view" onClick={openContent} />
              </p>
            </div>
            <div>
              <p className="msg-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                cumque nemo fugit obcaecati eum rem laudantium id laboriosam,
                quasi totam?
              </p>
            </div>
          </div>
          <div className="msg-section">
            <div>
              <p>3</p>
              <p>THis is a test subject</p>
              <p>sent</p>
              <p>
                <FaRegEye className="icon-view" onClick={openContent} />
              </p>
            </div>
            <div>
              <p className="msg-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                cumque nemo fugit obcaecati eum rem laudantium id laboriosam,
                quasi totam?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminMsg;
