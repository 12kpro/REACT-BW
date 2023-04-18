import { Link } from "react-router-dom";
const SiteNav = () => {
  return (
    <div className="fixed-top bg-white border-bottom " style={{ height: "55px" }}>
      <div className="d-flex align-items-center justify-content-center mt-0">
        <Link className="text-decoration-none" to="/">
          <div className="my-0 mx-2">
            <div className="d-flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                height="33px"
                fill="#0a66c2"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
        </Link>
        <div className="position-relative" style={{ paddingRight: "110px" }}>
          <input
            className="border border-0 rounded"
            type="text"
            placeholder="Cerca"
            style={{
              width: "280px",
              height: "34px",
              backgroundColor: "#eef3f8",
              paddingRight: "0.8rem",
              paddingLeft: "40px",
            }}
          ></input>
          <div
            className="position-absolute top-0 start-0 d-flex justify-content-center align-items-center fw-bold"
            style={{ width: "40px", height: "34px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <nav style={{ height: "52px" }}>
          <ul className="d-flex mt-1">
            <li className="d-flex me-5">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#666666"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                  </svg>
                </div>
                <p style={{ color: "#666", fontSize: "small" }}>Home</p>
              </Link>
            </li>
            <li className="d-flex me-5">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#666666"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                </div>
                <p style={{ color: "#666", fontSize: "small" }}>Rete</p>
              </Link>
            </li>
            <li className="d-flex me-4">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#666666"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                </div>
                <p style={{ color: "#666", fontSize: "small" }}>Lavoro</p>
              </Link>
            </li>
            <li className="d-flex me-4">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#666"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                </div>
                <p style={{ color: "#666", fontSize: "small" }}>Messagistica</p>
              </Link>
            </li>
            <li className="d-flex me-4">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#666"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                </div>
                <p style={{ color: "#666", fontSize: "small" }}>Notifiche</p>
              </Link>
            </li>
            <li className="d-flex border-end me-3" style={{ height: "48px" }}>
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center pt-1">
                  <button className="bg-transparent border border-0 pe-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                      className="rounded-circle mb-0"
                      style={{ height: "24px", width: "24px" }}
                    />
                    <p style={{ color: "#666", fontSize: "small" }}>
                      Tu
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="#666"
                          class="mercado-match"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                        </svg>
                      </span>
                    </p>
                  </button>
                </div>
              </Link>
            </li>
            <li className="d-flex me-3">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center">
                  <button className="bg-transparent border border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                    </svg>
                  </button>
                </div>
                <p style={{ color: "#666", fontSize: "small" }}>
                  Per le aziende{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="#666"
                      class="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                    </svg>
                  </span>
                </p>
              </Link>
            </li>
            <li className="d-flex">
              <Link className="text-decoration-none" to="/">
                <div className="d-flex justify-content-center"></div>
                <p
                  className="text-center"
                  style={{
                    color: "#666",
                    fontSize: "small",
                    color: "#bd8731",
                    maxWidth: "125px",
                    textDecoration: "underline",
                    lineHeight: "15px",
                  }}
                >
                  Una rete più smart? Prova Premium gratuitamente
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SiteNav;
