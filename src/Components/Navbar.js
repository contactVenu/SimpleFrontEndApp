import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../Redux/slice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutAction());
    navigate("/login");
  }

  const userName = localStorage.getItem("user");

  return (
    <div>
      <div>
        <div
          style={{ position: "fixed", width: "100%", zIndex: "1", top: "0" }}
        >
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link
              style={{
                marginLeft: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              to={"/userDetails"}
              class="navbar-brand"
            >
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                viewBox="796 796 200 200"
                enable-background="new 796 796 200 200"
              >
                <path
                  d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100
                C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924
                s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86
                c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761
                c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719
                c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817
                C943.037,973.621,920.691,983.86,896,983.86z"
                />
              </svg>
              {"  "}
              {userName}
            </Link>
            <button
              style={{ marginTop: "0", marginLeft: "20px" }}
              class="btn btn-warning"
              onClick={logout}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;