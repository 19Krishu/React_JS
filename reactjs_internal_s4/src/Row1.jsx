// Patel Krisha - 117

import vid from './Video/VID-20220927-WA0029.mp4';
var a = vid;
export default function Block(){
    return <>
    <table>
        <tr>
            <td className="a1">
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
            <td className="a2">
                <p>
                    ReactJs is a declarative , efficient and flexible <br /> 
                    JavaScript library for building reusable UI <br />
                    components. It is an open-source , <br />
                    component-based front end library <br />
                    responsible only for the view layer <br />
                    of the application. It was created by <br />
                     jordan walke , who was a software <br />
                    engineer at Facebook. It was initally <br />
                    developed and maintained by Facebook <br />
                    and was later used in its products <br />
                    like WhatsApp & Instagram. Facebook <br />
                    developed ReactJs in 2011 <br />
                    in its newfeed section,
                </p>
            </td>
            <td className='a3'>
                <h2>Use Video For Guidance</h2>
                <video controls>
                    <source src={a} type="" width={100} height={50}/>
                </video>
            </td>
        </tr>
    </table>
    </>
}


