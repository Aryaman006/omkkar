const ContactUsSection = () => {
  return (
    <section className="text-[#0e0d3d] mt-20">
      {/* Header */}
      <div className="bg-[#0e0d3d] text-white py-36 text-center">
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="mt-2 text-gray-300">
          <span className="text-white font-medium">Omkkar Innovations</span> / Contact us
        </p>
      </div>

      {/* Contact Content */}
      <div className="bg-[#f6fafd] py-16 px-4 sm:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch With Us.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-md shadow-sm p-6 flex items-start gap-4">
              <div className="text-2xl text-[#5e4dbf]">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                <p>#372, HBR Layout, Bangalore, 560043</p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm p-6 flex items-start gap-4">
              <div className="text-2xl text-[#5e4dbf]">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                <p>+91 7899214433</p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm p-6 flex items-start gap-4">
              <div className="text-2xl text-[#5e4dbf]">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                <p>info@omkkarinnovations.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-md shadow-sm p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
