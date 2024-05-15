import ListingSingleView from "@components/listings/listing-single-view";
import QueryPageProvider from "providers/query-page-provider";
import React from "react";

const ListingPage = () => {
  return (
    <QueryPageProvider>
      <ListingSingleView />
    </QueryPageProvider>
  );
};

export default ListingPage;
