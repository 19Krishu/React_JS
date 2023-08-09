import img from "../Images/GU.jpeg";
export default function About(){
    return<>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="mt-4">
                        <img src={img} alt="path" height={300}/>
                    </div>
                </div>

                <div className="col-9">
                    <div className="mt-4 bg1">
                       <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            adipisicing elit.
                       </p>
                       <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            adipisicing elit.
                       </p>
                       <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            adipisicing elit.
                       </p>
                       <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            lorem ipsum dolor sit amet consectetur adipisicing elit , lpsum , aliquam quo qui delectus eius neque sed <br />
                            adipisicing elit.
                       </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}