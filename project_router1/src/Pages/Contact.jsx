export default function Contact(){
    return<>
{/* <h1>This is My Contact page</h1> */}
    <div className="container id">
        <div className="row bg-light cd bsh mt-4">
            <div className="col-3 offset-2">
                <div>
                <h2 className="edit">Personal Details</h2>
                </div>
                <form action="" name="myform">
                    Name : <br /> <input type="text"  name="first" class="form-control"/> 

                    <br />

                    Father Name : <br /> <input type="text"  name="middle" class="form-control" />

                    <br />

                    Mother Name : <br /> <input type="text" name="last" class="form-control" />

                    <br />

                    Surname : <br /> <input type="phoneno"  name="phone" class="form-control" /> 

                    <br />
                    <button className="btn btn-danger mt-2 mb-2">Submit</button>
                    <button className="btn btn-success mt-2 ms-2 mb-2">Reset</button>
                </form>
            </div>

            <div className="col-4 offset-1">
                <div>
                <h2 className="edit">Educational Details</h2>
                </div>
                <form action="" name="myform">
                    School Name : <br /> <input type="text"  name="first" class="form-control" /> 

                    <br />

                    12th School Name : <br /> <input type="text"  name="middle" class="form-control" />

                    <br />

                    Which College Did You Died : <br /> <input type="text" name="last" class="form-control" />

                    <br />

                    Last Semester Marks : <br /> <input type="phoneno"  name="phone" class="form-control" /> 

                    <br />
                </form>
            </div>
        </div>
    </div>
</>
}