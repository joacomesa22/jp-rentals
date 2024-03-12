// import { getDownloadURL, ref } from "firebase/storage";
// import { listAll } from "firebase/storage";
// import { storage } from "../firebase";
// import React, { useEffect, useState } from "react";

const DptoCard = () => {
  //   const imgListRef = ref(storage, `${depto}`);
  //   const [imgURL, setImgURL] = useState("");

  //   useEffect(() => {
  //     listAll(imgListRef).then((res) =>
  //       getDownloadURL(res.items[0]).then((url) => {
  //         setImgURL(url);
  //       })
  //     );
  //   }, []);
  return (
    <div className="relative group h-[320px] w-[360px] rounded-md overflow-hidden group bg-white">
      <div className="relative h-full group-hover:h-[90%] transition-all z-10">
        <div className="absolute w-full h-full bg-gradient-to-t from-black/60"></div>
        <img
          src="./assets/img/apartment.jpg"
          alt="Imaageeen"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3">
          <h4 className="font-bold text-l">Tres Ambientes - Pileta</h4>
          <p className="text-sm">Recoleta</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-black w-full h-[10%]">
        <p>Hola</p>
        <p>Chau</p>
        <p>Caca</p>
      </div>
    </div>
  );
};

export default DptoCard;
