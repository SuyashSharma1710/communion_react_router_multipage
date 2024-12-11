import React from "react";
import { Router, Link } from "react-router-dom";
function Login() {
  const logo = (
    <div className="hover:scale-105 transition w-40 mx-auto lg:w-96">
      <svg
        viewBox="0 0 1024 1024"
        className="icon"
        style={{
          verticalAlign: "middle",
          fill: "#000000",
          overflow: "hidden",
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M801.4848 183.552H265.984a37.2736 37.2736 0 0 1-37.2736-37.2736v-0.768a37.2736 37.2736 0 0 1 37.2736-37.2736h535.5008a37.2736 37.2736 0 0 1 37.2736 37.2736v0.768a37.2736 37.2736 0 0 1-37.2736 37.2736z"
            fill="#FF6339"
          ></path>
          <path
            d="M766.8736 152.832H229.4272c3.2256 17.4592 18.5344 30.72 36.9664 30.72h534.7328a37.632 37.632 0 0 0 37.632-37.632 37.632 37.632 0 0 0-37.632-37.632h-18.432v27.392c0 6.5536 0 17.152-15.8208 17.152z"
            fill="#F94A21"
          ></path>
          <path
            d="M801.4848 198.912H220.5696c-29.0304 0-52.6336-23.6032-52.6336-52.5824v-0.768c0-29.0304 23.6032-52.5824 52.6336-52.5824h580.9152c29.0304 0 52.6336 23.6032 52.6336 52.5824v0.768c0 28.9792-23.6032 52.5824-52.6336 52.5824zM220.5696 123.648c-12.0832 0-21.9136 9.8304-21.9136 21.8624v0.768c0 12.0832 9.8304 21.8624 21.9136 21.8624h580.9152c12.0832 0 21.9136-9.8304 21.9136-21.8624v-0.768c0-12.0832-9.8304-21.8624-21.9136-21.8624H220.5696z"
            fill="#333333"
          ></path>
          <path
            d="M134.0928 390.5024c-22.9888 63.744 17.7152 134.5536 83.8144 141.4144 3.584 0.3584 7.2704 0.5632 10.9568 0.5632 48.9472 0 90.1632-33.792 102.656-79.8208C344.0128 498.688 385.2288 532.48 434.176 532.48s90.1632-33.792 102.656-79.8208C549.3248 498.688 590.5408 532.48 639.488 532.48s90.1632-33.792 102.656-79.8208C754.6368 498.688 795.8528 532.48 844.8 532.48c1.8432 0 3.6864-0.0512 5.4784-0.1536 68.7104-3.584 112.9984-76.6464 88.7296-142.592l-47.9232-114.8416c-7.2192-17.2544-23.7568-28.4672-42.0864-28.4672H223.4368c-18.432 0-35.072 11.3152-42.1888 28.7744l-47.1552 115.3024z"
            fill="#FF6339"
          ></path>
          <path
            d="M877.824 384.3584c10.5472 25.6 5.5808 73.1648-24.1152 91.9552-24.1664 15.3088-60.0064 17.5104-111.104-22.3232 12.9536 45.312 53.8112 78.4896 102.2464 78.4896 1.8432 0 3.6864-0.0512 5.4784-0.1536 68.7616-3.584 112.9984-76.6464 88.7296-142.592l-47.9232-114.8416c-7.2192-17.2544-23.7568-28.4672-42.0864-28.4672h-34.8672c19.8144 42.1888 56.064 119.552 63.6416 137.9328zM639.488 532.5312c48.64 0 89.6512-33.3824 102.4-79.0016-4.2496-3.328-8.6016-6.912-13.0048-10.8544-40.6016 54.4768-115.712 81.4592-192.0512 10.0352 12.544 46.0288 53.7088 79.8208 102.656 79.8208zM434.176 532.5312c48.9472 0 90.1632-33.792 102.656-79.8208-71.3728 48.384-139.2128 75.4176-205.3632 0 12.544 46.0288 53.76 79.8208 102.7072 79.8208zM128.7168 412.2112c-8.1408 57.1904 30.5152 113.6128 89.1392 119.7568 3.584 0.3584 7.2704 0.5632 10.9568 0.5632 48.9472 0 90.1632-33.792 102.656-79.8208-53.1968 31.2832-192.7168 81.152-202.752-40.4992z"
            fill="#F94A21"
          ></path>
          <path
            d="M838.7584 547.84c-44.9024 0-85.8112-23.6544-108.9024-60.416-23.04 36.7616-63.9488 60.416-108.9024 60.416s-85.8112-23.6544-108.9024-60.416c-23.04 36.7616-63.9488 60.416-108.9024 60.416s-85.8112-23.6544-108.9024-60.416C271.3088 524.2368 230.4 547.84 185.4464 547.84c-4.4032 0-8.8576-0.2048-13.1584-0.6656-37.3248-3.7888-70.2464-24.4736-90.368-56.7296-20.7872-33.3312-24.9344-73.5744-11.3664-110.336 0.1024-0.2048 0.1536-0.4096 0.256-0.6144l5.632-13.4656a15.37536 15.37536 0 0 1 28.3648 11.8784l-5.5296 13.1584c-10.1376 27.7504-6.9632 58.0096 8.704 83.1488 15.0528 24.1152 39.6288 39.6288 67.4304 42.4448 3.2768 0.3584 6.656 0.512 10.0352 0.512 43.6736 0 82.3808-29.3888 94.1056-71.424a15.34464 15.34464 0 0 1 29.5936 0C320.8192 487.7824 359.5264 517.12 403.2 517.12c43.6736 0 82.3808-29.3888 94.1056-71.424a15.34464 15.34464 0 0 1 29.5936 0c11.7248 42.0352 50.3808 71.424 94.1056 71.424 43.6736 0 82.3808-29.3888 94.1056-71.424a15.34464 15.34464 0 0 1 29.5936 0c11.7248 42.0352 50.3808 71.424 94.1056 71.424 1.6896 0 3.3792-0.0512 5.0176-0.1024 28.928-1.4848 54.8352-16.4864 70.9632-41.1648 16.5888-25.344 20.1728-57.2928 9.6768-85.504l-50.688-118.6304a33.11104 33.11104 0 0 0-30.5152-20.1216H179.7632c-13.4144 0-25.3952 7.9872-30.5664 20.3776l-4.8128 11.52a15.37536 15.37536 0 0 1-28.3648-11.8784l4.8128-11.52a63.7952 63.7952 0 0 1 58.9312-39.2192h663.4496c25.6 0 48.6912 15.2064 58.7264 38.8096l50.8416 118.9376c0.1024 0.2048 0.1536 0.4096 0.256 0.6144 14.1312 37.4784 9.4208 79.872-12.5952 113.4592-21.6064 32.9728-56.2688 52.992-95.1296 54.9888-2.1504 0.1536-4.352 0.1536-6.5536 0.1536z"
            fill="#333333"
          ></path>
          <path
            d="M108.6464 341.76c-1.9968 0-3.9936-0.4096-5.9392-1.1776a15.37536 15.37536 0 0 1-8.2432-20.1216l3.7888-9.0624a15.37536 15.37536 0 0 1 28.3648 11.8784l-3.7888 9.0624a15.31904 15.31904 0 0 1-14.1824 9.4208z"
            fill="#333333"
          ></path>
          <path
            d="M877.824 604.16v240.3328c0 45.824-34.9184 82.944-77.9776 82.944H278.9888c-43.0592 0-77.9776-37.12-77.9776-82.944V604.16s55.4496-1.024 100.0448-57.856c37.0176 80.64 158.6176 98.4576 199.168 0 50.2272 99.3792 206.6432 82.2272 243.6608-5.888 38.7584 89.0368 133.9392 63.744 133.9392 63.744z"
            fill="#FFAC48"
          ></path>
          <path
            d="M877.824 844.4416V604.16s-30.9248 8.192-64.7168-1.2288v185.7536c0 56.7808-11.8784 83.2-77.9264 83.2H247.9104c-15.2576 0-32.6656-1.3824-45.5168-12.2368 6.7072 38.6048 38.4512 67.84 76.6464 67.84h520.8064c43.0592-0.0512 77.9776-37.2224 77.9776-83.0464z"
            fill="#FC992D"
          ></path>
          <path
            d="M146.176 736.0512c-8.4992 0-15.36-6.8608-15.36-15.36v-11.5712c0-8.4992 6.8608-15.36 15.36-15.36s15.36 6.8608 15.36 15.36v11.5712c0 8.4992-6.8608 15.36-15.36 15.36z"
            fill="#333333"
          ></path>
          <path
            d="M205.6192 387.2256a12.78464 12.78464 0 0 1-11.8272-17.7152l6.5024-15.616a12.8 12.8 0 0 1 16.7424-6.912c6.5536 2.7136 9.6256 10.1888 6.912 16.7424l-6.5024 15.616c-2.048 4.9152-6.8096 7.8848-11.8272 7.8848zM227.4816 334.7456a12.78464 12.78464 0 0 1-11.8272-17.7152 35.69152 35.69152 0 0 1 33.0752-22.0672h139.8272a12.8 12.8 0 0 1 0 25.6H248.6784c-4.1472 0-7.8336 2.4576-9.4208 6.2976-1.9968 4.9152-6.7584 7.8848-11.776 7.8848zM251.2896 832.4608a12.8 12.8 0 0 1-12.8-12.8v-22.272a12.8 12.8 0 0 1 25.6 0v22.272a12.8 12.8 0 0 1-12.8 12.8zM251.2896 762.2144a12.8 12.8 0 0 1-12.8-12.8v-76.3392a12.8 12.8 0 0 1 25.6 0v76.3392a12.8 12.8 0 0 1-12.8 12.8z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M606.2592 927.4368h-148.48v-185.1904c0-23.0912 18.7392-41.8304 41.8304-41.8304h64.8192c23.0912 0 41.8304 18.7392 41.8304 41.8304v185.1904z"
            fill="#76BFFF"
          ></path>
          <path
            d="M577.6896 701.9008s-0.3584 166.4 0 180.1216c0.3584 13.7216 3.4304 33.1264-27.392 35.0208h66.6112l-4.9664-211.712-34.2528-3.4304z"
            fill="#659CF8"
          ></path>
          <path
            d="M887.2448 587.3152a15.36 15.36 0 0 0-13.1584-2.816c-3.6864 0.9216-91.2384 21.2992-127.1808-56.32-2.56-5.4784-8.192-8.9088-14.0288-8.9088-6.0416 0.0512-11.4688 3.584-13.9264 9.1136-16.5376 36.9664-51.6608 60.8768-91.6992 62.3616-42.1376 1.4848-80.5376-22.1184-102.7072-63.3344-2.7648-5.1712-8.3456-8.2432-14.1312-8.0896-5.888 0.256-11.1104 3.7888-13.4656 9.1648-16.128 36.8128-47.616 58.368-86.3744 59.1872-42.6496 0.8192-83.1488-23.1424-101.0176-59.7504a15.3088 15.3088 0 0 0-12.9024-8.6016c-5.5808-0.256-10.8544 2.4064-13.824 7.0656-50.1248 78.5408-129.3312 59.0336-132.6592 58.2144-4.608-1.2288-9.5232-0.256-13.312 2.6624-3.7888 2.9184-5.9904 7.424-5.9904 12.1856v41.3696c0 8.4992 6.8608 15.36 15.36 15.36s15.36-6.8608 15.36-15.36v-23.6544c29.7984 2.3552 88.1664-1.2288 133.12-54.9888 26.5216 35.2768 70.656 57.1904 116.5312 56.2688 42.1888-0.8704 77.7728-20.1728 100.8128-53.8624 28.7232 37.6832 70.8608 58.5216 116.3776 56.9344 42.4448-1.536 80.5888-22.528 104.7552-56.2688 35.1232 48.0768 91.2896 56.3712 129.28 52.4288v225.536c0 37.9904-30.9248 68.9664-68.9664 68.9664h-161.2288V734.72c0-31.5392-25.6512-57.1904-57.1904-57.1904H466.8416c-31.5392 0-57.1904 25.6512-57.1904 57.1904v177.4592H230.5024c-37.9904 0-68.9664-30.9248-68.9664-68.9664v-72.6016c0-8.4992-6.8608-15.36-15.36-15.36s-15.36 6.8608-15.36 15.36v72.6016c0 54.9376 44.6976 99.6864 99.6864 99.6864H793.4976c54.9376 0 99.6864-44.6976 99.6864-99.6864v-243.712c0-4.8128-2.2016-9.2672-5.9392-12.1856z m-446.8736 324.7616v-177.4592c0-14.592 11.8784-26.4704 26.4704-26.4704h108.2368c14.592 0 26.4704 11.8784 26.4704 26.4704v177.4592H440.3712z"
            fill="#333333"
          ></path>
        </g>
      </svg>
    </div>
  );

  return (
    <div>
        <div className="lg:h-screen p-10 gap-8 box-border w-full flex flex-col lg:flex-row items-center justify-evenly">
          <div className="">
            {logo}

            <p className=" hover:scale-105 transition font-protest text-orange-400 text-center">
              Innovating Events, Transforming Experiences!
            </p>
          </div>

          <div className="w-[80vw] lg:w-[35vw] border border-orange-400 hover:shadow-2xl hover:shadow-orange-400 shadow-md shadow-orange-400 hover:scale-105 transition-all overflow-hidden rounded-2xl ">
            <div className="p-4">
              <div>
                <h1 className="text-2xl text-orange-400 font-protest text-center ">
                  Login
                </h1>
              </div>

              <div>
                <form action="">
                  <div className="flex flex-col gap-8 font-oswald text-orange-400">
                    <fieldset className="border-orange-400 border rounded-2xl p-2 hover:shadow-md hover:shadow-orange-400 shadow-sm shadow-orange-400 transition-all">
                      <legend>Email</legend>

                      <input
                        className="bg-orange-400 rounded-xl p-1 text-center w-full placeholder-black text-black"
                        type="email"
                        name="email"
                        placeholder="Eg.johndoe@gmail.com"
                        required
                      />
                    </fieldset>

                    <fieldset className="border-orange-400 border rounded-2xl p-2 hover:shadow-md hover:shadow-orange-400 shadow-sm shadow-orange-400 transition-all">
                      <legend>Password</legend>

                      <input
                        className="bg-orange-400 rounded-xl p-1 text-center w-full placeholder-black text-black"
                        type="password"
                        name="password"
                        placeholder="Eg.Password@1234"
                        required
                      />
                    </fieldset>

                    <button
                      type="submit"
                      className="hover:bg-orange-400 hover:shadow-md hover:shadow-orange-300 hover:text-black rounded-full hover:text-2xl transition-all h-10"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="font-oswald text-orange-400 text-center mt-4">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-orange-600 transition-all font-protest"
                      href="#"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
