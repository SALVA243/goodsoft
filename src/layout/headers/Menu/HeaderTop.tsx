import Link from "next/link";

const HeaderTop = ({ style }: any) => {
  return (
    <div
      className={`navbar-top ${
        style ? "navtop--two" : "bgc-black navtop--one"
      }`}
    >
      <div className="container">
        <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
          <ul className="topbar-left">
            {style ? (
              <>
                <li>
                  <b>
                    Call now -{" "}
                    <Link href="callto:0816162254">+(243)816162254</Link>
                  </b>
                </li>
                <li>Kinshasa, Gombe, 69, Av. Mont des Arts</li>
              </>
            ) : (
              <>
                <li>
                  <i className="flaticon-pin"></i> Kinshasa, Gombe, 69, Av. Mont
                  des Arts
                </li>
                <li>
                  <i className="flaticon-phone-call"></i>+(243)816162254
                </li>
                <li className="gap-2">
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.096"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                        stroke="#00a3f7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="#00a3f7"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />{" "}
                    </g>
                  </svg>
                  goodsoftwarerdc@gmail.com
                </li>
              </>
            )}
          </ul>
          <ul className="topbar-right">
            <li className="social-area">
              <Link href="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
