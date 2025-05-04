import { 
    getWebDescription,
    getWebKeyword,
    getWebTitle ,
    getWebLinks,
    getWebHeadings,
    getCanonicalURL,
    getTitleRecommendation,
    getWebDescriptionRecommendation

} from "./utils";

// getWebDescription()

// getWebKeyword()
// getWebLinks()
// getWebHeadings()
// getCanonicalURL()

function getSEObject(){
    return {
           title: getWebTitle(),
           
        
        description:getWebDescription(),
        headings:getWebHeadings(),
                // TODO:KEYWORD SHOULD BE LIST OR ARRAY NOT META-TAG ELEMEN
        keywords:getWebKeyword(),
        weblinks:getWebLinks(),
        canonicalURL:getCanonicalURL()

        // 
    }
}


(async ()=>{
    let seoObject = getSEObject()
    let title:string=seoObject.title
    let description =seoObject.description as string
    let title_analysis_result = getTitleRecommendation(title)
    let desctiption_analysis = getWebDescriptionRecommendation(description,title)



    

chrome.runtime.sendMessage({type:"SEND_SEO_ANALYSIS_TO_BACKGROUND",
     content:{
    seoObject:seoObject,
    seo_analysis:{
    title_analysis:title_analysis_result,
    desctiption_analysis:desctiption_analysis
}}},
    (service_workder_response)=>{
        console.log("background response",service_workder_response)
    })


})()


