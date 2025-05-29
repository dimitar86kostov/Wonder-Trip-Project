import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function Search({ searching }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    searching(query);
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        onClick={handleSearch}
        size="sm"
        color={query ? "gray" : "blue-gray"}
        disabled={!query}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
  );
}
