import React from 'react';
import '../css/SalesAnalysis.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
import { useState, useEffect} from 'react';

export default function SalesAnalysis(){

    const data = [
        {
          name: "Jan",
          'Active' : 4490 
        },
        {
          name: "Feb",
          'Active' : 3487
        },
        {
          name: "Mar",'Active' : 1223
        },
        {
          name: "Apr",'Active' : 8856
        },
        {
          name: "May",'Active' : 4490
        },
        {
          name: "Jun",'Active' : 1234
        },
        {
          name: "Jul",'Active' : 5111
        },
        {
            name: "Aug",'Active' : 2222
          },
          {
            name: "Sep",'Active' : 7777
          },  {
            name: "Oct",'Active' : 4490
          },
          {
            name: "Nov",Active: 1235
          },
          {
            name: "Dec",Active : 9999
          }
      ];
      const [toggle,setToggle]=useState(true);
      const [salesInfo, setSalesInfo] = useState([]);

      useEffect(() =>{

        fetch('http://localhost:8080/payment/getSales', {
            method: 'GET'
        })
        .then(response => response.json())
        .then((response) => {
            if (response !== null) {
                setSalesInfo(response);
                //   console.log("response:" + JSON.stringify(payReady.partner_user_id));
                //   console.log('addCart : 성공!');
                if(toggle){
                    setToggle(false)
                }
            } else {
                alert('addCart : 매출 정보 가져오기를 실패하였습니다');
            }
        });

        },[toggle]);





      console.log('date: ' + new Date(salesInfo.approved_at));









    return(
     <div className="chart">
        <h3 className="chartTitle"> Sales Analysis </h3>
        <ResponsiveContainer width="90%" aspect={4/1}>
            <LineChart  data={data}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke= '#ffffff' />
                {/* <Line type="monotone" datakey='Active' /> */}

                <YAxis dataKey="Active" stroke= '#8884d8' />
                <Line type="monotone" dataKey="Active" stroke="#ffffff" />
            </LineChart>
        </ResponsiveContainer>
    
    </div>
    )
}