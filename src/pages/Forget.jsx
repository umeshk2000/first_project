
import React from "react";
import { Form, Row, Col, Input } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons';

const Forget = () =>{
    return(
        <>
        <div className="Login">
            <Form  > 
                 <ArrowLeftOutlined />Back
                <h3 style={{textAlign:"center", fontWeight:"lighter"}}>Forgot your password ?</h3>
                <h3 style={{textAlign:"center", fontWeight:"lighter"}}>Please enter the email you use to sign in to Gaize</h3>
             
                <Row >
                   <label Col span={12}push={6} style={{marginTop:"2%"}}> Email</label>
                   <Input Col span={12}push={6} placeholder="Email" required></Input>
                </Row>
                <Row>
                <Col span={24}>
                <button className="btn"  htmlType="submit" style={{marginTop:"8%"}}>Send Reset Email</button>
                </Col>  
                </Row>
                  
             </Form>       
                
                
        </div>
        </>
    )
}
export default Forget