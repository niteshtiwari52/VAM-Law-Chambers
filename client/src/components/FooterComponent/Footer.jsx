import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const services = [
    {
      id: 1,
      name: "Civil Law",
      url: "/civil-law",
    },
    {
      id: 2,
      name: "Criminal Law",
      url: "/criminal-law",
    },
    {
      id: 3,
      name: "Family Law",
      url: "/family-law",
    },
  ];
  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      icons: <FaInstagram size={25} />,
      url: "https://www.instagram.com/",
    },
    {
      id: 2,
      name: "twitter",
      icons: <FaXTwitter size={25} />,
      url: "https://twitter.com/",
    },
    {
      id: 3,
      name: "Linkedin",
      icons: <FaLinkedin size={25} />,
      url: "https://www.linkedin.com/",
    },
    {
      id: 4,
      name: "Youtube",
      icons: <FaYoutube size={25} />,
      url: "https://www.youtube.com/",
    },
  ];
  const company = [
    {
      id: 1,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 2,
      name: "Our Team",
      url: "/our-team",
    },
    {
      id: 3,
      name: "Blogs",
      url: "/blog",
    },
  ];
  return (
    <>
      <footer className=" mt-8 bg-[#222733] text-white lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <div className="absolute w-full h-full bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55979.75322617454!2d77.21976474579031!3d28.7274772249577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe98f8955b47%3A0xc7e6e44bb18a988d!2sBlock%20F%2C%20West%20Karawal%20Nagar%2C%20Karawal%20Nagar%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1713352282578!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{
                border: "0",
                width: "100%",
                height: "100%",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-base uppercase tracking-wide text-white">
                  {" "}
                  Call us{" "}
                </span>

                <a
                  href="ht"
                  className="block  text-base font-medium text-white hover:opacity-75 hover:text-[#e9bc23] md:text-xl"
                >
                  0123456789
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-sm text-white">
                <li>Monday to Friday: 10am - 5pm</li>
                <li>Weekend: 10am - 3pm</li>
              </ul>

              {/* Social Media */}
              <ul className="mt-8 flex gap-6">
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75 hover:text-[#e9bc23]"
                    >
                      <span className="sr-only">{item.name}</span>

                      {item.icons}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-white">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  {services.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="text-white transition hover:opacity-75 hover:text-[#e9bc23]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  {company.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="text-white transition hover:opacity-75 hover:text-[#e9bc23]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="/terms-condition"
                    className="text-white transition hover:opacity-75 hover:text-[#e9bc23]"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/privacy-policy"
                    className="text-white transition hover:opacity-75 hover:text-[#e9bc23]"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-white sm:mt-0">
                &copy; {new Date().getFullYear()}. Company Name. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
