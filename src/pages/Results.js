import { useContext, useEffect, useState } from "react"
import EvaluatorContext from "../context/EvaluatorContext"
import VerticalBar from "../components/charts/VerticalBar";
 
function Results() {
    const {results, content}= useContext(EvaluatorContext)
    const [total,setTotal]= useState(0)
    const [totalInf,setTotalInf]= useState(0)
    const [totalCom,setTotalCom]= useState(0)
    const [totalProd,setTotalProd]= useState(0)
    const [totalSaf,setTotalSaf]= useState(0)
    // const categories= ['information','communication','production','safety']

    const chartData ={
        labels: [content['category1'],content['category2'],content['category3'],content['category4']],
        datasets :[{
            data: [totalInf,totalCom,totalProd,totalSaf],
            backgroundColor: ['#666AF6', '#F666B2','#F6F266','#66F6AA']
        },
        ]
    }
     

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
                <h2>{content['results-title']}</h2>
                <div className="data">
                    <div className="groups">
                        <div className="itm"><span>{content['category1']} </span> : {totalInf}% </div>
                        <div className="itm"><span>{content['category2']} </span> : {totalCom}% </div>
                        <div className="itm"><span>{content['category3']} </span> : {totalProd}% </div>
                        <div className="itm"><span>{content['category4']} </span> : {totalSaf}% </div>
                    </div>
                    <div className="total">
                        <div className="total-inner">
                            {content['results-total']} <br /> {total}%
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <VerticalBar data={chartData}/>
                </div>
            </div>
        </div>
    )
}

export default Results