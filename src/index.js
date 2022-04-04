import * as ReactDOMClient from 'react-dom/client';
import Museums from "./museums";
import Banner from "./banner";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
<> 
    <Banner/>
    <Museums/>     
</>);

