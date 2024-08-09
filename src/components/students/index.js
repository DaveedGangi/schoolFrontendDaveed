import {Component} from "react"

import {Link} from "react-router-dom"

import {IoMdArrowRoundBack} from "react-icons/io"

import Button from 'react-bootstrap/Button';


class Students extends Component{

    state={students:[],editStudent:false,editStudentId:"",editStudentName:"",editStudentAge:"",editStudentGender:"",editStudentStandard:"",editStudentMarks:""}


    componentDidMount(){
        this.getStudents()
    }

    getStudents=async()=>{
        const url="https://schoolbackenddaveed.onrender.com/students"
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data)
        if(response.ok){
            this.setState({students:data})
        }
        else{
            console.log("Failed to get students")
        }
    }

    deleteStudent=async(id)=>{
        const url=`https://schoolbackenddaveed.onrender.com/students/${id}`
        const options={
            method:"DELETE"
        }
        const response=await fetch(url,options)
        if(response.ok){
            console.log("Student deleted successfully")
            this.getStudents()
        }
        else{
            console.log("Failed to delete student")
        }
    }

    cancelEditStudent=()=>{
        this.setState({editStudent:false,editStudentId:"",editStudentName:"",editStudentAge:"",editStudentGender:"",editStudentStandard:"",editStudentMarks:""})
    }

    editStudentName=(event)=>{
        this.setState({editStudentName:event.target.value})
    }
    editStudentAge=(event)=>{
        this.setState({editStudentAge:event.target.value})
    }
    editStudentGender=(event)=>{
        this.setState({editStudentGender:event.target.value})
    }
    editStudentStandard=(event)=>{
        this.setState({editStudentStandard:event.target.value})
    }
    editStudentMarks=(event)=>{
        this.setState({editStudentMarks:event.target.value})
    }

    updateStudent=async()=>{
        const  {editStudentId}=this.state
        const url=`https://schoolbackenddaveed.onrender.com/students/${editStudentId}`

        const data={
            name:this.state.editStudentName,
            age:this.state.editStudentAge,
            gender:this.state.editStudentGender,
            standard:this.state.editStudentStandard,
            marks:this.state.editStudentMarks
        }
        const options={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
        const response=await fetch(url,options)
        if(response.ok){
            console.log("Student updated successfully")
            this.setState({editStudent:false,editStudentId:"",editStudentName:"",editStudentAge:"",editStudentGender:"",editStudentStandard:"",editStudentMarks:""})
            this.getStudents()
        }
        else{
            console.log("Failed to update student")
        }

    }

    editStudent=(each)=>{
        this.setState({editStudent:true,editStudentId:each.id,editStudentName:each.name,editStudentAge:each.age,editStudentGender:each.gender,editStudentStandard:each.standard,editStudentMarks:each.marks})
    }

    render(){
        const {students,editStudent,editStudentName,editStudentAge,editStudentGender,editStudentMarks,editStudentStandard} = this.state
        const {role}=JSON.parse(localStorage.getItem("user"))
        return(
            <div>
                
                <Link to="/">
                <Button variant="contained">
                <IoMdArrowRoundBack /> Home page
                </Button>
                </Link>
               

                <div className="nav-teachers">
                <p>This is the Students page</p>
                <p>Total number of Students:{students.length}</p>
                </div>



                <div className="teachers-container">
                {
                    students.map((each)=>(
                        <div className="teacher-card" key={each.id}>
                            <p>Name: {each.name}</p>
                            <p>Age: {each.age}</p>
                            <p>Gender: {each.gender}</p>
                            <p>Standard: {each.standard}</p>
                            <p>Marks: {each.marks}</p>
                            {
                                role==="Teacher"&&
                            
                            <div>
                                <Button onClick={()=>this.deleteStudent(each.id)} variant="outline-danger">Delete</Button>
                               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Button onClick={()=>this.editStudent(each)} variant="outline-info">Edit</Button>
                            </div>
                          }
                        </div>
                    ))
                }
                </div>



                {
                    editStudent&&
                    <div className="edit-teacher-container">
                        <div className="edit-teacher-container-inner">
                        <input type="text" value={editStudentName} onChange={this.editStudentName}/>
                        <br/>
                        <input type="text" value={editStudentAge} onChange={this.editStudentAge}/>
                        <br/>
                        <input type="text" value={editStudentGender} onChange={this.editStudentGender}/>
                        <br/>
                        <input type="text" value={editStudentStandard} onChange={this.editStudentStandard}/>
                        <br/>
                        <input type="text" value={editStudentMarks} onChange={this.editStudentMarks}/>
                        <br/>

                        <Button onClick={this.updateStudent} variant="outline-success">Update</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button onClick={this.cancelEditStudent} variant="outline-danger">Cancel</Button>


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
export default Students;