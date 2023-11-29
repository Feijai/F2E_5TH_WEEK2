import React from "react";

const DataBlock: React.FC<{
  title: string;
  img?: string;
  context?: string;
  list?: { title: string; time: string }[];
}> = ({ title, img, context, list }) => {
  return (
    <div>
      <h3 className="text-primary text-[24px]">{title}</h3>
      <div className="flex items-center text-[16px] mt-[10px]">
        {img && (
          <img src={img} alt="" className="w-[28px] h-[28px] mr-[10px]" />
        )}
        {context && <p className=" text-textColor">{context}</p>}
        {list && (
          <ul className="list-disc list-inside">
            {list.map((ele) => (
              <li
                className="text-[16px] text-textColor leading-[36px]"
                key={ele.title}
              >{`${ele.title} (${ele.time})`}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DataBlock;
