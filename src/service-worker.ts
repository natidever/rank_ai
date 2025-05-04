
let seoanalysis={}
chrome.runtime.onMessage.addListener((req,sender,sendResponse)=>{
    // console.log
    if(req.type === "SEND_SEO_ANALYSIS_TO_BACKGROUND"){
        console.log("data",req)
        sendResponse({status:true,response:"background_service_accepted"})
        seoanalysis=req.content
         
        sendResponse({status:true,content:`background_accepted this ${req.content}`})

    }
    if(req.type ==="GET_SEO"){
        sendResponse({status:true,content:seoanalysis})
    }
    
})



