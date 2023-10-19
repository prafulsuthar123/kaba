// signup form validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    checkit();
    spaceValidation();
});


const spaceValidation = () =>{
    if(name.value == '')
    {
        document.getElementById('nametext').innerHTML='Username cannot be blank !'
        document.querySelector('#namefc').className = 'form-control error'
    }
    if(email.value == '')
    {
        document.getElementById('emailtext').innerHTML='Email cannot be blank !'
        document.querySelector('#emailfc').className = 'form-control error'
    }
    if(phone.value == '')
    {
        document.getElementById('phonetext').innerHTML='Mobile cannot be blank !'
        document.querySelector('#phonefc').className = 'form-control error'
    }
    if(pass.value == '')
    {
        document.getElementById('passtext').innerHTML='Password cannot be blank !'
        document.querySelector('#passfc').className = 'form-control error'
    }
    if(cpass.value == '')
    {
        document.getElementById('cpasstext').innerHTML='Confirm Password cannot be blank !'
        document.querySelector('#cpassfc').className = 'form-control error'
    }

};

name.addEventListener('keyup', () =>{
    var upattern1=/^[A-Za-z0-9]{3,}$/
    var upattern2=/^(?=.[0-9]){2,}(?=.[a-z]){2,}[A-Za-z0-9]{5,}$/
    if(upattern2.test(name.value))
    {
        document.getElementById('nametext').innerHTML= '"' + name.value + '" USERNAME IS AVAILABLE !'
        document.querySelector('#namefc').className = 'form-control success'
    }
    else if(upattern1.test(name.value))
    {
        document.getElementById('nametext').innerHTML= '"' + name.value + '" USERNAME IS NOT AVAILABLE !'
        document.querySelector('#namefc').className = 'form-control error'
    }
    else
    {
        document.getElementById('nametext').innerHTML='INVALID USERNAME !'
        document.querySelector('#namefc').className = 'form-control error'
    }

});

email.addEventListener('keyup', () =>{
    var pattern=/^[A-Za-z.0-9]{3,}@[a-z]{3,}[.]{1}[a-z]{2,}[.]{0,1}[a-z]{0,3}$/
        if(pattern.test(email.value))
        {
            document.getElementById('emailtext').innerHTML='Your Email Address is valid.'    
            document.querySelector('#emailfc').className = 'form-control success'
        
        }
        else
        {
            document.getElementById('emailtext').innerHTML='You are entering an Invalid Email.'
            document.querySelector('#emailfc').className = 'form-control error'

        }

});

phone.addEventListener('keyup', () =>{
        if(phone.value.length== 10)
        {
            document.getElementById('phonetext').innerHTML='Your Mobile Number is valid.'    
            document.querySelector('#phonefc').className = 'form-control success'
        
        }
        else
        {
            document.getElementById('phonetext').innerHTML='You are entering an Invalid Mobile Number.'
            document.querySelector('#phonefc').className = 'form-control error'

        }

});

pass.addEventListener('keyup', () =>{

        var weak=/^[A-Za-z0-9!@#$%^&*]{0,}$/
        var medium=/^(?=.[0-9])(?=.[a-z])[A-Za-z0-9!@#$%^&*]{5,}$/
        var strong=/^(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])[A-Za-z0-9!@#$%^&*]{8,}$/

        if(strong.test(pass.value))
        {
            document.getElementById('passtext').innerHTML='Your Password Strength - Strong'
            document.querySelector('#passfc').className = 'form-control success'
        }
        else if(medium.test(pass.value))
        {
            document.getElementById('passtext').innerHTML='Your Password Strength - Medium'
            document.querySelector('#passfc').className = 'form-control success'

        }
        else if(weak.test(pass.value))
        {
            document.getElementById('passtext').innerHTML='Your Password Strength - Weak'
            document.querySelector('#passfc').className = 'form-control error'
        }
        else
        {
            document.getElementById('passtext').innerHTML='CAUTION!!! You are entering an Invalid Charactor.'
            document.querySelector('#passfc').className = 'form-control error'
        }

});


cpass.addEventListener('keyup', () =>{

    if(pass.value == cpass.value)
    {
        document.getElementById('cpasstext').innerHTML='PASSWORD MATCHED'
        document.querySelector('#cpassfc').className = 'form-control success'

    }
    else
    {
        document.getElementById('cpasstext').innerHTML='PASSWORD NOT MATCHED !'
        document.querySelector('#cpassfc').className = 'form-control error'

    }

});


const finalState = (count, srate) =>{
    if(srate == 4)
    {
        swal("Congratulations! "+ name.value , "Your Registration Is Successful!", "success")
            .then((value) => {
                location.href = 'signin.html';
            });
    }
    else
    {
        return false;
    }
};


const checkit = () =>{
    let checking = document.getElementsByClassName('form-control');
    console.log(checking);
    let count = checking.length - 1;
    for(let i = 0; i< checking.length; i++)
    {
        if(checking[i].className == 'form-control success')
        {
            var srate = 0 + i;
            finalState(count, srate);
            console.log(srate,count);

        }
        else
        {
            return false;
        }
    }

}