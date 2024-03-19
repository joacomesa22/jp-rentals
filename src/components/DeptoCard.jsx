import { getDownloadURL, ref } from "firebase/storage";
import { listAll } from "firebase/storage";
import { storage } from "../firebase";
import { useEffect, useState } from "react";

const DeptoCard = ({ depto }) => {
  const { title, barrio, details, id } = depto;
  const imgListRef = ref(storage, `${id}`);
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    listAll(imgListRef).then((res) =>
      getDownloadURL(res.items[0]).then((url) => {
        setImgURL(url);
      })
    );
  }, []);
  return (
    <article className="relative group max-w-[380px] rounded-md overflow-hidden group bg-[var(--white)]">
      <a href={`/departamento/${id}`}>
        <div className="relative h-full group-hover:h-[90%] transition-all z-10">
          <div className="absolute w-full h-full bg-gradient-to-t from-black/60"></div>
          <img
            src={imgURL}
            alt="Imaageeen"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3">
            <h4 className="font-bold text-l">{title}</h4>
            <p className="text-sm">{barrio}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-[var(--darkest)] w-full h-[10%] text-sm bg-[var(--lightYellow)]">
          <p>{details.dorms} Dormitorios</p>
          <p>{details.banos} Baños</p>
          <p>{details.huespedes} Huespedes</p>
        </div>
      </a>
    </article>
  );
};

export default DeptoCard;
