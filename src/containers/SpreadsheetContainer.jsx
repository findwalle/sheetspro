import React, { useState, useEffect } from "react";

export default function SpreadsheetContainer() {
    // will start with a 10 by 10 spreadsheet, will eventually shift over to 
    // percentage of the width by height
    const [grid, setGrid] = useState([[]]);

    // grid will consist of a raw value -> behind the scenes display
    // and computed value -> what is shown

    return (
        <div id = "spreadsheet-container">
            <h1>Spreadsheet Container</h1>
        </div>
    )
}