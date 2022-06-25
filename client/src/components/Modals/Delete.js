import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Alert from "../Alert";
import { Context } from "../Context";

const ModalDelete = ({ isOpen = false, onClose, imageId }) => {
  const { register, handleSubmit, formState, reset } = useForm();
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUpdateImages } = useContext(Context);

  const onSubmit = async (values) => {
    if (!imageId) return;
    setLoading(true);

    try {
      await axios.delete(`/api/images/${imageId}`, {
        headers: {
          Authorization: values.password,
        },
      });
      setUpdateImages(Math.random());
      onClose();
    } catch (error) {
      setSubmitError(error.response?.data?.error || error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    reset();
    setSubmitError(null);
  }, [isOpen, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      tabIndex="-1"
      aria-hidden="true"
      aria-modal="true"
      role="dialog"
      className={`${
        isOpen ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center bg-black bg-opacity-25`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start pb-4 pt-6 px-8 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Are you sure?
            </h3>
          </div>
          <div className="px-8 space-y-6">
            {submitError || loading ? (
              <Alert
                message={submitError}
                color={submitError ? "danger" : "dark"}
              />
            ) : (
              ""
            )}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-normal text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                type="text"
                placeholder="******************"
                className={`bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  Boolean(formState.errors.password)
                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-200 focus:ring-red-500 focus:border-red-500"
                    : ""
                }`}
                {...register("password", {
                  required: "Please enter a password",
                })}
              />
              {formState.errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formState.errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end p-6 px-8 space-x-2 rounded-b border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalDelete;
