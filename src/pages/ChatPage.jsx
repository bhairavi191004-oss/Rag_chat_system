import { useState } from "react";
import Navbar from "../components/Navbar";

function ChatPage() {

const [question,setQuestion]=useState("");
const [messages,setMessages]=useState([]);
const [loading,setLoading]=useState(false);

function sendMessage(){

if(!question) return;

const userMessage={
sender:"user",
text:question
};

setMessages((prev)=>[
...prev,
userMessage
]);

setLoading(true);

setQuestion("");

setTimeout(()=>{

const aiMessage={

sender:"ai",

text:"Internet of things",

sources:[
"aliyahfinal.pdf - page 8",
]

};

setMessages((prev)=>[
...prev,
aiMessage
]);

setLoading(false);

},2000);

}

return(

<div
className="
min-h-screen
bg-[#f7f7f8]
dark:bg-black
dark:text-white
flex flex-col
transition-all duration-300
"
>

<Navbar/>

<div className="flex-1 overflow-y-auto px-4 py-6">

{messages.length===0 && (

<div className="h-full flex flex-col justify-center items-center text-center">

<div className="text-7xl mb-5">
🤖
</div>

<h1 className="text-4xl font-bold">
RAG Chat Assistant
</h1>

<p className="text-gray-500 dark:text-gray-300 mt-3">

Upload a PDF first, then ask questions

</p>

</div>

)}

<div className="max-w-4xl mx-auto space-y-6">

{messages.map((msg,index)=>(

<div
key={index}
className={`flex ${
msg.sender==="user"
? "justify-end"
: "justify-start"
}`}
>

<div
className={`max-w-[70%] p-4 rounded-2xl ${
msg.sender==="user"
? "bg-purple-600 text-white"
: "bg-white dark:bg-gray-900 dark:text-white shadow"
}`}
>

<p>{msg.text}</p>

{msg.sender==="ai" && msg.sources && (

<div className="mt-4 text-sm text-gray-500 dark:text-gray-300">

<p className="font-semibold">
Sources
</p>

{msg.sources.map((source,i)=>(

<p key={i}>
📄 {source}
</p>

))}

</div>

)}

</div>

</div>

))}

{/* Loading */}

{loading && (

<div className="flex justify-start">

<div
className="
bg-white
dark:bg-gray-900
dark:text-white
shadow
p-4
rounded-2xl
"
>

<p>🔍 Searching document...</p>

<p>🤖 Generating answer...</p>

</div>

</div>

)}

</div>

</div>

{/* Bottom Input */}

<div
className="
bg-white
dark:bg-gray-950
border-t
dark:border-gray-700
p-4
"
>

<div className="max-w-4xl mx-auto flex gap-3">

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
placeholder="Ask something from uploaded PDF..."
className="
flex-1
border
dark:border-gray-700
bg-white
dark:bg-gray-900
dark:text-white
rounded-xl
p-4
outline-none
"
/>

<button
onClick={sendMessage}
disabled={!question}
className="
bg-purple-600
text-white
px-8
rounded-xl
disabled:bg-gray-400
"
>

Send

</button>

</div>

</div>

</div>

)

}

export default ChatPage;