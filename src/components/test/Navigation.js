import React from "react";
import { Pagination } from "semantic-ui-react";
import { Consumer } from "../../context";

const Navigation = () => (
  <Consumer>
      
    {value => (
      <Pagination
        activePage={value.activePage}
        totalPages={value.questions.length}
        onPageChange={value.handlePaginationChange}
        
      />
    )}
  </Consumer>
);
export default Navigation;
