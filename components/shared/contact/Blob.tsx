const Blob = () => {
  return (
    <div className="absolute opacity-80  bottom-0">
      <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-72 h-72">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(4, 95, 255, 0.69)" offset="0%" />
            <stop id="stop2" stopColor="rgba(64.662, 190.562, 233.442, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M25.1,-30.7C31.5,-24.6,34.7,-15.7,36.9,-6.1C39.1,3.5,40.2,13.6,35.7,20C31.3,26.4,21.4,28.9,12.5,30.4C3.6,31.9,-4.1,32.3,-11.9,30.5C-19.7,28.7,-27.5,24.5,-31.2,18.1C-34.9,11.6,-34.5,2.8,-32.3,-5C-30.1,-12.8,-26.1,-19.6,-20.5,-25.8C-14.8,-32.1,-7.4,-37.7,1,-38.9C9.4,-40.1,18.8,-36.8,25.1,-30.7Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        />
      </svg>
    </div>
  );
};

export default Blob;
