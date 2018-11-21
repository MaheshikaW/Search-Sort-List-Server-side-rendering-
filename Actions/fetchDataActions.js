import axios from 'axios'


export const fetchData=()=>{
    return((dispatch)=>{
    
        dispatch(fetchSearchData())
        axios.get("https://data.delaware.gov/resource/ncv7-2w22.json")
        .then((response)=>{
           dispatch(recieveData(response))
        }) 
    .catch((err)=>{
        dispatch(recieveErr(err))

    })
})
}
export const  serachByValue =(searchvalue,allRecords) =>{
    return ((dispatch)=>{
		dispatch(serachByvalue(searchvalue,allRecords))
	})
}


export const sortByValue=(allRecords,sortval,clicks)=>{
    return ((dispatch)=>{
        dispatch(sortByvalue(allRecords,sortval,clicks))
    })
}
export const sortByClassSize=(allRecords,sortval,clicks)=>{
    return ((dispatch)=>{
        dispatch(sortByClass(allRecords,sortval,clicks))
    })
}




function fetchSearchData(){
    return {
        type:"FETCH_DATA_START"
    }

}

function recieveData(response){
    return{
        type:"RECIEVE_DATA",
        payload:response.data
    }
}

function recieveErr(err){
    return{
        type:"RECIEVE_ERROR",
        payload:err
    }
}

function serachByvalue(searchvalue,allRecords){
    return {
         type:"SEARCH_BY_VALUE",
         payload:{searchvalue,allRecords}
     }
     
 }

 function sortByvalue(allRecords,sortval,clicks){
     return{
         type:"SORT_BY_VALUE",
         payload:{allRecords,sortval,clicks}
     }
 }
 function sortByClass(allRecords,sortval,clicks){
    return{
        type:"SORT_BY_CLASS",
        payload:{allRecords,sortval,clicks}
    }
}
