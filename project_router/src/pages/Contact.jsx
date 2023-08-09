export default function Contact(){

    var Validation = () => {
        var first = document.myform.first.value;

        if(first === "" && first === null){
            alert("First Name Required...")
        }
    }

    return <>
    {/* <h1>This is My Contact page</h1> */}
    <div className="container id">
        <div className="row bg-light cd">
            <div className="col-10 offset-1">
                <div>
                <img src="logo192.png" className="ig rounded mx-auto d-block" height={100} width={100} alt="" />
                </div>
                <form action="" name="myform">
                    First Name :<input type="text" placeholder="Enter Your First Name" name="first" className="form-control" /> 
                    Middle Name : <input type="text" placeholder="Enter Your Middle Name" name="middle" className="form-control" />
                    Last Name : <input type="text" placeholder="Enter Your Last Name" name="last" className="form-control" />
                    Contact No : <input type="phoneno" placeholder="Enter Your Phone No" name="phone" className="form-control" /> 
                    <button className="btn btn-danger mt-2 mb-2" onClick={Validation}>Submit</button>
                    <button className="btn btn-success mt-2 ms-2 mb-2">Save</button>
                </form>
            </div>
        </div>
    </div>
    </>
}