
function telephoneCheck(str) {
  
  
  console.log(str[1]);
  
  
  if((str[0] === "(") && (str[4] === ")") )
  {
    
  }
  else if(str[0] === "(" )
  {
  	return false;
  }
  else if(str[0] === "-"){
  	return false;
  }

  if(str[0] !== "(" && str[3] === ")")
  {
  	return false;
  }
  else if(str[0] !== "(" && str[5] === ")"){
  	if(str[1] === "(" && str[5] === ")")
  	{
  		
  	}else{
  		return false;
  	}
  	
  }

  str = str.replace(/[\)]\s/gi, "");
  str = str.replace(/\)/gi, "");
  str = str.replace(/-/gi, "");

  
  
  str = str.replace(/\(/gi, "");
  
  if(str.length == 11 && str[0] != 1)
    {
    	console.log("in thsi");
      return false;
    }

  str = str.replace(/\s/gi, "");
  
    if(str.length == 11 && str[0] != 1)
    {
      return false;
    }
  
  
  return (str.length == 10 || str.length == 11) ? true : false ;
}
