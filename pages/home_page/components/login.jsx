import React from "react";

function login() {
  return (
    <>
      <div className="container h-screen bg-blue-200 w-auto">
        <div className="flex items-center justify-center h-full">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center mt-4">
              <h1 className="text-2xl">Welcome back</h1>
              <p className="text-base">Sign in to your account to continue</p>
            </div>

            <div className="bg-white shadow-md rounded-lg px-8 py-6 mt-4">
              <div className="mx-auto">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="Andrew Jones"
                  className="rounded-full mx-auto mb-4"
                  width="132"
                  height="132"
                />
              </div>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    className="form-input mt-1 block w-full border border-black rounded-sm "
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4 ">
                  <label className="block text-sm font-medium ">Password</label>
                  <input
                    className="form-input mt-1 block w-full border border-black rounded-sm"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <small className="text-sm">
                    <a href="pages-reset-password.html">Forgot password?</a>
                  </small>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      value="remember-me"
                      name="remember-me"
                      checked
                    />
                    <label className="ml-2 text-sm">
                      Remember me next time
                    </label>
                  </div>
                </div>

                <div className="text-center mt-3 text-white flex justify-center space-x-4">
                  <a
                    href="index.html"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Sign in
                  </a>
                  <button
                    type="submit"
                    className="rounded-md bg-sky-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Submit
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
