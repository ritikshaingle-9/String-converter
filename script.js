function stringop(variable){
    const ipElement = document.getElementById("input")
    const opElement = document.getElementById("output")

    if (variable =="upper"){
        opElement.value = ipElement.value.toUpperCase();
    }
    else if(variable =="lower"){
        opElement.value = ipElement.value.toLowerCase();
    }
    else if(variable =="char"){
        opElement.value = `Character Count ${ipElement.value.length}`;
    }
    else if(variable =="word"){
        const totalwords = ipElement.value.split(" ").length;
        opElement.value = `Word count: ${totalwords}`;

    }

}