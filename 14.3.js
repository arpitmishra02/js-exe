var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];



function restructure(objectArray){
    var teamleaders=new Array(),programmers=new Array();
    function person(name,age)
    {
        this.name=name;
        this.age=age;
    }
    for(i in objectArray)
    {
        var temp= new person(objectArray[i].name,objectArray[i].age);
        if(objectArray[i].occupation=="Programmer")
            programmers.push(temp);
        else
            teamleaders.push(temp);
    }
    return({"Team Leader":teamleaders,"Programmer":programmers});
}

console.log(restructure(myObj));


