
import React from "react";
import { Form, Row, Col, Input ,  } from 'antd';


const SignUp = ()=> {
   
    return(
    <>
      <div className="Login">
      <Form  > 
            <h1 style={{textAlign:"center"}}>Let's Create an Account</h1>
            <Row >
             <Col  span={11}>  <label > First Name</label>
               <Input placeholder="First Name" equired autoComplete="off"></Input></Col>
                <Col Col span={12} offset={1}>
                <label > Last Name</label>
               <Input placeholder="Last Name" required autoComplete="off"></Input>
                </Col>
          </Row>  
          <Row >
     
               <label Col span={12}push={6} style={{marginTop:"2%"}}> Email</label>
               <Input Col span={12}push={6} placeholder="Email" type="email" required autoComplete="off"></Input>
               <label Col span={10}push={6} style={{marginTop:"2%"}}> Password</label>
               <Input placeholder="Password" type="password" required autoComplete="off"></Input>
               <label Col span={12}push={6} style={{marginTop:"2%"}}> Phone</label>
               <Input Col span={24}push={12} placeholder="Phone" type="text" minLength="0" maxLength="10"  required autoComplete="off"></Input>
              
              
             </Row>
                 <Row>
                    <Col span={24}>
                        <a href="'./Pages/Login'">
                    <button className="btn"  htmlType="submit">Register</button>
                    </a>
                    </Col>
                    <Col span={24}>
                        <p>Already have an accounta ?
                            <a href=""> sign In</a>
                        </p>
                    </Col>
                 </Row>
              
               
            
            </Form> 
    </div>
    </>
    )
}
export default SignUp 