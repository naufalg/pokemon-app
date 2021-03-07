import React from "react";
import { PaginationWrapper, PageButton } from "./pokedex.style";

export default function Pagination() {
//   const pageClick = (type) => {
//     if (type === "prev") {
//       setCurrentUrl(data.previous);
//     } else {
//       setCurrentUrl(data.next);
//     }
//   };

  return (
    <PaginationWrapper>
      {/* {data.previous && (
        <PageButton
          onClick={() => {
            pageClick("prev");
          }}
        >
          Prev
        </PageButton>
      )}
      {data.next && (
        <PageButton
          onClick={() => {
            pageClick("next");
          }}
        >
          Next
        </PageButton>
      )} */}
    </PaginationWrapper>
  );
}
