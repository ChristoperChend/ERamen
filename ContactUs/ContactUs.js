function submit() {
    var form = document.getElementById('form');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var preferences = document.getElementById('preferences');
    var agree = document.getElementById('agree');

    var setError = function(element, message) {
        var inputControl = element.parentElement;
        var errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };
    
    var setSuccess = function(element) {
        var inputControl = element.parentElement;
        var errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    var setError1 = function(element, message) {
        var inputControl = element.parentElement;
        var errorDisplay = inputControl.querySelector('.error1');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error1');
        inputControl.classList.remove('success1');
    };
    
    var setSuccess1 = function(element) {
        var inputControl = element.parentElement;
        var errorDisplay = inputControl.querySelector('.error1');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success1');
        inputControl.classList.remove('error1');
    };

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const preferencesValue = preferences.value.trim();

        if(usernameValue === '')
        {
            setError(username, 'Name is required');
        }
        else if(usernameValue.length < 3)
        {
            setError(username, 'Name must be at least 3 letters long');
        }
        else
        {
            setSuccess(username);
        }

        if(emailValue === '')
        {
            setError(email, 'Email is required');
        }
        else if(!emailValue.endsWith("@gmail.com"))
        {
            setError(email, 'Email must end with @gmail.com');
        }
        else
        {
            setSuccess(email);
        }

        if(phoneValue === '')
        {
            setError(phone, 'Phone number is required');
        }
        else if(phoneValue.length < 5)
        {
            setError(phone, 'Phone number must be at least 5 characters');
        }else
        {
            setSuccess(phone);
        }

        if(preferencesValue === '')
        {
            setError(preferences, 'Preferences is required');
        }
        else if(preferencesValue !== "Ramen" && preferencesValue !== "Dry Ramen")
        {
            setError(preferences, "Preferences must be Ramen or Dry Ramen");
        }else
        {
            setSuccess(preferences);
        }

        if(!agree.checked)
        {
            setError1(agree, 'You must agree to receive the newsletter');
        }
        else
        {
            setSuccess1(agree);
        }

        if(usernameValue !== '' && usernameValue.length >= 3 && emailValue !== '' &&
            emailValue.endsWith("@gmail.com") && phoneValue !== '' && phoneValue.length >= 5 &&
            preferencesValue !== '' && (preferencesValue === "Ramen" || preferencesValue === "Dry Ramen") && agree.checked
        )
            {
                var errorDisplay = document.querySelector('.error');
                errorDisplay.innerHTML = "";
                alert("Successful!! Thank you for filling out the form, we will send the newsletter soon");
                form.submit();
            }
    }
    validateInputs();
}


