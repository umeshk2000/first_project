

import { Form, Row, Col, Input ,  } from 'antd';
import Button from "../components/Button";
import React,{  } from 'react'

import { useNavigate } from "react-router-dom";



const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// const [Input, setInput]=useState({
//   username:"",
//   lname:"",
//   email:"",
//   password:"",
//   phone :"",

// })


const SignUp = ()=> {
   
const navigate = useNavigate();


   

    return(
  
    
    <div  className="container" >
            <Form  className="form"  initialValues={{ remember: true }}  onFinish={onFinish}  onFinishFailed={onFinishFailed}autoComplete="off"> 
            <h1 style={{textAlign:"center"  }}>Let's Create an Account</h1>
                <Row >
                    <Col span={5} push={9} >
                      <Form.Item  className="Items" label="Name" name="Name" labelCol={{ span: 24 }} wrapperCol={{ span:12}}    rules={[{ required: true, message: 'Please input your username!' }]} >
                         <Input  placeholder="Name"  ></Input>
                        </Form.Item>
                     </Col>
                     <Col span={6}push={7} >
                      <Form.Item  className="Items" label="Last Name" name="LastName"  labelCol={{ span: 24 }} wrapperCol={{ span:12 }}   rules={[{ required:  'Please input your Lastname!' }]}>
                         <Input  placeholder="Last Name" ></Input>
                        </Form.Item>
                     </Col>
                        
                 </Row>
                 <Row>
                        <Col span={12} push={9}>
                      <Form.Item  className="Items" label="Email" name="Email"  labelCol={{ span: 24 }} wrapperCol={{ span:12 }}  rules={[{ required: true, message: 'Please input your Email!' }]}>
                         <Input  placeholder="Email" ></Input>
                        </Form.Item>
                     </Col>
                  
                 </Row>
                 <Row>
                        <Col span={12} push={9}>
                      <Form.Item className="Items" label="Password" name="Password"  labelCol={{ span: 24 }} wrapperCol={{ span:12 }}   rules={[{ required: true, message: 'Please input your Password!' }]} >
                         <Input type='password' placeholder="Password"  ></Input>
                        </Form.Item>
                     </Col>
                  
                 </Row>
                 <Row>
                        <Col span={12} push={9}>
                      <Form.Item  className="Items" label="Phone Number" name="PhoneNumber" labelCol={{ span: 24 }} wrapperCol={{ span:12 }}  rules={[{ required: true, message: 'Please input your Number!' }]}>
                         <Input  placeholder="Phone Number" text="string" minLength={10} maxLength={10} ></Input>
                        </Form.Item>
                     </Col>
                  
                 </Row>
                    <Row>
                    <Col span={12} push={9}>
                            <Form.Item >
                           <Button  type="primary" htmlType="submit" onClick={()=>navigate('/Login')} >Send Reset Email</Button>
                                
                             </Form.Item>
                         </Col>
                    </Row>
                    <Row>
                   
                   <Col span={12}push={9}>
                       <p>Already have an accounta ?
                           <a href=""> sign In</a>
                       </p>
                   </Col>
                </Row>
                
             </Form> 
             </div>
   
    );
};
export default SignUp 