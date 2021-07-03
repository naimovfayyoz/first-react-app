import { placeholder } from "@babel/types";
import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ handleChange }) => (
  <div class="search-box">
    <input
      type="text"
      className="input-search"
      placeholder="Search..."
      onChange={handleChange}
    />
  </div>
);
