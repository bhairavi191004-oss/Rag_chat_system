import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import FileList from "../components/FileList";

function UploadPage() {

const [files,setFiles]=useState([]);
const [loading,setLoading]=useState(false);
const [success,setSuccess]=useState(false);

function handleFile(e){

const selected = Array.from(e.target.files);

const allowedFiles = selected.filter((file)=>

file.type==="application/pdf" ||

file.type==="application/msword" ||

file.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||

file.type==="application/vnd.ms-excel" ||

file.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

);

setFiles((prevFiles)=>[
...prevFiles,
...allowedFiles
]);

}

function handleUpload(){

setLoading(true);

setSuccess(false);

setTimeout(()=>{

setLoading(false);

setSuccess(true);

// remove uploaded files after success

setFiles([]);

},3000);

}

return(

<div
className="
min-h-screen
bg-gray-100
dark:bg-gray-950
transition-all duration-300
"
>

{/* Navbar */}

<Navbar/>

{/* Center Upload Card */}

<div className="flex justify-center items-center py-10">

<div
className="
bg-white
dark:bg-gray-900
dark:text-white
p-10
rounded-3xl
shadow-xl
w-[900px]
transition-all duration-300
"
>

<h1 className="text-4xl font-bold">
Upload Documents
</h1>

<p
className="
text-gray-500
dark:text-gray-300
mb-8
"
>
Upload one or more documents
</p>

{/* Upload Box */}

<UploadBox handleFile={handleFile}/>

{/* File List */}

<FileList
files={files}
handleUpload={handleUpload}
loading={loading}
success={success}
/>

</div>

</div>

</div>

)

}

export default UploadPage;