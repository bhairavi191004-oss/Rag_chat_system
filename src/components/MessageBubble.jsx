function MessageBubble({sender,message}){

return(
<div className='bg-gray-100 p-3 rounded-xl'>

<b>{sender}</b>

<p>{message}</p>

</div>
)
}

export default MessageBubble