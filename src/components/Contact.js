const Contact=()=>{

    return(
        <div className="font-bold text-2xl p-4 m-4">
            <h1>Contact Us Page </h1>
            <form>
                <input type= "text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>

        </div>
    )
}
export default Contact;
