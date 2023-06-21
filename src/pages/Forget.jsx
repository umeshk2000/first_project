

import { Form, Row, Col, Input } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons';
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import React,{ useState } from 'react'


 
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Forget = () =>{
    const [Email, setEmaildata] = useState({
        Email:""
    })
       
     
    

    
    return(
        <>
        <div className="container">
            <Form   className="form"> 
                <Link to= '/SignUp'> <ArrowLeftOutlined style={{marginLeft:"38%" ,color:"blue"}}></ArrowLeftOutlined ></Link>Back
                <h3 style={{textAlign:"center", fontWeight:"lighter"}}>Forgot your password ?</h3>
                <h3 style={{textAlign:"center", fontWeight:"lighter"}}>Please enter the email you use to sign in to Gaize</h3>
                <Row>
                    <Col span={12} push={9}>
                      <Form.Item  label="Email" value={Email}  name="Email" labelCol={{ span: 24 }} wrapperCol={{ span:12   }}  initialValues={{remember: true, }}onFinish={onFinish}  onFinishFailed={onFinishFailed} rules={[ { required: true, message: 'Please input your Email!', }, ]} >
                         <Input  placeholder="Email"type="email"  onChange={(e)=>setEmaildata(e.target.value)} ></Input>  <br/>                
  
             


                        </Form.Item>
                     </Col>
                        
                 </Row>
                    <Row>
                    <Col span={12} push={9}>
                            <Form.Item >
                                 <Button   onFinish={()=>setEmaildata("")} >Send Reset Email</Button>
                             </Form.Item>
                         </Col>
                    </Row>
                
             </Form>       
            
        </div>
        </>
    )
}
export default Forget