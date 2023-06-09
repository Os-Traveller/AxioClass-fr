import React from "react";
import Sidebar from "../components/shared/sidebar/Sidebar";
import TopBarMiddle from "../components/shared/top_bar/TopBarMiddle";
import TopBarSide from "../components/shared/top_bar/TopBarSide";

const GlobalLayout = ({ body, side, pageName }) => {
  return (
    <main className="bg-primary-50 h-screen grid grid-cols-[280px_1fr_400px]">
      <Sidebar />
      <section className="h-full overflow-y-auto grid grid-rows-[auto_1fr]">
        {/* for top bar middle */}
        <TopBarMiddle pageName={pageName} />
        <section className="overflow-y-auto px-8">{body}</section>
      </section>
      <section className="bg-white h-full overflow-y-auto grid grid-rows-[auto_1fr]">
        {/* for top bar right */}
        <TopBarSide />
        <section className="overflow-y-auto px-6">{side}</section>
      </section>
    </main>
  );
};

export default GlobalLayout;
