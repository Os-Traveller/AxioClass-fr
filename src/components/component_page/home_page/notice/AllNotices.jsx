import React from "react";
import { Notice } from "./Notice";
import { noticeData } from "../../../../fake_data/noticeData";

export const AllNotices = () => {
  return (
    <div className="allNotices mt-30">
      {noticeData.map((notice, index) => (
        <Notice
          key={index}
          title={notice.title}
          description={notice.description}
          category={notice.category}
        />
      ))}
    </div>
  );
};
