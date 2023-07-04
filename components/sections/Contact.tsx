import Blob from "../shared/contact/Blob";

const Contact = () => {
  return (
    <div id="contact" className="relative w-full h-screen mb-4">
      <div className="h-full p-6 ps-0 min-[1025px]:ps-52 pe-0 min-[1025px]:pe-32 border-2">
        <div className="z-10 border-2 border-pink-600">
          <p>Contact</p>
        </div>
        <Blob />
      </div>
    </div>
  );
};

export default Contact;
