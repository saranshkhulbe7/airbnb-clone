import React from "react";

function Label({ title }) {
  return (
    <div>
      <div></div>
      <div className="bg-white text-red-400 text-sm min-w-[30px] max-w-[150px] rounded-xl border-2 text-center font-semibold translate-y-[-35px]">
        {title}
      </div>
    </div>
  );
}

export default Label;
