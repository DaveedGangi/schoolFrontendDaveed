import {Component} from "react"

import {Link,Redirect} from "react-router-dom"

import Cookies from "js-cookie"

import Offcanvas from 'react-bootstrap/Offcanvas';

import { GiHamburgerMenu } from "react-icons/gi";

import Button from 'react-bootstrap/Button';

import {IoMdArrowRoundBack} from "react-icons/io"


import "./index.css"

class Home extends Component{

    state={show:false,home:true,addTeacher:false,addStudent:false,teacherName:"",teacherAge:"",teacherGender:"",teacherSubject:"",teacherExperience:"",studentName:"",studentAge:"",studentGender:"",studentStandard:"",studentMarks:""}

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    showAddTeacher=()=>{
        this.setState({home:false,addTeacher:true,addStudent:false})
    }
    showAddStudent=()=>{
        this.setState({home:false,addTeacher:false,addStudent:true})
    }

    cancelTeacher=()=>{
        this.setState({home:true,addTeacher:false,addStudent:false,teacherAge:"",teacherGender:"",teacherSubject:"",teacherExperience:""})
    }
    cancelStudent=()=>{
        this.setState({home:true,addTeacher:false,addStudent:false,studentName:"",studentAge:"",studentGender:"",studentStandard:"",studentMarks:""})
    }


    enterTeacherName=(event)=>{
        this.setState({teacherName:event.target.value})
    }
    enterTeacherAge=(event)=>{
        this.setState({teacherAge:event.target.value})
    }
    enterTeacherGender=(event)=>{
        this.setState({teacherGender:event.target.value})
    }
    enterTeacherSubject=(event)=>{
        this.setState({teacherSubject:event.target.value})
    }
    enterTeacherExperience=(event)=>{
            this.setState({teacherExperience:event.target.value})
    }
    

    addTeacher=async(event)=>{
        event.preventDefault()
        const {teacherName,teacherAge,teacherGender,teacherSubject,teacherExperience}=this.state
        const userDetails=JSON.parse(localStorage.getItem("user"))
        console.log(userDetails)

        const data={
            name:teacherName,
            age:teacherAge,
            gender:teacherGender,
            subject:teacherSubject,
            experience:teacherExperience,
            user_id:userDetails.id
        }
        const url="https://schoolbackenddaveed.onrender.com/teachers"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
        const response=await fetch(url,options)
        
        if(response.ok){
              console.log("Teacher added successfully")
              this.setState({home:true,addTeacher:false,addStudent:false,teacherName:"",teacherAge:"",teacherGender:"",teacherSubject:"",teacherExperience:""})
       
        }
        else{
            console.log("Failed to add teacher")
        }


    }


addingStudent=async(event)=>{
    event.preventDefault()
    console.log("student added")
    const {studentName,studentAge,studentGender,studentStandard,studentMarks}=this.state
    const userDetails=JSON.parse(localStorage.getItem("user"))
    console.log(userDetails)
    const data={
        name:studentName,
        age:studentAge,
        gender:studentGender,
        standard:studentStandard,
        marks:studentMarks,
        user_id:userDetails.id
    }
    const url="https://schoolbackenddaveed.onrender.com/students"
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    const response=await fetch(url,options)
    if(response.ok){
          console.log("Student added successfully")
          this.setState({home:true,addTeacher:false,addStudent:false,studentName:"",studentAge:"",studentGender:"",studentStandard:"",studentMarks:""})

    }
    else{
        console.log("Failed to add student")
    }


}



addStudentName=(event)=>{
    this.setState({studentName:event.target.value})

}
addStudentAge=(event)=>{
    this.setState({studentAge:event.target.value})

}
addStudentGender=(event)=>{
    this.setState({studentGender:event.target.value})

}
addStudentStandard=(event)=>{
    this.setState({studentStandard:event.target.value})

}
addStudentMarks=(event)=>{
    this.setState({studentMarks:event.target.value})

}



