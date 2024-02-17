import React from "react";
import { RingLoader } from "react-spinners";
//import { useState, useEffect } from "react";
export default function LoadingTransition() {
    return (
        <div className="container">
            <RingLoader color="rgba(188, 0, 158, 1)" />
        </div>
    )
}