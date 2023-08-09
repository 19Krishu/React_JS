import a from './Image/IMG_0888 (2).jpg';
function Responsive (){
    return<>
    <div className="container">
        <div className="row"> 
            <div className="col-sm-1 col-md-3">
                <img src={a} alt="path" width={200} height={200}/>
            </div>

            <div className="col-sm-1 col-md-3">
                <img src={a} alt="path" width={200} height={200}/>
            </div>

            <div className="col-sm-1 col-md-3">
                <img src={a} alt="path" width={200} height={200}/>      
            </div>

            <div className="col-sm-1 col-md-3">
                <img src={a} alt="path" width={200} height={200}/>
            </div>
        </div>
    </div>
    </>
}
export {Responsive};