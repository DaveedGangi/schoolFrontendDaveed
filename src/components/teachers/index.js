import {Component} from "react"

import {Link} from "react-router-dom"

import Button from 'react-bootstrap/Button';

import { IoMdArrowRoundBack } from "react-icons/io";

import "./index.css"

class Teachers extends Component{

    state={teachers:[],editShow:false,editName:"",editAge:"",editGender:"",editSubject:"",editExperience:"",editId:""}

    componentDidMount(){
        this.fetchTeachers();
    }

    fetchTeachers=async()=>{


        const url="https://schoolbackenddaveed.onrender.com/teachers"
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
        console.log("response",response)
        if(response.ok){
            console.log("Teachers fetched successfully")
            const responseToJson=await response.json()
            console.log("responseToJson",responseToJson)
            this.setState({teachers:responseToJson})


        }
        else{
            console.log("Teachers fetch failed")
        }
        

    }


    deleteTeacher=async(id)=>{
        console.log("id",id)
        const url=`https://schoolbackenddaveed.onrender.com/teachers/${id}`
        const options={
            method:"DELETE"
        }
        const response=await fetch(url,options)
        console.log("response",response)
        if(response.ok){
            console.log("Teacher deleted successfully")
            this.fetchTeachers()
        }
        else{
            console.log("Teacher delete failed")
        }


    }

    editTeacher=(teacher)=>{
            this.setState({editShow:true,editName:teacher.name,editAge:teacher.age,editGender:teacher.gender,editSubject:teacher.subject,editExperience:teacher.experience,editId:teacher.id})
        }


    

    updateTeacher=async()=>{
            const {editName,editAge,editGender,editSubject,editExperience,editId}=this.state
            const data={name:editName,age:editAge,gender:editGender,subject:editSubject,experience:editExperience}
            const url=`https://schoolbackenddaveed.onrender.com/teachers/${editId}`
            const options={
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
            const response=await fetch(url,options)
            console.log("response",response)
            if(response.ok){
                console.log("Teacher updated successfully")
                this.setState({editShow:false,editName:"",editAge:"",editGender:"",editSubject:"",editExperience:"",editId:""})
                this.fetchTeachers()
            }
            else{
                console.log("Teacher update failed")
            }

        }

        changeEditName=(e)=>{
            this.setState({editName:e.target.value})
        }
        changeEditAge=(e)=>{
            this.setState({editAge:e.target.value})
        }
        changeEditGender=(e)=>{
            this.setState({editGender:e.target.value})
        }
        changeEditSubject=(e)=>{
            this.setState({editSubject:e.target.value})
        }
        changeEditExperience=(e)=>{
            this.setState({editExperience:e.target.value})
        }

        cancelEdit=()=>{
            this.setState({editShow:false,editName:"",editAge:"",editGender:"",editSubject:"",editExperience:"",editId:""})
        }



        render(){
            const {teachers,editShow,editName,editAge,editGender,editSubject,editExperience}=this.state
            const {role}=JSON.parse(localStorage.getItem("user"))
        return(
            <div>


                <Link to="/">
                <Button variant="contained">
                <IoMdArrowRoundBack /> Home page
                </Button>
                </Link>

                <div className="nav-teachers">
                <p>This is the teachers page</p>
                <p>Total number of Teachers: {teachers.length}</p>
                </div>


               <div className="teachers-container">
                {
                    teachers.map((each)=>(
                        <div className="teacher-card" key={each.id}>
                            <p>Name: {each.name}</p>
                            <p>Age: {each.age}</p>
                            <p>Subject: {each.subject}</p>
                            <p>Experience: {each.experience}</p>
                            {
                                role==="Teacher"&&
                            
                            <div>
                                <Button onClick={()=>this.deleteTeacher(each.id)} variant="outline-danger">Delete</Button>
                               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Button onClick={()=>this.editTeacher(each)} variant="outline-info">Edit</Button>
                            </div>
                            }
                        </div>
                    ))
                }
                </div>



                {

                    editShow&&<div className="edit-teacher-container">
                        <div className="edit-teacher-container-inner">
                        <input type="text" value={editName} onChange={this.changeEditName}/>
                        <br/>
                        <input type="text" value={editAge} onChange={this.changeEditAge}/>
                        <br/>
                        <input type="text" value={editGender} onChange={this.changeEditGender}/>
                        <br/>
                        <input type="text" value={editSubject} onChange={this.changeEditSubject}/>
                        <br/>
                        <input type="text" value={editExperience} onChange={this.changeEditExperience}/>
                        <br/>

                        <Button onClick={this.updateTeacher} variant="outline-success">Update</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button onClick={this.cancelEdit} variant="outline-danger">Cancel</Button>


                        </div>

                        </div>

                }












                <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossOrigin="anonymous"
/>
      


            </div>
        )
    }



}

export default Teachers;