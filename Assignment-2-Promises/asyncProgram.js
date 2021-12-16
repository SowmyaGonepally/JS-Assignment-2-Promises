

function getData(uId) {
    return new Promise((resolve,reject)=>
    {
  setTimeout(() => {
  console.log("Fetched the data!");
   resolve("skc@gmail.com");
  }, 4000);
   
   }
    )
    }
    
async function printMail()
{
    console.log("start");
    let mail=await getData("skc");
    console.log("Email id of the user id is: " + mail)
    console.log("end");
    
}

printMail();
