import Au from './Audio/Jhoome Jo Pathaan.mp3';
 
var au = Au
function Audio() {
    return <>
    <audio controls>
        <source src={au} type='Audio/mp3'/>
    </audio>
    </>
}
export {Audio};