export default function Contact(){
    return<>
    <div className="container col-2 mt-1">
        <h4>Patel Krisha - 117</h4>
    </div>
    <div className="container id">
        <div className="row bg2 cd bsh1 mt-4">
            <div className="col-sm-9 offset-2">
                <div>
                <h2>Contact Us</h2>
                </div>
                <form action="" name="myform">
                    First Name : <br /> <input type="text"  name="first" class="form-control"/> 


                    Middle Name : <br /> <input type="text"  name="middle" class="form-control" />


                    Last Name : <br /> <input type="text" name="last" class="form-control" />


                    College Name : <br /> <input type="phoneno"  name="phone" class="form-control" /> 


                    Last Year Marks : <br /> <input type="phoneno"  name="phone" class="form-control" /> 


                    Contact : <br /> <input type="phoneno"  name="phone" class="form-control" /> 

                    <button className="btn btn-danger mt-2 mb-2">Submit</button>
                    <button className="btn btn-success mt-2 ms-2 mb-2">Reset</button>
                </form>
            </div>
        </div>
    </div>
</>
}