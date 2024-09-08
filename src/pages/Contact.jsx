export default function Contact() {
    return (
        <div className='m-4'>
            <h3>Contact</h3> <br />
            <form className="container">
                <h2>Send me a message</h2>
                <div className="row">
                    <div className="col">
                        <label>Name:</label>
                        <input type='text' className="form-control"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Email address:</label>
                        <input type='text' className="form-control"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Message:</label>
                        <textarea type="text" className="form-control"></textarea>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}