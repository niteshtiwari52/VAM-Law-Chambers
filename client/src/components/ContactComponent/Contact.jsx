import React, { useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const Contact = () => {
  const InitialFormData = {
    name: "Nitesh",
    email: "niteshtiwari5222@gmail.com",
    phone: "9354181823",
    subject: "",
    message: "Just trial ",
  };

  const [formData, setFormData] = useState(InitialFormData);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation logic
    switch (name) {
      case "name":
        setErrors((prev) => ({ ...prev, name: value.trim() === "" }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
        }));
        break;
      case "phone":
        setErrors((prev) => ({
          ...prev,
          phone: !/^\d{10,15}$/.test(value),
        }));
        break;
      case "subject":
        setErrors((prev) => ({ ...prev, subject: value.trim() === "" }));
        break;
      case "message":
        setErrors((prev) => ({ ...prev, message: value.trim() === "" }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setIsFormSubmitting(true);

    const isValid =
      Object.values(errors).every((error) => !error) &&
      Object.values(formData).every((value) => value.trim() !== "");

    if (!isValid) {
      setIsFormSubmitting(false);
      return alert("Please fill all the details correctly.");
    }

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/contact`,
        data
      );

      if (result.data.success) {
        openModal();
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }

    setFormData(InitialFormData);
    setIsFormSubmitting(false);
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className={`w-full rounded-lg p-3 text-sm ${
                      errors.name ? "border-red-500" : "border-green-500"
                    }`}
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className={`w-full rounded-lg p-3 text-sm ${
                        errors.email ? "border-red-500" : "border-green-500"
                      }`}
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className={`w-full rounded-lg p-3 text-sm ${
                        errors.phone ? "border-red-500" : "border-green-500"
                      }`}
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className={`w-full rounded-lg p-3 text-sm ${
                      errors.subject ? "border-red-500" : "border-green-500"
                    }`}
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={`w-full rounded-lg p-3 text-sm ${
                      errors.message ? "border-red-500" : "border-green-500"
                    }`}
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isFormSubmitting}
                    className="inline-block w-full rounded-lg bg-[#222733] px-5 py-3 font-medium text-[#e9bc23] sm:w-auto"
                  >
                    {isFormSubmitting ? "Sending...." : "Send Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Code */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-bold leading-6 text-green-900"
                  >
                    <div className="text-right flex justify-end">
                      <IoMdClose
                        className="cursor-pointer"
                        size={30}
                        onClick={closeModal}
                      />
                    </div>
                    SUCCESSFUL
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-black-500">
                      Your request has been noted. A confirmation mail has also
                      been sent to you for your future reference. I will contact
                      you as soon as possible.
                    </p>
                    <p className="text-lg font-bold text-red-500">
                      Expected response time within 24 hours.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contact;
