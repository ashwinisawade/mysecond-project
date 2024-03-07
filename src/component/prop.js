import react from 'react'
function Props(prop) {
    console.log(prop,"hello");
    return (
    <div>
    <h1>Hi...{prop?.text?.Name}</h1>
    <h3>{prop?.text?.greet}</h3>
    <p>{prop?.text?.data}</p>
    <table>
    "First Name":<br/>
    "Surname":<br/>
     DOB:<br/>
    </table>
    
    </div>
    )
}
export default Props