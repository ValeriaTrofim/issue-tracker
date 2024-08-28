import React from "react";
import Pagination from "./components/Pagination";

const IssuesPage = () => {
  return <Pagination itemCount={100} pageSize={10} currentPage={10} />;
};

export default IssuesPage;
