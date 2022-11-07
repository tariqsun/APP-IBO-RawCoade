



export const trimString = (str) =>{
    str = str.replace(' ', '');
    str = str.replace('+', '');
    // str = str.replace('0', '92');
    return str.trim();
}


export const getWhatsappLink = (object) =>{
    console.log(object);
   let link = object.phone_number;
   let due_amount = object.due_amount?object.due_amount:object.balance;
   let due_date = new Date(object.due_date);
   
   let wa_link = 'https://web.whatsapp.com/send/'; 

   wa_link += '?phone='+link;
   wa_link += `&text=Dear customer your bill is due, please pay Internet Bill ${due_amount} before the due date of ${due_date.getDay()+'-'+due_date.getMonth()+'-'+due_date.getFullYear()} to avoid service suspension. EasyPaisa at 03217639635  Thanks
   Auto Billing Responder "SunLink"`
   return wa_link;
};


