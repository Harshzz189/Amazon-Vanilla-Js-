let terms=document.querySelector('.terms-text');
        let rules= document.querySelector('.display-list li');
        let toshow=false;
       terms.addEventListener('click', (e) =>
        {   e.preventDefault();
            if(toshow ===false)
        {
           rules.innerHTML=`
           <ol>
                <li>
                 By logging in, you confirm that the information you provide is accurate, complete, and belongs to you
                </li>
                <li>
                 You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
                </li>
                <li>
                 Unauthorized access, sharing of accounts, or misuse of the platform may result in suspension or permanent termination of access.   
                </li>
                <li>
                 We reserve the right to update, modify, or remove features of this service at any time without prior notice.
                </li>   
            </ol>`;
            toshow=true;
           }
          else
           {
           rules.innerHTML='';
            toshow=false;
            }  
        });
        let loginButton=document.querySelector('.login-button');
        let checkBox=document.querySelector('.check-box');
        loginButton.addEventListener('click',(e)=>
    {    e.preventDefault();
         if(checkBox.checked === true)
         {
            alert('Succesfully Submitted');
         }
         else{
            alert(`Agree the Terms & Conditions First`)
         }
    })
     