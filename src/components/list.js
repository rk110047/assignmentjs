import { async } from 'q';
import React from 'react';
import axios from 'axios';

class DetailsList extends React.Component{

    state={
        data:[]
    }

    componentDidMount(){
        this.dataFetchHandler()
    }

    dataFetchHandler = async() =>{
        let res = await axios.get('https://pacific-island-29714.herokuapp.com/'+'https://djangorestassignment.herokuapp.com/list/');
        await this.setState({data:res.data})
        console.log(res.data)
    }



    // async mapDataHandler(){
    //     <table style="width:100%">
    //         <tr>
    //             <th>Firstname</th>
    //             <th>Lastname</th> 
    //             <th>Age</th>
    //         </tr>
    //     this.state.data.map(t=>
    //         (
    //             <div>
    //                 <tr>
    //                 <td>{t.name}</td>
    //                 <td>{t.email}</td>
    //                 <td>{t.date_of_birth}</td>
    //                 <td>{t.phone_number}</td>
    //             </tr>
    //             </div>
    //         )
    //     )
    //     </table>
    // }


    render(){
        return(

                <div>
                    <table style={{width:"100%"}}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th> 
                            <th>Date of Birth</th>
                            <th>Phone Number</th>
                        </tr>
                    {/* {this.mapDataHandler()} */}
                    {this.state.data.map(t=>(
                         <tr style={{}}>
                            <td>{t.name}</td>
                            <td>{t.email}</td>
                            <td>{t.date_of_birth}</td>
                            <td>{t.phone_number}</td>
                        </tr>
                    ))}
                    </table>
                </div>
     

        )
    }
}


const styles={
    divStyle:{
        alignItems:"center",
        justifyContent:"center",
        display:"flex"
    }
}
export default DetailsList;