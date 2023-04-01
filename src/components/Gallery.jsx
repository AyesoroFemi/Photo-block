import React from "react";

function Gallery({
  title,
  count,
  centralImage,
  leftImage,
  middleImage,
  rightImage,
}) {
  return (
    <div className="rounded-2xl bg-white p-4 my-10 lg:my-4">
      <div className="rounded-2xl mb-4">
        <img className="rounded-2xl" src={centralImage} alt="" />
      </div>
      <div className="flex gap-4">
        <div>
          <img className="rounded-2xl" src={leftImage} alt="" />
        </div>
        <div>
          <img className="rounded-2xl" src={middleImage} alt="" />
        </div>
        <div>
          <img className="rounded-2xl" src={rightImage} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-3 font-semibold">
        <p>{title}</p>
        <div className="flex items-center gap-1">
          <i class="bx bx-image-alt"></i>
          <span className="text-sm">{count}</span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
