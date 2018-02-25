function ticketsManager(ticketArr,sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let tickets=[];
    for (let info of ticketArr) {
        let tokens=info.split('|');
        let ticket=new Ticket(tokens[0],Number(tokens[1]),tokens[2]);
        tickets.push(ticket);
    }


    let sorted=tickets.sort((a,b)=>{
        let aValue=a[sortingCriteria];
        let bValue=b[sortingCriteria];
       
        if(aValue>bValue)return 1;
        if(aValue<bValue)return -1;
        if(aValue==bValue)return 0;
    });

    return sorted;
    
}




ticketsManager(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);