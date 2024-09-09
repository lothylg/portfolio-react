


export default function HomePage() {
    const myEmail = "lothygresser@gmail.com"
    const myName = "Lothy Gresser"
    const location = "Saint Paul, MN"
    const industries = "finance and biopharma"
    const jobTitle = "software developer / process improvement engineer"

    return (

        <div id='infoContainer' className="col-12 row">
            <div className='col-3'></div>
            <div className="row col-8 justify-content-center mt-5">
                <img id="mePhoto" className="col-6" src='/assets/lgfront.png'></img>
                <ul id="meInfo" className='col-6 list-unstyled'>
                    <li key='1' id="fullName">Hi! I am {myName}!</li><br/>
                    <li key='2' id="located">I am a {jobTitle} based in {location}</li><br/>
                    <li key='3' id="industry">I have worked in the {industries} industries </li><br/>
                    <li key='4' id="email">Feel free to email me at {myEmail}</li>
                </ul>
                <div className='col-3'></div>
            </div>
        </div>


    )
}