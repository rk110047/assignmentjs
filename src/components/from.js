import axios from 'axios';
import React from 'react';
import  { Redirect } from 'react-router-dom'



class Form extends React.Component{
    
    state =  {
            name:"",
            email:"",
            date_of_birth:"",
            phone_number:"",
            adult_status:false
    }


      


    submitFormHandler = async(event,props)=>{
        event.preventDefault();

        var data     =      this.state.date_of_birth.split('-')
        var year     =      parseInt(data[0])
        var month    =      parseInt(data[1])
        var day      =      parseInt(data[2])
        
        var today = new Date();
        var val_month = parseInt(today.getMonth());
        var val_year  = parseInt(today.getFullYear())-18;
        var val_day   = parseInt(today.getDate());

        console.log(year)
        console.log(val_year)

        if(year == val_year){
            if((month>=val_month)&(day>=val_day)){
            await this.setState({adult_status:true});
            }
        }else if(year <= val_year){
            await this.setState({adult_status:true})
        }

        await console.log(this.state.adult_status)


        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)){


                if(this.state.adult_status){
                    var res = await axios.post('https://pacific-island-29714.herokuapp.com/'+'https://djangorestassignment.herokuapp.com/create/',
                    {
                        "name":this.state.name,
                        "email":this.state.email,
                        "date_of_birth":this.state.date_of_birth,
                        "phone_number":this.state.phone_number
                    })

                    if(res.data.status==201){
                        this.props.history.push('/list')
                    }else{
                        alert(res.data.message)
                    }
                }else{
                    alert("Must Be 18+ ")
                }

            }else{
                alert("invalid Email Address")
            }



    };

    // nameChangeHandler(value){
    //     this.setState({name:value})
    // }


    render(){

        return(

            <div style={styles.divstyle}>
                <form onSubmit={this.submitFormHandler} action="./">

                    <label style={styles.labelStyle}>
                    <h3>Enter Your Name :</h3>  
                        <input style={styles.inputstyle}
                                type="text" value={this.state.name}
                                onChange={(event)=>{this.setState({name:event.target.value})}}
                                
                                />
                    </label>

                    <label style={styles.labelStyle}>
                    <h3>Enter Your Email :</h3>
                        <input style={styles.inputstyle}
                                type="text" value={this.state.email}
                                onChange={(event)=>{this.setState({email:event.target.value})}}
                                />
                    </label>

                    <label style={styles.labelStyle}>
                        <h3>Enter Your DOB :</h3>
                        <input style={styles.inputstyle}
                                type="date" value={this.state.date_of_birth}
                                onChange={(event)=>{this.setState({date_of_birth:event.target.value})}}
                                />
                    </label>

                    <label style={styles.labelStyle}>
                        <h3>Enter Your Phone Number :</h3>
                        <input style={styles.inputstyle}
                                type="text" value={this.state.phone_number}
                                onChange={(event)=>{this.setState({phone_number:event.target.value})}}/>
                    </label>
                    <label style={styles.labelStyle}>
                        <input style={{width:"100%",backgroundColor:"#17baa1",color:"#fff",borderColor:"#17baa1",height:"40px"}}
                                type="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
};


const styles ={
    divstyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'coloum',
        color:"blue",
        width:"100%",
        border:' solid 1px',
    },
    inputstyle:{
        display:"flex",
        borderColor:"blue",
        flexDirection:"coloum",
        marginLeft:"10px",
        fontSize:"25px"
    },
    labelStyle:{
        flexDirection:"row",
        display:"flex",
        padding:"10px"
    }
}


export default Form;