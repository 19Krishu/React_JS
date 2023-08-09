import img from '../Images/2.jpeg';
export default function Home(){
    return <>
    <div className="container col-2 mt-1">
        <h4>Patel Krisha - 117</h4>
    </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 mt-2">
                    <div className="bsh">
                        <h1>Angular</h1>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi , maximum <br />
                            quord omnis natus atqui! Animi possimus impedit <br />
                            a rem adit blanditis
                        </p>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi
                        </p>
                    </div>                    
                </div>

                <div className="col-sm-4 mt-2">
                    <div className="bsh">
                        <div>
                            <img src={img} alt="" height={237} className='img' />
                        </div>
                        <div className='center'>
                            <button type='previous' >Previous</button>
                            <button type='next'>Next</button>
                        </div>
                    </div>                    
                </div>

                <div className="col-sm-4 mt-2">
                    <div className="bsh">
                    <h1>Node JS</h1>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi , maximum <br />
                            quord omnis natus atqui! Animi possimus impedit <br />
                            a rem adit blanditis
                        </p>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi
                        </p>
                    </div>                    
                </div>
            </div>


            <div className="row">
                <div className="col-sm-4 mt-2">
                    <div className="bsh">
                    <h1>Java IDE</h1>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi , maximum <br />
                            quord omnis natus atqui! Animi possimus impedit <br />
                            a rem adit blanditis
                        </p>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi
                        </p>
                    </div>                    
                </div>

                <div className="col-sm-4 mt-2">
                    <div className="bsh">
                    <h1>VS - Code</h1>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi , maximum <br />
                            quord omnis natus atqui! Animi possimus impedit <br />
                            a rem adit blanditis
                        </p>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi
                        </p>
                    </div>                    
                </div>

                <div className="col-sm-4 mt-2">
                    <div className="bsh">
                    <h1>Python IDE</h1>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi , maximum <br />
                            quord omnis natus atqui! Animi possimus impedit <br />
                            a rem adit blanditis
                        </p>
                        <p>
                            Lorem ipsum , dolor sit amet consectetor <br />
                            adipisicing elit. Deserunt culpa quis iure dicta <br />
                            obcaecati perspiciaits itaque sint sequi
                        </p>
                    </div>                    
                </div>
            </div>
        </div>
    </>
}