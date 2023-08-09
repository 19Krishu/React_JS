import a2 from "./Image/IMG_0888 (2).jpg";
export default function Block(){
    return <>
    <table className="block">
        <tr>
            <td class="blk">
                <h1>About</h1>
                <p>
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />                 
                </p>
            </td>
            <td class="blk1">
                <h1>History</h1>
                <p>
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                    ABCDEFGHIJKLMNOPURSTUVWXYZ <br />
                </p>
            </td>
            <td class="blk2">
                <h1>Contact Us</h1>
                <img src={a2} alt="path" width={100} height={100}/>
                <form>
                    Name : <input type="text"/>
                    <br></br>
                    <br></br>
                    Contact : <input type="number"/>
                </form>
            </td>
        </tr>
    </table>
    </>
}