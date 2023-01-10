import { useContext, useEffect, useState } from "react"
import EvaluatorContext from "../context/EvaluatorContext"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2'; 

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
function Results() {
    const {results}= useContext(EvaluatorContext)
    const [total,setTotal]= useState(0)
    const [totalInf,setTotalInf]= useState(0)
    const [totalCom,setTotalCom]= useState(0)
    const [totalProd,setTotalProd]= useState(0)
    const [totalSaf,setTotalSaf]= useState(0)
    // const categories= ['information','communication','production','safety']

    const data ={
        labels: ['information','communication','production','safety'],
        datasets :[{
            data: [totalInf,totalCom,totalProd,totalSaf],
            // data: [1,2,3,5],
            backgroundColor: ['#666AF6', '#F666B2','#F6F266','#66F6AA']
        },
        ]
    }
    const options =
    {
        responsive: true,
        plugins: {
          legend: {
            display : false
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };

    useEffect(()=>{
        setTotal(findTotal(results))
        setTotalInf(findTotal(results.filter((el)=>el.category=== 'information')))
        setTotalCom(findTotal(results.filter((el)=>el.category=== 'communication')))
        setTotalProd(findTotal(results.filter((el)=>el.category=== 'production')))
        setTotalSaf(findTotal(results.filter((el)=>el.category=== 'safety')))
        
    },[results])

    const findTotal=(arr)=>{
        let tempTotal=0
        arr.forEach(element => {
            tempTotal+= element.result*20
        })
        return Math.floor(tempTotal/arr.length) 
    }
    
    return (
        <div className="container">
            <div className="results-container">
                <h2>Results</h2>
                <div className="data">
                    <div className="groups">
                        <div className="itm"><span>Information </span> : {totalInf}% </div>
                        <div className="itm"><span>Communication </span> : {totalCom}% </div>
                        <div className="itm"><span>Production </span> : {totalProd}% </div>
                        <div className="itm"><span>Safety </span> : {totalSaf}% </div>
                    </div>
                    <div className="total">
                        <div className="total-inner">
                            Total <br /> {total}%
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <Bar options={options} data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Results