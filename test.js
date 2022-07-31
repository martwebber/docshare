
let f1 = "dfghfghghjfghh.pdf"
let f2 = "dfghfghghjfghh.ppt"
let f3 = "dfghfghghjfghh.jpg"
let f4 = "dfghfghghjfghh.txt"
let filesArr =  [f1,f2,f3,f4]
let accept=['xlsx','xls','doc','docx','ppt','pptx','txt','pdf']

for (let x of filesArr){
    let arr = x.split('.')
    if(accept.includes(arr[1])){
        console.log(`${arr.join('.')} is valid`)
    }else{
        console.log(`${arr.join('.')} is invalid`)

    }

    
}