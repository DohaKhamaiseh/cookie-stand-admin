import ReportTable from './ReportTable';
import CreateForm from './CreateForm';
import Header from './Header';
import Footer from './Footer';


export default function CookieStandAdmin(props) {
    return (


        <>

<Header />
            <CreateForm handler={props.handler} />


            <ReportTable rps={props.reports} Hours={props.Hours}  setLocations = {props.setLocations}/>

            <Footer length={props.length} />

        </>
    )



}