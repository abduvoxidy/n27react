import React from "react";
import { useRef } from "react";

export default function FileUpload() {
  const inputRef = useRef();

  return (
    <div className="flex justify-center">
      <div
        onClick={() => {
          inputRef.current.click();
        }}
        className="w-[200px] h-[60px] bordered p-5 flex justify-center bg-[#cfc4c4] rounded cursor-pointer"
      >
        File Upload
      </div>
      <input accept="image/png" ref={inputRef} className="hidden" type="file" />
    </div>
  );
}
