

document.addEventListener('DOMContentLoaded',()=>{

     chrome.tabs.query({active:true ,currentWindow:true},(tabs)=>{
            const tabID =tabs[0].id




            chrome.runtime.sendMessage({type:"GET_SEO",tabID},(response)=>{
                console.log("response::",response)
                if(response && 
                    response.content &&
                    response.content.seoObject &&
                    response.content.seo_analysis
                
                
                ) {
            
            
                   
                    const title = document.querySelector('.info-value.title') !
                    title.textContent = response.content.seoObject.title
                    
                    const title_length = document.querySelector('.badge-title') !
                    title_length.textContent = response.content.seo_analysis.title_analysis.recommendation
            
                   
                    const description = document.querySelector('.info-value.description') !
                    description.textContent = response.content.seoObject.description
                    // description length 
                    const description_length  = document.querySelector('.badge-description') !
                    description_length.textContent = response.content.seo_analysis.desctiption_analysis.recommendation
                    // URL
                    const url = document.querySelector('.info-value.url') !
                    url.textContent = response.content.seoObject.webURL
                    // 
                    const canonicalURL =document.querySelector('.info-value.canonical')!
                    canonicalURL.textContent = response.content.seoObject.canonicalURL






                 
            
                    // 
            
                }
            })            // i am going to send 

        })


})
