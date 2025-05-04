

document.addEventListener('DOMContentLoaded',()=>{

chrome.runtime.sendMessage({type:"GET_SEO"},(response)=>{
    console.log("response::",response)
    if(response && response.content){
        const title = document.querySelector('.info-value.title') !
        title.textContent = response.content.seoObject.title
        
        const title_length = document.querySelector('.badge-title') !
        title_length.textContent = response.content.seo_analysis.title_analysis.recommendation

       
        const description = document.querySelector('.info-value.description') !
        description.textContent = response.content.seoObject.description
        // description length 
        const description_length  = document.querySelector('.badge-description') !
        description_length.textContent = response.content.seo_analysis.desctiption_analysis.recommendation

        // 

    }
})
})
