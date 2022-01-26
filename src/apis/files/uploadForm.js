import React from "react";
import ReactDOMServer from "react-dom/server";

export default function list ( req, res ) {
    return [ null, null , () => res.send( ReactDOMServer.renderToString(
        <form method="post" encType="multipart/form-data" action="upload">
            <input type="file" name="files" required multiple /><br />
            <button>上傳檔案</button>
        </form>
    ))];
}