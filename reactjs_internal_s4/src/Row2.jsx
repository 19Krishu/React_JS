// Patel Krisha - 117

import Img from './Images/GU.png';
import vid from './Video/VID-20220927-WA0029.mp4';
var b = vid;
export default function Row2(){
    return <>
    <table> 
        <tr>
            <td className='a4'>
                <img src={Img} alt="" />
            </td>
            <td className='a5'>
                <h2>React Installation Guide Video</h2>
                <video controls>
                    <source src={b} type="" width={100} height={50}/>
                </video>
            </td>
            <td className="a6">
                <h2>Introduction to the React</h2>
                <p>
                    ReactJs is a declarative , efficient and flexible JavaScript <br />
                    library for building reusable UI components. It is an <br />
                    open-source , component-based front end library <br />
                    responsible only for the view layer of the application. It <br />
                    was created by jordan walke , who was a software <br />
                    engineer at Facebook. It was initally developed and <br />
                    maintained by Facebook and was later used in its products <br />
                    like WhatsApp & Instagram. Facebook <br />
                    developed ReactJs in 2011 in its newfeed section,
                </p>
            </td>
        </tr>
    </table>
    </>
}