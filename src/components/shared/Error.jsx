import React from "react";

export default function Error({ message }) {
    return (
        <>
            <p className="px-3 py-2">{message}</p>
        </>
    );
}
