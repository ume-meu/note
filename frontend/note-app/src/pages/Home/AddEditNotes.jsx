import React, { useState } from "react";
import Tag from "../../components/Input/Tag";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const AddEditNotes = ({ noteData, type, getAllNotes, onclose, showToastMessage }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);

  const [error, setError] = useState(null);

  // Add Note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully");
        getAllNotes();
        onclose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  // Edit Note
  const editNote = async () => {
    const noteId = noteData._id;

    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        getAllNotes();
        onclose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }

    setError("");
  };

  return (
    <div className="relative bg-transparent">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-transparent hover:text-[#e6effd]"
        onClick={onclose}
      >
        <MdClose className="text-xl text-[#120249] hover:text-[#e6effd]" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label text-[#332970] text-[16px] font-bold">TITLE</label>
        <input
          type="text"
          className="text-xl text-[#c8d3e7] placeholder:text-[#c8d3e7] bg-[#6d71a1] outline-none p-2 rounded-lg cursor-pointer"
          placeholder="TITLE here"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label font-bold text-[#e6effd]">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-[#c8d3e7] placeholder:text-[#c8d3e7] outline-none bg-[#6d71a1] p-2 rounded-lg cursor-pointer"
          placeholder="CONTENT here"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label font-bold text-[#e6effd]">TAGS</label>
        <Tag tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        {type === 'edit' ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default AddEditNotes;
