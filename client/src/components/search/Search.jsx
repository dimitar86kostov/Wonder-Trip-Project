
import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function Search({
    searching
}) {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    searching(email)
    return (
        <div >
        
            <Input
                type="email"
                label="Search"
                value={email}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={email ? "gray" : "blue-gray"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded"
            >
                Search
            </Button>
        </div>
    );
}
