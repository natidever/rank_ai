import { MetaTagTypes,EmptyType } from "./types"

import { TitleRecommendation ,DescriptionRecommendation} from "./models"
import { ColorDesciption } from "./constants"



export const getWebTitle=():string =>{
let title = document.title
console.log("title",title)

return title
}

export const getWebDescription=():MetaTagTypes =>{
    let description = document.querySelector('meta[name="description"]')?.getAttribute('content')
    console.log("desc",description)
    return description
    
}

export const getWebKeyword=():MetaTagTypes =>{
    let keyword = document.querySelector('meta[name="keywords"]')?.getAttribute('content')
    console.log("keyworsd",keyword)
    
    return keyword
    
}

export const getWebLinks=()=>{
    let links = document.getElementsByTagName('a')
    for(let i =0;i<links.length;i++){
       if (i >=500){
        return 
       }
        // console.log("Links are ",links[i].href)
    }
    
    return links
    
}

export const getWebHeadings=()=>{
    let heading = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
      heading.forEach(headings=>{ 
console.log(headings.tagName,headings.textContent)
      })

      return heading
   

}

export const getCanonicalURL=()=>{
    let canonicalURL = document.querySelector("link[rel='canonical']")as HTMLLinkElement
    let url=canonicalURL?.href

console.log("URL",url)
    return canonicalURL

}

// STATIC SEO ANALYSIS WIHOUT AI INTEGRATION

export const getTitleRecommendation = (title:string):TitleRecommendation| string =>{


     if(title.length >50 ||title.length<60){
       return  new TitleRecommendation(`${title.length } character `,100,ColorDesciption.GREEN);
        

     }else if (title.length >60 ||title.length<80){
        return  new TitleRecommendation(`${title.length } character`,60,ColorDesciption.YELLO);

     }else if (title.length>80){
        return  new TitleRecommendation(`${title.length } character`,50,ColorDesciption.RED);

     }
     else if (title ===null||title ===undefined ||title ===''){
       return 'there is no title'
     }else {
        return 'there is no title'


     }

     
}

export const getWebDescriptionRecommendation = (description:string,title:string):DescriptionRecommendation| string =>{
   if(description){


    if(description.length >50 ||description.length<60 &&  description.includes(title)){
       
        return  new DescriptionRecommendation(`${title.length } character`,100,'green');
         
  
      }else if (description.length >60 ||description.length<80){
         return  new DescriptionRecommendation(`${title.length } character`,60,"red");
  
      }else if (description.length>80){
         return  new DescriptionRecommendation(`${title.length } character`,50,'red');
  
      }
      else if (description ===null||description ===undefined ||description ===''){
        return 'there is no description'
      }else {
         return 'there is no description'
  
  
      }

   }else{
    return 'there is no description'

   }

  

    
}

export const getURLAnalysis=()=>{}

