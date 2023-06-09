import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'

const NoticeForm = () => {
  const handleNotice =(event)=>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const noticeBody = form.noticeBody.value;
    const tag = form.tag.value;
    const notice ={
      title:title,
      noticeBody:noticeBody,
      tag:tag
    }

    console.log(notice);
    form.reset();
  }
  return (
    <div>
      <div className="rounded-md bg-[#7A68EC]">
      <form onSubmit={handleNotice} className='flex flex-col gap-2 bg-white p-6'>
        <label htmlFor="title">Title</label>
        <input required className="border border-[#7A68EC] rounded-md p-2" type="text" name="title" id="title" />
        <label htmlFor="noticeBody">Notice</label>
        <textarea required className="border border-[#7A68EC] rounded-md p-2" name="noticeBody" id="noticeBody" cols="30" rows="10"></textarea>
        <label htmlFor="tag">Tag</label>
        <input required className="border border-[#7A68EC] rounded-md p-2" type="text" name="tag" id="tag" />
        <button className="bg-[#7A68EC] hover:bg-[#22ca54] animation p-2 rounded-lg font-bold text-white mt-4">Post</button>
      </form>
      </div>
    </div>
  );
};

export default NoticeForm;