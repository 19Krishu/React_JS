import a1 from "./Image/IMG_0888 (2).jpg";

export default function Images(){
    return <>
        <table className="img1">
            <tr>
                <td>
                    <img src={a1} alt="path" width={200}/>
                    <h4>Rs 500/-</h4>
                </td>
                <td>
                    <img src={a1} alt="path" width={200}/>
                    <h4>Rs 400/-</h4>
                </td>
                <td>
                    <img src={a1} alt="path" width={200}/>
                    <h4>Rs 300/-</h4>
                </td>
                <td>
                    <img src={a1} alt="path" width={200}/>
                    <h4>Rs 200/-</h4>
                </td>
                <td>
                    <img src={a1} alt="path" width={200}/>
                    <h4>Rs 100/-</h4>
                </td>
            </tr>
        </table>
    </>
}