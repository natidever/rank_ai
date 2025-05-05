
let seoanalysis:Record<number,any>={}

chrome.runtime.onMessage.addListener((req,sender,sendResponse)=>{
     

   const tabId = sender.tab?.id;
   
    if(req.type === "SEND_SEO_ANALYSIS_TO_BACKGROUND"){
        if(tabId !== undefined){
            console.log("data",req)
            sendResponse({status:true,response:"background_service_accepted"})
            seoanalysis[tabId]=req.content
             
            sendResponse({status:true,content:`background_accepted this ${req.content}`})

        }


    }
    if(req.type ==="GET_SEO"&& typeof req.tabID){
        sendResponse({status:true,content:seoanalysis[req.tabID]})
    }
    
})



