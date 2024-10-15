function stringop(abc){
    const ipElement = document.getElementById("input")
    const opElement = document.getElementById("output")

    if (abc =="upper"){
        opElement = ipElement.value.toUpperCase();
    }
    else if(abc =="lower"){
        opElement.value = ipElement.value.toLowerCase();
    }
    else if(abc =="word"){
        const totalwords = ipElement.value.split(" ").length;

        opElement.value = `Character Count: ${totalwords}`;
    }
    else if(variable =="char"){
        opElement.value = `Character Count: ${ipElement.value.length}`;
    }

}