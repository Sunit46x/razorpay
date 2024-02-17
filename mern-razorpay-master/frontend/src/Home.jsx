import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"

const Home = () => {

  const checkouthandler =async(amount)=>{
    const {data:{key}}=await axios.get("http://localhost:8000/api/getkey")
    const {data:{order}}=await axios.post("http://localhost:8000/checkout",{amount})
    console.log(window);
    const options ={
      key,
      amount:order.amount,
      currency:"INR",
      name:"ZUSH-STORE",
      description:"Razorpay tutorial",
      image:"https://imgs.search.brave.com/CfarwzICOb4cTAs4Npa6mEwnb20-iw3Ed8weLCOdAJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/MTM0ODA1L2NvbnZl/cnNpb25zL18xNTEy/MDc2ODAzXzkzX05p/a2UtZGVza3RvcC5q/cGc",
      order_id:order.id,
      callback_url:"http://localhost:8000/paymentverification",
      prefill:{
        name:"Zush-Store",
        email:"sunitkapure46@gmail.com",
        contact:"8799992023"
      },
      notes:{
        "address":"UAE-ARAB"
      },
      theme:{
        "color":"#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();

  }

  return (
    <Box>
    <Stack h={"100vh"} justifyContent={"center"} alignItems={"center"} direction={["column","row"]}>
     <Card amount={3000} img={"https://images.pexels.com/photos/17117471/pexels-photo-17117471/free-photo-of-close-up-of-pink-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} checkouthandler={checkouthandler}  />
    </Stack>
  </Box>
  )
}

export default Home