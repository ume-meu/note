import React from "react";
import moment from "moment";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border-[#bac6fd] rounded-xl p-4 bg-[#bac6fd] hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        
        <h6 className="text-[18px] font-medium text-[#463999]">{title?.slice(0, 40)}</h6>

        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-[#e6effd]"}`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-[14px] text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <span className="text-[9px] text-slate-500">
        {moment(date).format("Do MMM YYYY")}
      </span>

      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500">
          {tags.map((item) => `#${item}`)}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn text-[#e6effd] hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn text-[#e6effd] hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
