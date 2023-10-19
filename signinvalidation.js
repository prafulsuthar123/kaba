// js for menu slider

function openBar()
{
    document.getElementById('nav').style.transform = "translate(00vw)"
    document.getElementById('open-btn').style.display='none'
    document.getElementById('close-btn').style.display='block'

}
function closeBar()
{
    document.getElementById('nav').style.transform = "translate(-100vw)"
    document.getElementById('open-btn').style.display='block'
    document.getElementById('close-btn').style.display='none'

}


// signin signup slider

const main_box = document.querySelector('.main_box');
const main_content_1 = document.querySelector('.main_content_1');
const main_content_2 = document.querySelector('.main_content_2');

const input_box = document.querySelector('.input_box');
const input_content_1 = document.querySelector('.input_content_1');
const input_content_2 = document.querySelector('.input_content_2');

const change = document.getElementById('change');
const unchange = document.getElementById('unchange');

const changeBoxes = () =>{
    input_box.style.transform = 'translate(-100%)';
    main_box.style.transform = 'translate(100%)';
    main_content_1.style.display = 'none';
    input_content_1.style.display = 'none';
    main_content_2.style.display = 'block';
    input_content_2.style.display = 'inline-flex'; 
};
const changeBoxesAgain = () =>{
    input_box.style.transform = 'translate(0%)';
    main_box.style.transform = 'translate(0%)';
    main_content_2.style.display = 'none';
    input_content_2.style.display = 'none';
    main_content_1.style.display = 'block';
    input_content_1.style.display = 'inline-flex';
};

change.addEventListener('click',() =>{
    changeBoxes();
});

unchange.addEventListener('click',() =>{
    changeBoxesAgain();
});
// signin js validation

const form_2 = document.getElementById('form_2');

form_2.addEventListener('submit', (event_2) =>{
    event_2.preventDefault();
    signinResult();
});

const signinResult = () =>{
    swal("Oops! ", "You don't have an account. Create New", "info")
            .then((value) => {
                changeBoxesAgain();
            });
};
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
    if(nam.value == '')
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
    if(upattern1.test(name.value))
    {
        document.getElementById('nametext').innerHTML= '"' + name.value + '" USERNAME IS AVAILABLE !'
        document.querySelector('#namefc').className = 'form-control success'
    }
    else if(upattern2.test(name.value))
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

        var weak=/([A-Za-z0-9!@#$%^&*]{0,})/
        var medium=/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/
        var strong=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

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

// js for timer

var countDownDate = new Date("dec 06, 2023 12:00:00").getTime();
var x = setInterval(function() {
    
    var now = new Date().getTime();
    var distance = countDownDate - now; 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "LAUNCHED";
    }

}, 1000);

 // js for testimonials

 const prev = document.getElementById('prev');
 const next = document.getElementById('next');
 let slider = document.querySelector('.slider');
 let slideIndex = 0;
 
 prev.addEventListener('click',() =>{
     slideIndex = (slideIndex - 1 + 5) % 5;
     slider.style.transform = 'translate('+ ( slideIndex ) * -20 +'%)';
     slider.style.animation = 'none';        
 });
 
 next.addEventListener('click',() =>{
     slideIndex = (slideIndex + 1) % 5;
     slider.style.transform = 'translate('+ ( slideIndex ) * -20 +'%)';
     slider.style.animation = 'none';        
 
 });
  
  
     
 
 
 
 
 
 
 