    render(){
        const {show,home,addTeacher,addStudent,teacherName,teacherAge,teacherExperience,teacherGender,teacherSubject,studentName,studentAge,studentGender,studentMarks,studentStandard}=this.state
      const userDetails=JSON.parse(localStorage.getItem("user"))
      console.log("userDetails",userDetails);
      const {username,role}=userDetails
      console.log("username",username)
      console.log("role",role)
       const jwtToken=Cookies.get("jwtToken")
       if(jwtToken===undefined){
        return <Redirect to="/login"/>
       }
       
        return(
            <div>

                <div className="nav-bar">
    
                    <div>

                    <button className="hamberger-menu" onClick={this.handleShow}>
                    <GiHamburgerMenu size={25} />
                    </button>

                     <Offcanvas show={show} onHide={this.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>School Management</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

            <p> Welcome to our school details</p>

          <div>
            <button onClick={this.showAddTeacher} type="button" className="add-teacher-button">
                Add Teacher
           </button>
           
           <div>
            <button onClick={this.showAddStudent} type="button" className="add-student-button">
                Add Student
            </button>
           </div>
          </div>
        </Offcanvas.Body>
                     </Offcanvas>

                     </div>






                    <div>
                        <input className="input-search" type="search" placeholder="Search" />
                    </div>

                    <div>
                        <Link className="link-for-profile" to="/profile">
                        <button className="profile-button" type="button">{username[0]}</button>
                        </Link>
                    </div>


                </div>
               

            {
                home&&
            

            <div className="home-container">
               <div>
                <h1 className="home-heading">Welcome to School Management</h1>
                <p className="home-description">This is a school management website</p>
               </div>
               
               <div className="teacher-student-buttons">
               <div>
                <Link className="link-for-teachers" to="/teachers">
                <button  className="teachers-button" type="button">Teachers</button>
                </Link>
               </div>
               <div>
                <Link className="link-for-students" to="/students">
                <button className="students-button" type="button">Students</button>
                </Link>
               </div>

               </div>

            </div>

            }


          <div className="home-container">

            
            
            {
                addTeacher&&(
                    <div>
                    {
                        role==="Teacher"?
                    
                    <form onSubmit={this.addTeacher} className="add-teacher-container">
                        <h1>Add Teacher</h1>
                        <div>
                        <input value={teacherName} onChange={this.enterTeacherName} type="text" placeholder="Enter Teacher Name" required />
                        </div>
                        <div>
                        <input value={teacherAge} onChange={this.enterTeacherAge} type="text" placeholder="Enter Teacher Age" required/>
                        </div>
                        <div>
                        <input value={teacherGender} onChange={this.enterTeacherGender} type="text" placeholder="Enter Teacher Gender" required/>
                        </div>
                        <div>
                        <input value={teacherSubject} onChange={this.enterTeacherSubject} type="text" placeholder="Enter Teacher Subject"required/>
                        </div>
                        <div>
                        <input value={teacherExperience} onChange={this.enterTeacherExperience} type="text" placeholder="Enter Teacher Experience"  required/>
                        </div>
                        

                        <div className="buttons-container">
                        <div>
                        <Button type="submit" variant="outline-primary">Add Teacher</Button>
                        </div>
                        <div>
                        <Button variant="outline-secondary" onClick={this.cancelTeacher} type="button">Cancel</Button>
                        </div>
                        </div>
                    
                    </form>:
                     <div>
                     <h1>You are not a teacher</h1>
                     <p>You are not authorized to add teachers and students</p>
                     <div>
                        <Button variant="outline-secondary" onClick={this.cancelTeacher} type="button"><IoMdArrowRoundBack /> Go Back</Button>
                        </div>
                    
                     </div>

                    }
                    </div>
                )
                
            }
            

           

        


        
            
        

            {
                addStudent&&(
                    <div>
                    {
                        role==="Teacher"?
                    
                    <form onSubmit={this.addingStudent} className="add-student-container">
                        <h1>Add Student</h1>

                        <div>
                        <input onChange={this.addStudentName} value={studentName} type="text" placeholder="Enter Student Name" required />
                        </div>
                        <div>
                        <input onChange={this.addStudentAge} value={studentAge} type="text" placeholder="Enter Student Age" required />
                        </div>
                        <div>
                        <input onChange={this.addStudentGender} value={studentGender} type="text" placeholder="Enter Student Gender" required />
                        </div>
                        <div>
                        <input onChange={this.addStudentStandard} value={studentStandard} type="text" placeholder="Enter Student Standard" required/>
                        </div>
                        <div>
                        <input onChange={this.addStudentMarks} value={studentMarks} type="text" placeholder="Enter Student Marks" required />
                        </div>
                        

                        <div className="buttons-container">
                        <div>
                        <Button type="submit" variant="outline-primary">Add Student</Button>
                        </div>
                        <div>
                        <Button variant="outline-secondary" onClick={this.cancelStudent} type="button">Cancel</Button>
                        
                        </div>
                        </div>














                       
                    </form>:
                      <div>
                      <h1>You are not a teacher</h1>
                      <p>You are not authorized to add teachers and students</p>
                      <div>
                        <Button variant="outline-secondary" onClick={this.cancelStudent} type="button"><IoMdArrowRoundBack /> Go Back</Button>
                        
                        </div>
                     
                      </div>

                    }
                    </div>
                )
            }
          


        




            </div>
















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


export default Home;